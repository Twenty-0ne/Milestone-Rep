// models/Cat.js
const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  breed: String,
  personality: String,
  health_status: String,
  image_url: String,
  sticker_level: { type: String, enum: ['green', 'yellow', 'red'], default: 'green' },
  adopted: { type: Boolean, default: false },
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Cat', catSchema);
