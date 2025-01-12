import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor", required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    comment: String,
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Review", reviewSchema);
