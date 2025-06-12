const express = require('express');
const router = express.Router();

const {
  getAllCats,
  getCatById,
  createCat,
  updateCat,
  deleteCat,
} = require('../controllers/CatController');

// GET /api/cats
router.get('/', getAllCats);

// GET /api/cats/:id
router.get('/:id', getCatById);

// POST /api/cats
router.post('/', createCat);

// PUT /api/cats/:id
router.put('/:id', updateCat);

// DELETE /api/cats/:id
router.delete('/:id', deleteCat);

module.exports = router;
