import mongoose from "mongoose";

const billingSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true },
    appointmentId: { type: mongoose.Schema.Types.ObjectId, ref: "Appointment", required: true },
    amount: { type: Number, required: true },
    status: { type: String, enum: ["Paid", "Pending"], default: "Pending" }
});

export default mongoose.model("Billing", billingSchema);
