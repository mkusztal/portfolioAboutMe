const mongoose = require('mongoose');

const technologiesSchema = new mongoose.Schema({
  image: { type: String, require: true },
  name: { type: String, require: true },
  level: { type: Number, require: true },
});

technologiesSchema.index({ title: 'text' });
module.exports = mongoose.model('Technology', technologiesSchema);
