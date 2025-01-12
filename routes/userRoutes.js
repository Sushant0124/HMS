import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { authorizeRoles } from "../middlewares/roleMiddleware.js";

const router = express.Router();

// Public routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Admin only route to fetch all users
router.get("/admin/users", authMiddleware, authorizeRoles(["Admin"]), (req, res) => {
    res.send("Admin Access Granted");
});

export default router;
