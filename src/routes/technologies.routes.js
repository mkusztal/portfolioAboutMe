const express = require('express');
const router = express.Router();
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
router.post('/technologies', addTechnology);
router.put('/technologies/:id', updateTechnology);
router.delete('/technologies/:id', removeTechnologyById);

module.exports = router;
