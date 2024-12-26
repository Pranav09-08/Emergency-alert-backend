const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://pranavmahale08:Pranav%401483@pranav08.45ccs.mongodb.net/?retryWrites=true&w=majority&appName=pranav08');
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection failed:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
