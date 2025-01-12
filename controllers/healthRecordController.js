import { getPatientHealthRecords } from "../services/fhirService.js";

export const fetchHealthRecords = async (req, res) => {
    const { patientId } = req.params;
    try {
        const records = await getPatientHealthRecords(patientId);
        res.status(200).json(records);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
