const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true }, // Primary Key
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true, lowercase: true },
  password: { type: String, required: true },
  age: { type: Number, min: 0 }, // Assuming age should be a non-negative number
  mobileNo: { type: String, required: true, trim: true },
  gender: { type: String, enum: ['male', 'female', 'other'], required: true },
  isDoctor: { type: Boolean, default: false }, // Indicates whether the user is a doctor
  username: { type: String, required: true, unique: true },
  role: { type: String, enum: ['admin', 'doctor', 'patient'], required: true },
  // Other fields as needed
});

const User = mongoose.model('User', userSchema);

module.exports = User;
