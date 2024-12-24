const express = require('express');
const router = express.Router();
const HighRiskArea = require('../models/HighRiskAreas');

// Get all high-risk areas
router.get('/', async (req, res) => {
    try {
        const areas = await HighRiskArea.find();
        res.json(areas);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new high-risk area
router.post('/', async (req, res) => {
    const { name, latitude, longitude, riskLevel } = req.body;
    const area = new HighRiskArea({ name, latitude, longitude, riskLevel });
    try {
        await area.save();
        res.status(201).json(area);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a high-risk area
router.delete('/:id', async (req, res) => {
    try {
        const area = await HighRiskArea.findByIdAndDelete(req.params.id);
        if (!area) {
            return res.status(404).json({ message: 'Area not found' });
        }
        res.json({ message: 'Area deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
