import sgMail from "@sendgrid/mail";

// Initialize SendGrid with API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/**
 * Send Email Notification using SendGrid
 * @param {String} to - Recipient's email
 * @param {String} subject - Email subject
 * @param {String} text - Email body message
 */
export const sendEmailNotification = async (to, subject, text) => {
    const msg = {
        to,
        from: process.env.SENDGRID_FROM_EMAIL,
        subject,
        text,
    };

    try {
        await sgMail.send(msg);
        return "Email Sent Successfully";
    } catch (error) {
        throw new Error("Error sending email: " + error.message);
    }
};
