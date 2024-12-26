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

// GET route for fetching all incident reports
router.get('/', async (req, res) => {
    try {
        // Fetch all incident reports from the database
        const reports = await IncidentReport.find();

        // Send the reports as a response
        res.status(200).json(reports);
    } catch (error) {
        console.error('Error fetching reports:', error);
        res.status(500).json({ error: 'Failed to fetch incident reports' });
    }
});

module.exports = router;
