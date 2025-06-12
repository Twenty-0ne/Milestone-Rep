const express = require('express');
const router = express.Router();

// Test route - GET all users (placeholder)
router.get('/', (req, res) => {
  res.json({ message: 'GET all users - placeholder' });
});

// Create a user - POST /api/users
router.post('/', (req, res) => {
  res.json({ message: 'Create a new user - placeholder' });
});

module.exports = router;
