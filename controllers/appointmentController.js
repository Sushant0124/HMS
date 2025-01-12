import Appointment from "../models/Appointment.js";

export const createAppointment = async (req, res) => {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).json(appointment);
};

export const getAppointments = async (req, res) => {
    const appointments = await Appointment.find().populate("patientId doctorId");
    res.json(appointments);
};
