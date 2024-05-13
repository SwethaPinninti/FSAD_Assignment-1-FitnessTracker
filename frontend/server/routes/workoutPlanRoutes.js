// server/routes/workoutPlanRoutes.js
const express = require('express');
const router = express.Router();
const WorkoutPlan = require('../models/WorkoutPlan');
const authenticate = require('../middleware/authenticate');

// Create a new workout plan
router.post('/', authenticate, async (req, res) => {
  try {
    const { name, description, exercises } = req.body;
    const userId = req.user.userId;

    // Create a new workout plan
    const newWorkoutPlan = new WorkoutPlan({
      userId,
      name,
      description,
      exercises,
    });

    // Save the workout plan to the database
    await newWorkoutPlan.save();

    res.status(201).json({ message: 'Workout plan created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get all workout plans for a user
router.get('/', authenticate, async (req, res) => {
  try {
    const userId = req.user.userId;

    // Find all workout plans for the user
    const workoutPlans = await WorkoutPlan.find({ userId });

    res.status(200).json(workoutPlans);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;