const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
  personality: String,
  health_status: String,
  image_url: String,
  adopted: Boolean,
  sticker_level: String,
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Cat', catSchema);
