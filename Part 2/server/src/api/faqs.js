const express = require('express');
const monk = require('monk');
const Joi = require('@hapi/joi');

const db = monk(process.env.MONGO_URI);
const faqs = db.get('faqs');

// const schema = Joi.object({
//   question: Joi.string().trim().required(),
//   answer: Joi.string().trim().required()
// });

const router = express.Router();

// READ ALL
router.get('/', async (req, res, next) => {
  try {
    const items = await faqs.find({});
    res.json(items);
  } catch (error) {
    next(error);
  }
});

// READ One
router.get('/:id', async (req, res, next) => {
  try {
    const items = await faqs.find({});
    res.json(items);
  } catch (error) {
    next(error);
  }
});

// Create One
// router.post('/', async (req, res, next) => {
//   try {
//     const value = await schema.validateAsync(req.body);
//     // const inserted = await faqs.insert(value);
//     res.json(value);
//   } catch (error) {
//     next(error);
//   }
// });

// Update One
// router.put('/:id', (req, res, next) => {
//   res.json({
//     message: 'Hello Update One',
//   });
// });

// // Delete One
// router.get('/:id', (req, res, next) => {
//   res.json({
//     message: 'Hello Delete One',
//   });
// });

module.exports = router;
