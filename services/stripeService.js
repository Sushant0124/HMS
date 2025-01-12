import Stripe from "stripe";

// Initialize Stripe with Secret Key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

/**
 * Create a Payment Intent for billing
 * @param {Number} amount - Amount to be charged in cents
 * @param {String} currency - Currency (default USD)
 */
export const createPaymentIntent = async (amount, currency = "usd") => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency,
            payment_method_types: ["card"],
        });
        return paymentIntent.client_secret;
    } catch (error) {
        throw new Error("Error creating payment intent: " + error.message);
    }
};

/**
 * Refund a Payment
 * @param {String} paymentIntentId - ID of the payment intent to refund
 */
export const refundPayment = async (paymentIntentId) => {
    try {
        await stripe.refunds.create({
            payment_intent: paymentIntentId,
        });
        return "Refund Successful";
    } catch (error) {
        throw new Error("Error processing refund: " + error.message);
    }
};
