import express from "express";
import { fetchHealthRecords } from "../controllers/healthRecordController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/:patientId", authMiddleware, fetchHealthRecords);

export default router;
