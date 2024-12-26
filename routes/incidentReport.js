const express = require('express');
const router = express.Router();
const IncidentReport = require('../models/IncidentReport');  // Assuming you have a model for incident reports

// POST route to create an incident report
router.post('/', async (req, res) => {
    try {
        const { description, category, media_url, timestamp, status, location } = req.body;

        // Create a new incident report
        const newReport = new IncidentReport({
            description,
            category,
            media_url,
            timestamp,
            status,
            location
        });

        // Save the report to MongoDB
        await newReport.save();
        res.status(201).json({ message: 'Incident reported successfully', incident: newReport });
    } catch (err) {
        res.status(500).json({ error: 'Failed to report incident', message: err.message });
    }
});

module.exports = router;
