import { Worker, Job } from "bullmq";
import { redis } from "../config/redis";
import { prisma } from "../services/prisma";
import { createTransporter } from "../services/mailer";
import nodemailer from "nodemailer";

type EmailJobData = {
  emailId: string;
};

const worker = new Worker<EmailJobData>(
  "email-queue",
  async (job: Job<EmailJobData>) => {
    const { emailId } = job.data;

    const email = await prisma.email.findUnique({
      where: { id: emailId },
    });

    if (!email) throw new Error("Email not found");

    const transporter = await createTransporter();

    const info = await transporter.sendMail({
      from: `"ReachInbox" <no-reply@reachinbox.dev>`,
      to: email.to,
      subject: email.subject,
      text: email.body,
    });

    await prisma.email.update({
      where: { id: email.id },
      data: { status: "sent" },
    });

    console.log("📨 Email sent:", nodemailer.getTestMessageUrl(info));
  },
  {
    connection: redis,
    concurrency: Number(process.env.WORKER_CONCURRENCY || 3),
  }
);

worker.on("failed", async (job, err) => {
  if (job?.data?.emailId) {
    await prisma.email.update({
      where: { id: job.data.emailId },
      data: { status: "failed" },
    });
  }
  console.error("❌ Email failed:", err.message);
});
