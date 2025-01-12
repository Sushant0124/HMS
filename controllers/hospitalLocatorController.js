import axios from "axios";

// Fetch Nearby Hospitals using Google Maps API
export const getNearbyHospitals = async (req, res) => {
    const { latitude, longitude } = req.query;
    const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=5000&type=hospital&key=${GOOGLE_API_KEY}`;

    try {
        const response = await axios.get(url);
        res.json(response.data.results);
    } catch (error) {
        res.status(500).send("Error fetching nearby hospitals");
    }
};
