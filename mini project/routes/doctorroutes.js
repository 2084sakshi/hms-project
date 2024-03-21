const express = require('express');
const doctorController = require('../controller/doctorController');
const Doctor = require('../models/doctor');
//const { authenticateUser } = require('../middleware/authMiddleware');

const router = express.Router();

// Define routes for doctor functionalities
// router.put('/appointments/approve/:appointmentId', authenticateUser, doctorController.approveAppointment);
// router.get('/appointments', authenticateUser, doctorController.viewAppointments);
// router.put('/profile', authenticateUser, doctorController.changeProfile);
// router.put('/settings/notification', authenticateUser, doctorController.notificationSettings);
// router.put('/settings/password', authenticateUser, doctorController.changePassword);

// Create a new doctor
router.post('/', async (req, res) => {
    try {
        const { name, specialization, email, phoneNumber, address, location, fees, experience, userId } = req.body;

        // Check if required fields are present
        /*if (!name || !specialization || !email || !phoneNumber || !address || !location || !fees || !experience || !userId) {
            return res.status(400).json({ message: 'All fields are required' });
        }*/

        const doctor = new Doctor({
            name,
            specialization,
            email,
            phoneNumber,
            address,
            location,
            fees,
            experience,
            userId,
            approved: false
        });

        const newDoctor = await doctor.save();
        res.status(201).json(newDoctor);
    } catch (err) {
        // Handle specific validation errors
        if (err.name === 'ValidationError') {
            return res.status(400).json({ message: err.message });
        }

        // Handle other errors
        res.status(500).json({ message: err.message });
    }
});
router.get('/profile', doctorController.viewProfile);
router.put('/updateprofile', doctorController.changeProfile);  
router.put('/appointmentapprove/:appointmentId', doctorController.approveAppointment);
router.put('/appointmentcancel/:appointmentId', doctorController.rejectAppointment);
router.get('/upcomingappointments', doctorController.viewUpcomingAppointments);
router.get('/pastappointments', doctorController.viewPastAppointments);
router.put('/setnotification', doctorController.notificationSettings);
router.put('/changepassword:', doctorController.changePassword);



module.exports = router;
