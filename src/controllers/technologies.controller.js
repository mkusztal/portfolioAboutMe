const Technology = require('../models/technologies.model');
const getImageFileType = require('../utils/getImageFileType');
const sanitize = require('mongo-sanitize');
const fs = require('fs');

exports.getAllTechnologies = async (req, res) => {
  try {
    res.json(await Technology.find());
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getTechnologyById = async (req, res) => {
  try {
    const technology = await Technology.findById(req.params.id);
    if (!technology) {
      return res.status(404).json({ message: 'Not found...' });
    }
    res.json(technology);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getTechnologyBySearch = async (req, res) => {
  try {
    const technology = await Technology.find({
      $text: { $search: req.params.searchPhrase },
    });
    if (!technology) {
      return res.status(404).json({ message: 'Not found...' });
    }
    res.json(technology);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addTechnology = async (req, res) => {
  const { title, level } = sanitize(req.body);
  const fileType = req.file ? await getImageFileType(req.file) : 'unknown';
  const isFile =
    req.file &&
    ['image/png', 'image/jpg', 'image/jpeg', 'image/git'].includes(fileType);

  const isDataValid = title && level && isFile;

  try {
    if (isDataValid) {
      const newTechnology = new Technology({
        image: req.file.filename,
        title: title,
        level: level,
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

exports.updateTechnology = async (req, res) => {
  const { title, level } = req.body;
  try {
    const technology = await Technology.findById(req.params.id);
    if (!technology) {
      if (req.file) {
        fs.unlinkSync(`./public/uploads/${req.file.filename}`);
      }
      res.status(400).json({ message: 'Bad request' });
    }
    await Technology.updateOne(
      { _id: req.params.id },
      {
        $set: {
          image: req.file.filename,
          title: title,
          level: level,
        },
      }
    );
    res.json({ message: 'OK' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.removeTechnologyById = async (req, res) => {
  try {
    const technology = await Technology.findById(req.params.id);
    if (!technology) {
      return res.status(404).json({ message: 'Not found...' });
    }
    await Technology.deleteOne({ _id: req.params.id });
    res.json({ message: 'OK' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
