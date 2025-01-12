import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

// Import Routes
import userRoutes from "./routes/userRoutes.js";
import patientRoutes from "./routes/patientRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import billingRoutes from "./routes/billingRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import reminderRoutes from "./routes/reminderRoutes.js";
import videoRoutes from "./routes/videoRoutes.js";
import healthRecordRoutes from "./routes/healthRecordRoutes.js";
import hospitalLocatorRoutes from "./routes/hospitalLocatorRoutes.js";
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
// Mount Routes
app.use("/api/users", userRoutes);
app.use("/api/patients", patientRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/billing", billingRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/reminders", reminderRoutes);
app.use("/api/video", videoRoutes);
app.use("/api/health-records", healthRecordRoutes);
app.use("/api/hospitals", hospitalLocatorRoutes);
export default app;
