const mongoose = require('mongoose');
const config = require('./default.json'); 

const connectDB = async () => {
    try {
        await mongoose.connect(config.mongodb.uri);
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
