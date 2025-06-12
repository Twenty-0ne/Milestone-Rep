const Adoption = require('../models/Adoption');

exports.createAdoption = async (req, res) => {
  try {
    const { catId, adopterName, message } = req.body;

    const newAdoption = new Adoption({
      catId,
      adopterName,
      message,
    });

    await newAdoption.save();
    res.status(201).json(newAdoption);
  } catch (error) {
    res.status(500).json({ message: 'Error creating adoption request' });
  }
};

exports.getAllAdoptions = async (req, res) => {
  try {
    const adoptions = await Adoption.find().populate('catId');
    res.json(adoptions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching adoptions' });
  }
};
