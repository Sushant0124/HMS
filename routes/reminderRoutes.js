import express from "express";
import { sendPushReminder } from "../controllers/reminderController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Send a free push notification using Firebase
router.post("/send-push-reminder", authMiddleware, sendPushReminder);

export default router;
