import { sendPushNotification } from "../services/firebaseService.js";

// Send Push Notification Reminder
export const sendPushReminder = async (req, res) => {
    const { deviceToken, title, message } = req.body;
    try {
        const result = await sendPushNotification(deviceToken, title, message);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
