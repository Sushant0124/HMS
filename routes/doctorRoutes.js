import express from "express";
import { createDoctor, getDoctors } from "../controllers/doctorController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();
router.post("/", authMiddleware, createDoctor);
router.get("/", authMiddleware, getDoctors);

export default router;
