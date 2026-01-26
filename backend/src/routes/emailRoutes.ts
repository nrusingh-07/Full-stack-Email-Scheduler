import { Router } from "express";
import { emailQueue } from "../emailQueue";
import { prisma } from "../services/prisma";

const router = Router();

router.post("/schedule", async (req, res) => {
  const { to, subject, body, scheduledAt } = req.body;

  const scheduleDate = new Date(scheduledAt);
  const delay = scheduleDate.getTime() - Date.now();

  if (delay < 0) {
    return res.status(400).json({ error: "Scheduled time must be in future" });
  }

  const email = await prisma.email.create({
    data: {
      to,
      subject,
      body,
      scheduledAt: scheduleDate,
      status: "scheduled",
    },
  });

  await emailQueue.add(
    "send-email",
    { emailId: email.id },
    { delay }
  );

  res.json({ success: true, emailId: email.id });
});

export default router;
