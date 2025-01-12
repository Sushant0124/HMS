import admin from "firebase-admin";

// Initialize Firebase Admin SDK (ensure service account is properly set up)
admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT))
});

/**
 * Send a Push Notification using Firebase Cloud Messaging (FCM)
 * @param {String} deviceToken - The recipient device's FCM token
 * @param {String} title - Notification title
 * @param {String} body - Notification body message
 */
export const sendPushNotification = async (deviceToken, title, body) => {
    const message = {
        token: deviceToken,
        notification: {
            title,
            body,
        },
    };

    try {
        await admin.messaging().send(message);
        return "Push Notification Sent Successfully";
    } catch (error) {
        throw new Error("Error sending push notification: " + error.message);
    }
};
