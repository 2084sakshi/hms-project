const doctorService = require('../services/doctorservice');
const appointmentService = require('../services/appointmentservice');


const approveAppointment = async (req, res) => {
  try {
    const { appointmentId } = req.params;
    const updatedAppointment = await appointmentService.approveAppointment(appointmentId);
    res.json({ message: 'Appointment approved successfully', appointment: updatedAppointment });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.error('Error approving appointment:', error);
  }
};

const rejectAppointment = async (req, res) => {
  try {
    const { appointmentId } = req.body;
 
    const updatedAppointment = await appointmentService.rejectAppointment(appointmentId);
    res.json({ message: 'Appointment rejected successfully', appointment: updatedAppointment });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.error('Error rejecting appointment:', error);
  }
};

const viewAppointments = async (req, res) => {
  try {
    const doctorId = req.params.id;
    const appointments = await appointmentService.getAppointmentsByDoctorId(doctorId);
    res.json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({ error: 'Failed to fetch appointments' });
  }
};


const viewUpcomingAppointments = (req, res) => {
  const doctorId = req.user.id; // Assuming the user object contains the doctor's ID
  const appointments = appointmentService.getUpcomingAppointmentsByDoctorId(doctorId);
  res.json(appointments);
};

const viewPastAppointments = (req, res) => {
  const doctorId = req.user.id; // Assuming the user object contains the doctor's ID
  const appointments = appointmentService.getPastAppointmentsByDoctorId(doctorId);
  res.json(appointments);
};

const viewProfile = (req, res) => {
  const doctorId = req.user.id; // Assuming the user object contains the doctor's ID
  const doctor = doctorService.getDoctorById(doctorId);
  res.json(doctor);
};
const changeProfile = (req, res) => {
  // Implement logic to update doctor's profile
  res.json({ message: 'Profile updated successfully' });
};

const notificationSettings = (req, res) => {
  // Implement logic to update notification settings for the doctor
  res.json({ message: 'Notification settings updated successfully' });
};

// Import necessary modules

const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const doctor = await Doctor.findById(req.params.doctorId);
    // Verify current password
    if (!doctor || !await doctor.comparePassword(currentPassword)) {
      return res.status(401).json({ error: 'Incorrect current password' });
    }
    // Update password
    doctor.password = newPassword;
    await doctor.save();
    res.json({ message: 'Password changed successfully' });
  } catch (error) {
    console.error('Error changing password:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  changePassword,
  approveAppointment,
  rejectAppointment,
  viewAppointments,
  changeProfile,
  notificationSettings,
  changePassword,
  viewUpcomingAppointments,
  viewPastAppointments,
  viewProfile
};
