const Document = require('../models/documents.model');
const fs = require('fs');

exports.addDocument = async (req, res) => {
  const { fileName } = req.body;
  const isFile = req.file;

  try {
    if (isFile) {
      const newDocument = new Document({
        fileName: fileName,
        document: req.file.filename,
      });
      await newDocument.save();
      res.json(newDocument);
    } else {
      if (req.file) {
        fs.unlinkSync(`./public/uploads/${req.file.filename}`);
      }
      res.status(400).json({ message: 'Bad request' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
