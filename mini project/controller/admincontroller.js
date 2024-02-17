const userService = require('../services/userservice');
const doctorService = require('../services/doctorservice');
const appointmentService = require('../services/appointmentservice');

const viewAllUsers = (req, res) => {
  const users = userService.getAllUsers();
  res.json(users);
};

const removeUser = (req, res) => {
  const userId = req.params.userId;
  userService.removeUser(userId);
  res.json({ message: 'User removed successfully' });
};

const viewAllDoctors = (req, res) => {
  const doctors = doctorService.getAllDoctors();
  res.json(doctors);
};

const viewAllAppointments = (req, res) => {
  const appointments = appointmentService.getAllAppointments();
  res.json(appointments);
};

const approveDoctor = (req, res) => {
  const doctorId = req.params.doctorId;
  doctorService.approveDoctor(doctorId);
  res.json({ message: 'Doctor approved successfully' });
};

module.exports = {
  viewAllUsers,
  removeUser,
  viewAllDoctors,
  viewAllAppointments,
  approveDoctor,
};
