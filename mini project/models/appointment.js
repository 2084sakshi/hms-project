const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
 //apptid: { type: mongoose.Schema.Types.ObjectId, auto: true }, // Primary Key
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true }, // Foreign Key
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true, index: true }, // Foreign Key
  date: { type: Date, required: true, validate: [validateFutureDate, 'Date must be in the future'] },
  time: { type: String, required :true },
  bookingDate: { type: Date, default: Date.now },
  status: { type: String, enum: ['pending', 'approved', 'cancelled'], default: 'pending' },
  // Other fields as needed
});

// Custom validator for ensuring the date is in the future
function validateFutureDate(value) {
  return value > new Date();
}


const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
0