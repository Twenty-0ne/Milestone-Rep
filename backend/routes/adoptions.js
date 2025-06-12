const express = require('express');
const router = express.Router();
const adoptionController = require('../controllers/adoptionController');

// Create new adoption request
router.post('/', adoptionController.createAdoption);

// Get all adoption requests
router.get('/', adoptionController.getAllAdoptions);

module.exports = router;
