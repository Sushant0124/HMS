import Patient from "../models/Patient.js";

export const createPatient = async (req, res) => {
    const patient = new Patient(req.body);
    await patient.save();
    res.status(201).json(patient);
};

export const getPatients = async (req, res) => {
    const patients = await Patient.find().populate("userId");
    res.json(patients);
};
