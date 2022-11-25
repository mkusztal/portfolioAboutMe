const express = require('express');
const { addDocument } = require('../controllers/documents.controller');
const router = express.Router();
const uploadFile = require('../middleware/uploadFile');

router.post('/documents', uploadFile.single('document'), addDocument);

module.exports = router;
