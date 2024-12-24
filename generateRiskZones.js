const fs = require('fs');

// Define zones in Pune with approximate latitudes and longitudes
const zones = {
    red: [
        { lat: 18.5204, lng: 73.8567, radius: 0.02 }, // Example: Pune Railway Station
        { lat: 18.5308, lng: 73.8478, radius: 0.02 }, // Example: Swargate Bus Depot
    ],
    yellow: [
        { lat: 18.5397, lng: 73.9021, radius: 0.05 }, // Example: Kharadi
        { lat: 18.4967, lng: 73.8042, radius: 0.05 }, // Example: Warje
    ],
    green: [
        { lat: 18.5208, lng: 73.8359, radius: 0.1 }, // Example: Koregaon Park
        { lat: 18.5665, lng: 73.7769, radius: 0.1 }, // Example: Baner
    ],
};

// Generate random points within a zone
const generatePointsInZone = (zone, count, riskLevel) => {
    const points = [];
    for (let i = 0; i < count; i++) {
        const randomLat = zone.lat + (Math.random() - 0.5) * zone.radius;
        const randomLng = zone.lng + (Math.random() - 0.5) * zone.radius;
        points.push({
            latitude: randomLat.toFixed(6),
            longitude: randomLng.toFixed(6),
            riskLevel,
            description: `${riskLevel} risk zone`,
            timestamp: new Date().toISOString(),
        });
    }
    return points;
};

// Generate data for all zones
const generateData = () => {
    let data = [];
    zones.red.forEach((zone) => {
        data = data.concat(generatePointsInZone(zone, 300, 'High'));
    });
    zones.yellow.forEach((zone) => {
        data = data.concat(generatePointsInZone(zone, 400, 'Medium'));
    });
    zones.green.forEach((zone) => {
        data = data.concat(generatePointsInZone(zone, 300, 'Low'));
    });
    return data;
};

// Write data to a JSON file
const data = generateData();
fs.writeFileSync('puneRiskZones.json', JSON.stringify(data, null, 2));
console.log('Risk zone data generated and saved to puneRiskZones.json');
