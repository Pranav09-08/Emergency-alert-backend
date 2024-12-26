const express = require('express');
const router = express.Router();
const IncidentReport = require('../models/IncidentReport');

// Route to submit a new incident report
router.post('/', async (req, res) => {
    const { description, category, mediaUrl, latitude, longitude } = req.body;

    const newReport = new IncidentReport({
        description,
        category,
        mediaUrl,
        location: { latitude, longitude },
    });

    try {
        await newReport.save();
        res.status(201).json(newReport);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Route to get all incident reports
router.get('/', async (req, res) => {
    try {
        const reports = await IncidentReport.find();
        res.json(reports);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
