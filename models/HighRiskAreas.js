const mongoose = require('mongoose');

const HighRiskAreaSchema = new mongoose.Schema({
    name: String,
    latitude: Number,
    longitude: Number,
    riskLevel: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
});

module.exports = mongoose.model('HighRiskArea', HighRiskAreaSchema);
