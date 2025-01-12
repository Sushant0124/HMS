// Role-based Access Control Middleware
export const authorizeRoles = (roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: "Access Denied. Insufficient permissions." });
        }
        next(); // Proceed if role matches
    };
};
