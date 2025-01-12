import Doctor from "../models/Doctor.js";

export const createDoctor = async (req, res) => {
    const doctor = new Doctor(req.body);
    await doctor.save();
    res.status(201).json(doctor);
};

export const getDoctors = async (req, res) => {
    const doctors = await Doctor.find().populate("userId");
    res.json(doctors);
};
