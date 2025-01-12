import Review from "../models/Review.js";

export const addReview = async (req, res) => {
    const review = new Review(req.body);
    await review.save();
    res.status(201).json(review);
};

export const getDoctorReviews = async (req, res) => {
    const reviews = await Review.find({ doctorId: req.params.doctorId });
    res.json(reviews);
};
