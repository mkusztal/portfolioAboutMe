const express = require('express');
const router = express.Router();
const imageUpload = require('../middleware/imageUpload');
const {
  getAllInformations,
  addInformation,
  updateInformation,
} = require('../controllers/informations.controller');

router.get('/files', getAllInformations);
router.post('/files', imageUpload.single('doc'), addInformation);
router.put('/files/:id', imageUpload.single('doc'), updateInformation);

module.exports = router;
