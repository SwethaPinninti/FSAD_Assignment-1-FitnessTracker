// server/routes/goalRoutes.js
const express = require('express');
const router = express.Router();
const Goal = require('../models/Goal');
const authenticate = require('../middleware/authenticate');

// Create a new goal
router.post('/', authenticate, async (req, res) => {
  try {
    const { goalType, targetValue, deadline } = req.body;
    const userId = req.user.userId;

    // Create a new goal
    const newGoal = new Goal({
      userId,
      goalType,
      targetValue,
      deadline,
    });

    // Save the goal to the database
    await newGoal.save();

    res.status(201).json({ message: 'Goal set successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get all goals for a user
router.get('/', authenticate, async (req, res) => {
  try {
    const userId = req.user.userId;

    // Find all goals for the user
    const goals = await Goal.find({ userId });

    res.status(200).json(goals);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;