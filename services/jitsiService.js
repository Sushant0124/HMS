/**
 * Generate a Jitsi Video Call URL
 * @param {String} roomName - Custom room name for the meeting
 * @returns {String} - Jitsi Meet URL
 */
export const generateJitsiMeetingLink = (roomName) => {
    const jitsiBaseUrl = "https://meet.jit.si/";
    return `${jitsiBaseUrl}${roomName}`;
};
