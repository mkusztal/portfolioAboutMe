const express = require('express');
const router = express.Router();
const imageUpload = require('../utils/imageUpload');
const {
  getAllInformations,
  addInformation,
  updateInformation,
} = require('../controllers/informations.controller');

router.get('/informations', getAllInformations);
router.post('/informations', imageUpload.single('photo'), addInformation);
router.put('/informations/:id', imageUpload.single('photo'), updateInformation);

module.exports = router;
