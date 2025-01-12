import express from "express";
import { addReview, getDoctorReviews } from "../controllers/reviewController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();
router.post("/", authMiddleware, addReview);
router.get("/:doctorId", authMiddleware, getDoctorReviews);

export default router;
