const express = require('express');
const router = express.Router();
const imageUpload = require('../utils/imageUpload');
const {
  getAllTechnologies,
  getTechnologyById,
  getTechnologyBySearch,
  addTechnology,
  updateTechnology,
  removeTechnologyById,
} = require('../controllers/technologies.controller');

router.get('/technologies', getAllTechnologies);
router.get('/technologies/:id', getTechnologyById);
router.get('/technologies/search/:searchPhrase', getTechnologyBySearch);
router.post('/technologies', imageUpload.single('image'), addTechnology);
router.put('/technologies/:id', imageUpload.single('image'), updateTechnology);
router.delete('/technologies/:id', removeTechnologyById);

module.exports = router;
