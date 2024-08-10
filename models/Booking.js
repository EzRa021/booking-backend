const mongoose = require('mongoose');


const bookingSchema = new mongoose.Schema({
    package: {
        type: String,
        required: false
    },
    date: {
        type: String,
        required: false
    },
    time: {
        type: String,
        required: false
    },
    frequency: {
        type: String,
        required: false
    },
    customizations: [{
        description: String,
        value: Number,
        quantity: Number
    }],
    city: {
        type: String,
        required: false
    },
    apt: {
        type: String,
        required: false
    },
    total: {
        type: Number,
        required: false
    },
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    province: {
        type: String,
        required: false
    },
    postalCode: {
        type: String,
        required: false
    },
    instructions: {
        type: String,
        required: false
    },
    accessInfo: {
        type: String,
        required: false
    },
    parkingInstructions: {
        type: String,
        required: false
    },
    flexibility: {
        type: String,
        required: false
    },
    selections: [{
        type: String,
        value: String,
        price: Number
    }],
    paypalOrderID: {
        type: String,
        required: false
    },
    paypalCaptureID: {
        type: String,
        required: false
    },
    paymentStatus: {
        type: String,
        enum: ['pending', 'complete', 'cancelled', 'error'],
        default: 'pending',
        required: false
    },
    errorMessage: {
        type: String,
        required: false
    },
    jobDone: {
        type: Boolean,
        default: false,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: false
    }
});

module.exports = mongoose.models.Booking || mongoose.model('Booking', bookingSchema);
