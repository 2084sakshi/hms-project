const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    // Referencing fields from the User schema
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true, lowercase: true },
  password: { type: String, required: true },
  age: { type: Number, min: 0 },
  gender: { type: String, enum: ['male', 'female', 'other'] },

  // Other fields as needed
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
