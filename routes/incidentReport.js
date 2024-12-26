const express = require('express');
const IncidentReport = require('../models/IncidentReport'); // Import the IncidentReport model
const router = express.Router();

// Route to create a new incident report
router.post('/incident-reports', async (req, res) => {
  const { description, category, media_url, timestamp, status, location } = req.body;

  // Validate required fields
  if (!description || !category || !location) {
    return res.status(400).json({ message: 'Please provide all required fields' });
  }

  try {
    // Create a new incident report
    const newReport = new IncidentReport({
      description,
      category,
      media_url,
      timestamp,
      status,
      location,
    });

    // Save the report to MongoDB
    await newReport.save();

    // Send a success response
    res.status(201).json({ message: 'Incident reported successfully', report: newReport });
  } catch (error) {
    console.error('Error saving incident report:', error);
    res.status(500).json({ message: 'Failed to report incident', error: error.message });
  }
});

// Export the router
module.exports = router;
