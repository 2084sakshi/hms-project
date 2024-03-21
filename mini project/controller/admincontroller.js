const UserService = require('../services/userservice');
const doctorService = require('../services/doctorservice');
const appointmentService = require('../services/appointmentservice');

const handleSuccess = (res, message) => {
  res.json({ message });
};

const handleBadRequest = (res, message) => {
  res.status(400).json({ message });
};

const handleServerError = (res, error) => {
  console.error(error);
  res.status(500).json({ message: 'Internal Server Error' });
};
const addUser = async (req, res) => {
  try {
    //const { name, email, password, role, age, mobileNo, gender,username } = req.body;
      const userData = req.body;
      const newUser = await UserService.addUser(userData);
      res.json(newUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
const viewAllUsers =  async (req, res) => {
  try {
    const allUsers = await UserService.getAllUsers();
    res.json(allUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const removeUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    await UserService.removeUser(userId);
    res.json({ message: 'User removed successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const viewAllDoctors = async (req, res) => {
  try {
    const doctors = await doctorService.getAllDoctors();
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const viewAllAppointments = async (req, res) => {
  try {
    const appointments = await appointmentService.getAllAppointments();
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const handleDoctorOperation = async (req, res, operation, message) => {
  const doctorId = req.params.doctorId;
  try {
    const result = await doctorService[operation](doctorId);
    result.success ? handleSuccess(res, result.message) : handleBadRequest(res, result.message);
  } catch (error) {
    handleServerError(res, error);
  }
};

const approveDoctor = (req, res) => {
  handleDoctorOperation(req, res, 'approveDoctor', 'Doctor approved successfully');
};

const rejectDoctor = (req, res) => {
  handleDoctorOperation(req, res, 'rejectDoctor', 'Doctor rejected successfully');
};

module.exports = {
  addUser,
  rejectDoctor,
  viewAllUsers,
  removeUser,
  viewAllDoctors,
  viewAllAppointments,
  approveDoctor,

};
