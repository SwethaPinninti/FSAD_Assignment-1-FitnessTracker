// server/routes/progressRoutes.js
const express = require('express');
const router = express.Router();
const Progress = require('../models/Progress');
const authenticate = require('../middleware/authenticate');

// Create a new progress entry
router.post('/', authenticate, async (req, res) => {
  try {
    const { date, value } = req.body;
    const userId = req.user.userId;

    // Create a new progress entry
    const newProgress = new Progress({
      userId,
      date,
      value,
    });

    // Save the progress entry to the database
    await newProgress.save();

    res.status(201).json({ message: 'Progress recorded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get all progress entries for a user
router.get('/', authenticate, async (req, res) => {
  try {
    const userId = req.user.userId;

    // Find all progress entries for the user
    const progressEntries = await Progress.find({ userId });

    res.status(200).json(progressEntries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;