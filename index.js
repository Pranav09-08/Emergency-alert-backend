const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const connectDB = require('./config/db'); // Import the connectDB function
const incidentReportRouter = require('./routes/incidentReport');

// Initialize app
const app = express();
connectDB();
// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api/incident-reports', incidentReportRouter);

// Route to fetch high-risk areas from the JSON file
app.get('/api/high-risk-areas', (req, res) => {
    const dataPath = path.join(__dirname, 'puneRiskZones.json');  // Path to your JSON file
    
    // Read the JSON file
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read data' });
        }

        // Send the data as a response
        res.json(JSON.parse(data));
    });
});

// Root endpoint
app.get('/', (req, res) => {
    res.send('API is running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
