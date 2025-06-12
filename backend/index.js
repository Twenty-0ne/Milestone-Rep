const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Route imports and usage
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

const catRoutes = require('./routes/cats');
app.use('/api/cats', catRoutes);

const adoptionRoutes = require('./routes/adoptions');
app.use('/api/adoptions', adoptionRoutes);

// Basic test route
app.get('/', (req, res) => {
  res.send('Welcome to Meowly API!');
});

// Connect to MongoDB and start the server
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });
