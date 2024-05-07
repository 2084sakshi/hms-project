const Doctor = require('../models/doctor');

const getAllDoctors = async () => {
  // Implement logic to fetch all doctors from the database
  try {
    return await Doctor.find({ approved: true}).populate('userId', 'email mobileNo');
  } catch (error) {
    console.error('Error getting all doctors:', error.message);
    throw error;
  }
};

 
const approveDoctor = async (doctorId) => {
  try {
    const doctor = await Doctor.findById(doctorId);

    if (!doctor) {
      return { success: false, message: 'Doctor not found' };
    }

    // Update the approval status to "Approved"
    doctor.approved = true;
    await doctor.save();

    return { success: true, message: 'Doctor approved successfully' };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Internal Server Error' };
  }
};

const rejectDoctor = async (doctorId) => {
  try {
    const doctor = await Doctor.findById(doctorId);

    if (!doctor) {
      return { success: false, message: 'Doctor not found' };
    }

    // Update the approval status to "Rejected"
    doctor.approved = false;
    await doctor.save();

    return { success: true, message: 'Doctor rejected successfully' };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Internal Server Error' };
  }
};

module.exports = {
  getAllDoctors,
  approveDoctor,
  rejectDoctor,
};
