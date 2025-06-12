const mongoose = require('mongoose');

const adoptionRequestSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  cat_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Cat' },
  status: String,
  message: String,
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('AdoptionRequest', adoptionRequestSchema);
