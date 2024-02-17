const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  doctorId: { type: mongoose.Schema.Types.ObjectId, auto: true, alias: 'id' }, // Primary Key
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true }, // Foreign Key to User model
  approved: { type: Boolean, default: false },
  specialization: { type: String, required: true, trim: true },
  experience: { type: Number, required: true, min: 0 },
  fees: { type: Number, required: true, min: 0 },
  location: { type: String, required: true, trim: true },
  availability: { type: [String], default: [], validate: [validateAvailability, 'Invalid availability format'] },
  // Other fields as needed
});

// Custom validator for ensuring a valid availability format
function validateAvailability(value) {
  const validDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  for (const day of value) {
    if (!validDays.includes(day)) {
      return false;
    }
  }

  return true;
}

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
