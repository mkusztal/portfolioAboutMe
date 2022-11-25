const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  fileName: { type: String, require: true },
  document: { type: String, require: true },
});

documentSchema.index({ fileName: 'text' });
module.exports = mongoose.model('Document', documentSchema);
