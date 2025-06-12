const express = require('express');
const router = express.Router();

// Test route - GET all cats
router.get('/', (req, res) => {
  res.json({ message: 'GET all cats - placeholder' });
});

module.exports = router;