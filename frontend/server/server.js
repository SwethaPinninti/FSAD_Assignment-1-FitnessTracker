// server/server.js
const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const connectToDatabase = require('./config/db');

// Import routes
const authRoutes = require('./routes/authRoutes');
const activityRoutes = require('./routes/activityRoutes');
const goalRoutes = require('./routes/goalRoutes');
const progressRoutes = require('./routes/progressRoutes');
const workoutPlanRoutes = require('./routes/workoutPlanRoutes');
const wearableRoutes = require('./routes/wearableRoutes');
const nutritionRoutes = require('./routes/nutritionRoutes');

app.use(cors());
app.use(express.json());

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/activities', activityRoutes);
app.use('/api/goals', goalRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/workoutPlans', workoutPlanRoutes);
app.use('/api/wearables', wearableRoutes);
app.use('/api/nutrition', nutritionRoutes);

const port = process.env.PORT || 5000;

connectToDatabase().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});