const mongoose = require('mongoose');

const connectDB = async () => {
    try {
<<<<<<< HEAD
        await mongoose.connect('mongodb+srv://pranavmahale08:Pranav%401483@pranav08.45ccs.mongodb.net/emergency_alert');
=======
        await mongoose.connect('mongodb+srv://pranavmahale08:Pranav%401483@pranav08.45ccs.mongodb.net/?retryWrites=true&w=majority&appName=pranav08');
>>>>>>> c511a65c0ec1329bc8d83789ba8cc6344b114897
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection failed:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
