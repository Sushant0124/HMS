import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// Register User
export const registerUser = async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
        const newUser = new User({ name, email, password, role });
        await newUser.save();
        res.status(201).send("User registered successfully");
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// Login User
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
        res.json({ token });
    } else {
        res.status(401).send("Invalid credentials");
    }
};
