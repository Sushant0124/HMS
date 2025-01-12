import { createPaymentIntent, refundPayment } from "../services/stripeService.js";

export const createBilling = async (req, res) => {
    const { amount } = req.body;
    try {
        const clientSecret = await createPaymentIntent(amount);
        res.status(201).json({ clientSecret });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const refundBilling = async (req, res) => {
    const { paymentIntentId } = req.body;
    try {
        const result = await refundPayment(paymentIntentId);
        res.status(200).json({ message: result });
    } catch (error) {
        res.status(500).send(error.message);
    }
};
