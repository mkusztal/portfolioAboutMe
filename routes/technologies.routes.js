const express = require('express');
const router = express.Router();
const imageUpload = require('../utils/imageUpload');

router.get('/technologies');
router.get('/technologies/:id');
router.get('/technologies/search/:searchPhrase');
router.post('/technologies', imageUpload.single('image'));
router.put('/technologies/:id', imageUpload.single('image'));
router.delete('/technologies/:id');

module.exports = router;
