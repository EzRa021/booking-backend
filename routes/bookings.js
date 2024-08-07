const express = require('express');
const {
    createBooking,
    getBookings,
    updateBooking,
    deleteBooking,
    updateJobDone,
    
} = require('../controllers/bookingController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

// Create a new booking
router.post('/bookings', createBooking);

router.get('/bookings', protect, getBookings);

router.put('/bookings/:id', protect, updateBooking);

// Delete a booking by ID
router.delete('/bookings/:id', protect, deleteBooking);

// Get bookings created in the past week

// Update jobDone status of a booking by ID
router.patch('/bookings/:id/jobdone', protect, updateJobDone);

module.exports = router;
