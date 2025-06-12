const express = require('express');
const router = express.Router();

console.log('Path resolved:', require.resolve('../controllers/CatController'));

// Import functions from the Cat controller
const {
  getAllCats,
  getCatById,
  createCat,
  updateCat,
  deleteCat,
} = require('../controllers/CatController'); // Case-sensitive path; filename must match exactly

// Route to retrieve all cats
router.get('/', getAllCats);

// Route to retrieve a single cat by its ID
router.get('/:id', getCatById);

// Route to create a new cat entry
router.post('/', createCat);

// Route to update an existing cat by its ID
router.put('/:id', updateCat);

// Route to delete a cat by its ID
router.delete('/:id', deleteCat);

module.exports = router;
