const mongoose = require('mongoose');

const informationSchema = new mongoose.Schema({
  title: { type: String, require: true },
  text: { type: String, require: true },
  photo: { type: String, require: true },
});

informationSchema.index({ title: 'text' });
module.exports = mongoose.model('Information', informationSchema);
