// server/routes/nutritionRoutes.js
const express = require('express');
const router = express.Router();
const Nutrition = require('../models/Nutrition');
const authenticate = require('../middleware/authenticate');

// Log a new nutrition entry
router.post('/', authenticate, async (req, res) => {
  try {
    const { mealType, calories, date } = req.body;
    const userId = req.user.userId;

    // Create a new nutrition entry
    const newNutrition = new Nutrition({
      userId,
      mealType,
      calories,
      date,
    });

    // Save the nutrition entry to the database
    await newNutrition.save();

    res.status(201).json({ message: 'Nutrition logged successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get all nutrition entries for a user
router.get('/', authenticate, async (req, res) => {
  try {
    const userId = req.user.userId;

    // Find all nutrition entries for the user
    const nutritionEntries = await Nutrition.find({ userId });

    res.status(200).json(nutritionEntries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;