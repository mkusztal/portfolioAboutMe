const mongoose = require("mongoose");

const projectsSchema = new mongoose.Schema({
  name: { type: String, require: true, minlength: 3, maxlength: 20 },
  shortDescription: {
    type: String,
    require: true,
    minlength: 3,
    maxlength: 100,
  },
  description: { type: String, require: true, minlength: 3, maxlength: 500 },
  technologies: { type: String, require: true },
  linkGitHub: { type: String, require: true },
  linkHeroku: { type: String },
});

projectsSchema.index({ name: "text" });
module.exports = mongoose.model("Projects", projectsSchema);
