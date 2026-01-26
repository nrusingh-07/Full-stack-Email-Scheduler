import { Router } from "express";

const router = Router();

router.post("/google", (req, res) => {
  console.log("✅ Google token received in auth route");
  console.log(req.body); // { token: "..." }

  res.json({
    success: true,
    message: "Google token received",
  });
});

export default router;
