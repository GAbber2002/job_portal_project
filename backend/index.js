require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());


const jobRoutes = require('./routes/jobRoutes');
app.use('/jobs', jobRoutes);


const authRoutes = require('./routes/authRoutes');
app.use('/api', authRoutes);

const applicationRoutes = require('./routes/applicationRoutes');
app.use('/applications', applicationRoutes);

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Job Portal Backend is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
