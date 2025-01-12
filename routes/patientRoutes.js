import express from "express";
import { createPatient, getPatients } from "../controllers/patientController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();
router.post("/", authMiddleware, createPatient);
router.get("/", authMiddleware, getPatients);

export default router;
