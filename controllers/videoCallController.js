import { generateJitsiMeetingLink } from "../services/jitsiService.js";

// Create a Video Meeting Link using Jitsi
export const createJitsiVideoCall = (req, res) => {
    const { roomName } = req.body;
    try {
        const meetingLink = generateJitsiMeetingLink(roomName);
        res.status(200).json({ meetingLink });
    } catch (error) {
        res.status(500).send("Error creating video call");
    }
};
