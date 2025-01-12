import express from "express";
import { createJitsiVideoCall } from "../controllers/videoCallController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Generate a free Jitsi meeting link
router.post("/create-meeting", authMiddleware, createJitsiVideoCall);

export default router;
