const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');

// Routes Import
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes'); 

const app = express();

// Database se connect karein
connectDB();

// Middlewares
app.use(cors());
app.use(express.json()); 

// API Routes Registry
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes); 

// Basic Testing Route
app.get('/', (req, res) => {
    res.send('Backend Server is running perfectly!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});