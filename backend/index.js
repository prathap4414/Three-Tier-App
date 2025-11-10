const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://10.10.2.145:27017/mydb';

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/users', userRoutes);

// ✅ Health check route (important for ALB)
app.get('/', (req, res) => {
  res.send('Backend is healthy!');
});

app.listen(PORT, '0.0.0.0', () => console.log(`Backend running on port ${PORT}`));
