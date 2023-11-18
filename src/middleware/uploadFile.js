const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    // const [name, ext] = file.originalname.split(".");
    cb(null, file.originalname);
  },
  limits: { fileSize: 1000000 },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype.includes("pdf") ||
    file.mimetype.includes("doc") ||
    file.mimetype.includes("docx")
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const uploadFile = multer({ storage: storage, fileFilter: fileFilter });

module.exports = uploadFile;
