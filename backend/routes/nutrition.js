const express = require('express');
const Joi = require('joi');
const NotFoundError = require('../errors/not-found-error');
const InvalidRequestBodyError = require('../errors/invalid-request-body-error');
const Nutrition = require('../models').Nutrition;

const router = express.Router();
const http = require('http');
const server = http.createServer(router);

const cors = require('cors');

router.use(cors());

router.get('/:id', (req, res, next) => {
  Nutrition.findOne({ where: { id: req.params.id, userId: req.body.userId } }) // Modify to include userId
    .then((nutrition) => {
      if (!nutrition) {
        throw new NotFoundError('Nutrition item not found');
      }

      res.json(nutrition.toJSON());
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  const { error } = Joi.validate(req.body, {
    itemName: Joi.string().required(),
    calories: Joi.number().required(),
    protein: Joi.number().required(),
    carbohydrates: Joi.number().required(),
    fats: Joi.number().required(),
    userId: Joi.number().required(), // Add userId validation
  });

  if (error) {
    next(new InvalidRequestBodyError());
  } else {
    Nutrition.create({
      itemName: req.body.itemName,
      calories: req.body.calories,
      protein: req.body.protein,
      carbohydrates: req.body.carbohydrates,
      fats: req.body.fats,
      userId: req.body.userId, // Add userId assignment
    })
      .then(nutrition => res.json(nutrition.toJSON()))
      .catch(next);
  }
});

module.exports = router;
