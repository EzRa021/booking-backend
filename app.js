const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const bookingRoutes = require('./routes/bookings');
const User = require('./models/User');
const revenueRoutes = require('./routes/revenue.route');

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: true,
    credentials: true
}));
app.use(cookieParser());

// Routes
app.use('/api', authRoutes);
app.use('/api', bookingRoutes);
app.use('/api', revenueRoutes);

// Database connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');  // seedAdminUser();
    })
    .catch(err => console.log(err));

// Function to seed admin user


module.exports = app;
