const express = require("express");
const {
  addDocument,
  getAllDocuments,
} = require("../controllers/documents.controller");
const router = express.Router();
const uploadFile = require("../middleware/uploadFile");

router.get("/documents", getAllDocuments);
router.post("/documents", uploadFile.single("document"), addDocument);

module.exports = router;
