const Doctor = require('../models/doctor');

const getAllDoctors = () => {
  // Implement logic to fetch all doctors from the database
  return Doctor.find();
};

const approveDoctor = (doctorId) => {
  // Implement logic to update the approval status of a doctor in the database
  return Doctor.findByIdAndUpdate(doctorId, { approved: true });
};

module.exports = {
  getAllDoctors,
  approveDoctor,
};
