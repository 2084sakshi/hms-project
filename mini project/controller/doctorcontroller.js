const doctorService = require('../services/doctorservice');
const appointmentService = require('../services/appointmentservice');

const approveAppointment = (req, res) => {
  const appointmentId = req.params.appointmentId;
  appointmentService.approveAppointment(appointmentId);
  res.json({ message: 'Appointment approved successfully' });
};

const viewAppointments = (req, res) => {
  const doctorId = req.user.id; // Assuming the user object contains the doctor's ID
  const appointments = appointmentService.getAppointmentsByDoctorId(doctorId);
  res.json(appointments);
};

const changeProfile = (req, res) => {
  // Implement logic to update doctor's profile
  res.json({ message: 'Profile updated successfully' });
};

const notificationSettings = (req, res) => {
  // Implement logic to update notification settings for the doctor
  res.json({ message: 'Notification settings updated successfully' });
};

const changePassword = (req, res) => {
  // Implement logic to change the doctor's password
  res.json({ message: 'Password changed successfully' });
};

module.exports = {
  approveAppointment,
  viewAppointments,
  changeProfile,
  notificationSettings,
  changePassword,
};
