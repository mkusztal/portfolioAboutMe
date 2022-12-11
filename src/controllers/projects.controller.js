const Project = require("../models/projects.model");

exports.getAllProjects = async (req, res) => {
  try {
    res.json(await Project.find());
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getProjectById = async (res, req) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Not found..." });
    }
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addProject = async (res, req) => {
  const { name, shortDescription } = req.body;
  const isDataValid = name && shortDescription;
  try {
    if (isDataValid) {
      const newProject = new Project({
        name: name,
        shortDescription: shortDescription,
      });
      await newProject.save();
      res.json(newProject);
    } else {
      res.status(400).json({ message: "Bad request" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateProject = async (res, req) => {
  const { name, shortDescription } = req.body;

  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      res.status(400).json({ message: "Bad request" });
    }
    await Project.updateOne(
      { _id: req.params.id },
      { $set: { name: name, shortDescription: shortDescription } }
    );
    res.json({ message: "OK" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.removeProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Not found..." });
    }
    await Project.deleteOne({ _id: req.params.id });
    res.json({ message: "OK" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
