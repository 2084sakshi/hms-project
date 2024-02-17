const Appointment = require('../models/appointment');

const getAllAppointments = () => {
  // Implement logic to fetch all appointments from the database
  return Appointment.find();
};

const approveAppointment = (appointmentId) => {
  // Implement logic to update the approval status of an appointment in the database
  return Appointment.findByIdAndUpdate(appointmentId, { approved: true });
};

const getAppointmentsByDoctorId = (doctorId) => {
  // Implement logic to fetch appointments for a specific doctor from the database
  return Appointment.find({ doctor: doctorId });
};

const getAppointmentsByPatientId = (patientId) => {
  // Implement logic to fetch appointments for a specific patient from the database
  return Appointment.find({ patient: patientId });
};

module.exports = {
  getAllAppointments,
  approveAppointment,
  getAppointmentsByDoctorId,
  getAppointmentsByPatientId,
};
