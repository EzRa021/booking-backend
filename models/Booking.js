const mongoose = require('mongoose');

const CustomizationSchema = new mongoose.Schema({
  description: { type: String, required: false },
  value: { type: Number, required: false },
  quantity: { type: Number, required: false }
});

const SelectionSchema = new mongoose.Schema({
  type: { type: String, required: false },
  value: { type: String, required: false },
  price: { type: String, required: false }
});

const bookingSchema = new mongoose.Schema({
  package: { type: String, required: false },
  date: { type: String, required: false },
  time: { type: String, required: false },
  frequency: { type: String, required: false },
  customizations: [CustomizationSchema],
  total: { type: Number, required: false },
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  email: { type: String, required: false },
  phone: { type: String, required: false },
  address: { type: String, required: false },
  province: { type: String, required: false },
  postalCode: { type: String, required: false },
  instructions: { type: String, required: false },
  accessInfo: { type: String, required: false },
  parkingInstructions: { type: String, required: false },
  garbagePlacement: { type: String, required: false },
  selections: [SelectionSchema],
  paypalOrderID: { type: String },
  apt: { type: String },
  city: { type: String },
  paypalCaptureID: { type: String },
  paymentStatus: { type: String, required: false, enum: ['complete', 'cancelled', 'error', 'pending'] },
  errorMessage: { type: String },
  jobDone: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.models.Booking || mongoose.model('Booking', bookingSchema);
