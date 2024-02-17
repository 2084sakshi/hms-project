const express = require('express');
const doctorController = require('../controllers/doctorController');
const { authenticateUser } = require('../middleware/authMiddleware');

const router = express.Router();

// Define routes for doctor functionalities
router.put('/appointments/approve/:appointmentId', authenticateUser, doctorController.approveAppointment);
router.get('/appointments', authenticateUser, doctorController.viewAppointments);
router.put('/profile', authenticateUser, doctorController.changeProfile);
router.put('/settings/notification', authenticateUser, doctorController.notificationSettings);
router.put('/settings/password', authenticateUser, doctorController.changePassword);

module.exports = router;
