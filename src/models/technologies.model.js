const mongoose = require('mongoose');

const technologiesSchema = new mongoose.Schema({
  image: { type: String, require: true },
  title: { type: String, require: true, minlength: 3, maxlength: 10 },
  level: { type: Number, require: true },
});

technologiesSchema.index({ title: 'text' });
module.exports = mongoose.model('Technology', technologiesSchema);
