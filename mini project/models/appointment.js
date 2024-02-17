const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  apptid: { type: mongoose.Schema.Types.ObjectId, auto: true, alias: 'id' }, // Primary Key
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true, index: true }, // Foreign Key
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true, index: true }, // Foreign Key
  date: { type: Date, required: true, validate: [validateFutureDate, 'Date must be in the future'] },
  time: { type: String, required: true, validate: [validateTime, 'Invalid time format'] },
  bookingDate: { type: Date, default: Date.now },
  status: { type: String, enum: ['pending', 'approved', 'cancelled'], default: 'pending' },
  // Other fields as needed
});

// Custom validator for ensuring the date is in the future
function validateFutureDate(value) {
  return value > new Date();
}

// Custom validator for ensuring the time follows a specific format (HH:mm)
function validateTime(value) {
  const timeRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
  return timeRegex.test(value);
}

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
