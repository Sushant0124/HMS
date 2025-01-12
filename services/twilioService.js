import twilio from "twilio";

// Initialize Twilio with API Credentials
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const apiKeySid = process.env.TWILIO_API_KEY_SID;
const apiKeySecret = process.env.TWILIO_API_KEY_SECRET;

const twilioClient = twilio(accountSid, authToken);

/**
 * Generate a Video Call Token for a Participant
 * @param {String} identity - The participant's identity
 */
export const generateVideoCallToken = (identity) => {
    const AccessToken = twilio.jwt.AccessToken;
    const VideoGrant = AccessToken.VideoGrant;

    const token = new AccessToken(accountSid, apiKeySid, apiKeySecret);
    token.identity = identity;
    token.addGrant(new VideoGrant());
    return token.toJwt();
};

/**
 * Send an SMS Notification using Twilio
 * @param {String} to - Recipient's phone number
 * @param {String} message - Message body
 */
export const sendSmsNotification = async (to, message) => {
    try {
        await twilioClient.messages.create({
            body: message,
            from: process.env.TWILIO_PHONE_NUMBER,
            to,
        });
        return "SMS Sent Successfully";
    } catch (error) {
        throw new Error("Error sending SMS: " + error.message);
    }
};
