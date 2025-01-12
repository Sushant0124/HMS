import express from "express";
import { createBilling, getBillings } from "../controllers/billingController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();
router.post("/", authMiddleware, createBilling);
router.get("/", authMiddleware, getBillings);

export default router;
