// server/routes/activityRoutes.js
const express = require('express');
const router = express.Router();
const Activity = require('../models/Activity');
const authenticate = require('../middleware/authenticate');

// Create a new activity
router.post('/', authenticate, async (req, res) => {
  try {
    const { activityType, duration, date } = req.body;
    const userId = req.user.userId;

    // Create a new activity
    const newActivity = new Activity({
      userId,
      activityType,
      duration,
      date,
    });

    // Save the activity to the database
    await newActivity.save();

    res.status(201).json({ message: 'Activity logged successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get all activities for a user
router.get('/', authenticate, async (req, res) => {
  try {
    const userId = req.user.userId;

    // Find all activities for the user
    const activities = await Activity.find({ userId });

    res.status(200).json(activities);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;