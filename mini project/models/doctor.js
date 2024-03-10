const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId, auto: true }, // Primary Key
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true }, // Foreign Key to User model
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true , match: [/\S+@\S+\.\S+/, 'is invalid'] },
  phoneNumber: { type: String, required: true, unique: true, trim: true },
  address: { type: String, required: true, trim: true },
  approved: { type: Boolean, default: false },
  qualification: { type: String, required: true, trim: true },
  specialization: { type: String, required: true, trim: true },
  experience: { type: Number, required: true, min: 0 },
  fees: { type: Number, required: true, min: 0 },
  location: { type: String, required: true, trim: true },
  availability: { type: [String], default: [], required: true },

  // Other fields as needed
});



const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
