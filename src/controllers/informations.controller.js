const Information = require('../models/informations.model');
const getImageFileType = require('../utils/getImageFileType');
const fs = require('fs');

exports.getAllInformations = async (req, res) => {
  try {
    res.json(await Information.find());
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addInformation = async (req, res) => {
  const { title, text } = req.body;
  const fileType = req.file ? await getImageFileType(req.file) : 'unknown';
  const isFile =
    req.file &&
    ['image/png', 'image/jpg', 'image/jpeg', 'image/git'].includes(fileType);

  const isDataValid = title && text && isFile;

  try {
    if (isDataValid) {
      const newTechnology = new Information({
        title: title,
        text: text,
        photo: req.file.filename,
      });
      await newTechnology.save();
      res.json(newTechnology);
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

exports.updateInformation = async (req, res) => {
  const { title, text } = req.body;
  try {
    const information = await Information.findById(req.params.id);
    if (!information) {
      if (req.file) {
        fs.unlinkSync(`./public/uploads/${req.file.filename}`);
      }
      res.status(400).json({ message: 'Bad request' });
    }
    await Information.updateOne(
      { _id: req.params.id },
      {
        $set: {
          title: title,
          text: text,
          photo: req.file.filename,
        },
      }
    );
    res.json({ message: 'OK' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
