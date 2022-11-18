require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

const PORT = process.env.PORT || 4000;


connectDB();

const app = express();

app.use('/api/products', productRoutes);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));