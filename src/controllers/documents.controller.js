const Document = require("../models/documents.model");
const fs = require("fs");

// // download file
// exports.getFile = async (req, res) => {
//   try {
//     const file = await Document.findById(req.params.id);

//     if (!file) {
//       return res.status(404).json({ message: 'Not found...' });
//     }

//     res.download();
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// gett all documents
exports.getAllDocuments = async (req, res) => {
  try {
    res.json(await Document.find());
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// upload file
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
      res.status(400).json({ message: "Bad request" });
    }
  } catch (err) {
    console.log("error: ", err);
    res.status(500).json({ message: err.message });
  }
};
