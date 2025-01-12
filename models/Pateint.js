import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    medicalHistory: [String],
    contactInfo: {
        phone: String,
        address: String
    }
});

export default mongoose.model("Patient", patientSchema);
