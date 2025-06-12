const express = require('express');
const router = express.Router();

// Test route - GET all adoption requests (placeholder)
router.get('/', (req, res) => {
  res.json({ message: 'GET all adoption requests - placeholder' });
});

module.exports = router;
