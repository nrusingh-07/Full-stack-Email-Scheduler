import express from "express";
import cors from "cors";
import emailRoutes from "./routes/emailRoutes";
import authRoutes from "./routes/auth";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/emails", emailRoutes);
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

export default app;
