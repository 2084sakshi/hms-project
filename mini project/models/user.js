const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true }, // Primary Key
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true, lowercase: true, match: [/\S+@\S+\.\S+/, 'is invalid']  },
  password: { type: String, required: true },
  age: { type: Number, min: 0 }, // Assuming age should be a non-negative number
  mobileNo: { type: String, required: true, trim: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  isDoctor: { type: Boolean, default: false }, // Indicates whether the user is a doctor
  role: { type: String, enum: [ 'doctor', 'patient','user'], default: 'user'}
  // Other fields as needed,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
