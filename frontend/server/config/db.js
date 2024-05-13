const mongoose = require('mongoose');

// Replace this with your actual MongoDB connection string
const connectionString = 'mongodb://0.0.0.0:27017/HealthTracker';

const connectToDatabase = async () => {
  try {
    await mongoose.connect(connectionString, {
      // Additional connection options if needed
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1);
  }
};

module.exports = connectToDatabase;