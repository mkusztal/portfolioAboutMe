const express = require("express");
const {
  getAllProjects,
  getProjectById,
  addProject,
  updateProject,
  removeProjectById,
} = require("../controllers/projects.controller");
const router = express.Router();

router.get("/projects", getAllProjects);
router.get("/projects/:id", getProjectById);
router.post("projects", addProject);
router.put("projects/:id", updateProject);
router.delete("projects/:id", removeProjectById);

module.exports = router;
