import express from "express";
import {
    createAppointment,
    getAppointments
} from "../controllers/appointmentController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { authorizeRoles } from "../middlewares/roleMiddleware.js";

const router = express.Router();

// Only authenticated users can book appointments
router.post("/", authMiddleware, authorizeRoles(["Patient"]), createAppointment);

// Admin and Doctors can view all appointments
router.get("/", authMiddleware, authorizeRoles(["Admin", "Doctor"]), getAppointments);

export default router;
