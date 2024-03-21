const patientService = require('../services/patientservice');
const appointmentService = require('../services/appointmentservice');

const viewAppointments = (req, res) => {
  const patientId = req.user.id; // Assuming the user object contains the patient's ID
  const appointments = appointmentService.getAppointmentsByPatientId(patientId);
  res.json(appointments);
};

const bookAppointment = async (req, res) => {
  // Implement logic to allow patients to book a new appointment
  try {
    const { patient, doctor, date ,time} = req.body;
    if (!patient || !doctor || !date || !time) {
      return res.status(400).json({ error: 'Incomplete data provided' });
    }
    const appointment = await appointmentService.bookAppointment(patient, doctor, date,time);
    res.json({ message: 'Appointment booked successfully', appointment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const viewMedicalHistory = (req, res) => {
  const patientId = req.user.id; // Assuming the user object contains the patient's ID
  const medicalHistory = patientService.getMedicalHistory(patientId);
  res.json(medicalHistory);
};

const viewProfile = (req, res) => {
  const patientId = req.user.id; // Assuming the user object contains the patient's ID
  const patient = patientService.getPatientById(patientId);
  res.json(patient);
};
const changeProfile = (req, res) => {
  // Implement logic to update patient's profile
  res.json({ message: 'Profile updated successfully' });
};

const notificationSettings = (req, res) => {
  // Implement logic to update notification settings for the patient
  res.json({ message: 'Notification settings updated successfully' });
};

// Import necessary modules

const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const patient = await Patient.findById(req.params.patientId);
    // Verify current password
    if (!patient || !await patient.comparePassword(currentPassword)) {
      return res.status(401).json({ error: 'Incorrect current password' });
    }
    // Update password
    patient.password = newPassword;
    await patient.save();
    res.json({ message: 'Password changed successfully' });
  } catch (error) {
    console.error('Error changing password:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};



module.exports = {
  changePassword,
  viewProfile,
  viewAppointments,
  bookAppointment,
  viewMedicalHistory,
  changeProfile,
  notificationSettings,
  changePassword,
};
