import jwt from "jsonwebtoken";

// Verify Token and Extract User Information
export const authMiddleware = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next(); // Continue to the next middleware or controller
    } catch (error) {
        res.status(400).json({ message: "Invalid token. Access denied." });
    }
};
