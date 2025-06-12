const Cat = require('../models/Cat');

// Get all cats
const getAllCats = async (req, res) => {
  try {
    const cats = await Cat.find();
    res.status(200).json(cats);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get cats' });
  }
};

// Get cat by ID
const getCatById = async (req, res) => {
  try {
    const cat = await Cat.findById(req.params.id);
    if (!cat) return res.status(404).json({ error: 'Cat not found' });
    res.status(200).json(cat);
  } catch (error) {
    res.status(500).json({ error: 'Error getting cat' });
  }
};

// Create new cat
const createCat = async (req, res) => {
  try {
    const newCat = new Cat(req.body);
    await newCat.save();
    res.status(201).json(newCat);
  } catch (error) {
    res.status(400).json({ error: 'Error creating cat' });
  }
};

// Update cat
const updateCat = async (req, res) => {
  try {
    const updated = await Cat.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ error: 'Cat not found' });
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ error: 'Error updating cat' });
  }
};

// Delete cat
const deleteCat = async (req, res) => {
  try {
    const deleted = await Cat.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Cat not found' });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: 'Error deleting cat' });
  }
};

module.exports = {
  getAllCats,
  getCatById,
  createCat,
  updateCat,
  deleteCat,
};
