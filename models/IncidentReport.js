const mongoose = require('mongoose');

const incidentReportSchema = new mongoose.Schema({
  description: { type: String, required: true },
  category: { type: String, required: true },
  media_url: { type: String },
  timestamp: { type: Date, default: Date.now },
  status: { type: String, default: 'Pending' },
  location: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
});

const IncidentReport = mongoose.model('IncidentReport', incidentReportSchema);

module.exports = IncidentReport;
