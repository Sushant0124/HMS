import axios from "axios";

// Base URL of the FHIR Server
const FHIR_SERVER_URL = process.env.FHIR_SERVER_URL;

/**
 * Fetch Patient Health Records from FHIR Server
 * @param {String} patientId - The ID of the patient
 */
export const getPatientHealthRecords = async (patientId) => {
    try {
        const response = await axios.get(`${FHIR_SERVER_URL}/Patient/${patientId}`);
        return response.data;
    } catch (error) {
        throw new Error("Error fetching health records: " + error.message);
    }
};
