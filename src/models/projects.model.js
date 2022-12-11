const mongoose = require("mongoose");

const projectsSchema = new mongoose.Schema({
  name: { type: String, require: true, minlength: 3, maxlength: 10 },
  shortDescription: {
    type: String,
    require: true,
    minlength: 3,
    maxlength: 20,
  },
});

projectsSchema.index({ name: "text" });
module.exports = mongoose.model("Projects", projectsSchema);
