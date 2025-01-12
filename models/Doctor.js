import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    specialization: { type: String, required: true },
    availability: [String]  // Example: ['Monday', 'Wednesday']
});

export default mongoose.model("Doctor", doctorSchema);
