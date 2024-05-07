const Patient = require('../models/patient');

const getMedicalHistory = (patientId) => {
  // Implement logic to fetch the medical history for a specific patient from the database
  return Patient.findById(patientId).select('medicalHistory');
};

module.exports = {
  getMedicalHistory,
};
