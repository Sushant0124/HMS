import mongoose from "mongoose";

const reminderSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true },
    message: { type: String, required: true },
    reminderTime: { type: Date, required: true },
    status: { type: String, enum: ["Pending", "Sent"], default: "Pending" }
});

export default mongoose.model("Reminder", reminderSchema);
