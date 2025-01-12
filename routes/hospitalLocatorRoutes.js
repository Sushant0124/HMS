import express from "express";
import { getNearbyHospitals } from "../controllers/hospitalLocatorController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/nearby", authMiddleware, getNearbyHospitals);

export default router;
