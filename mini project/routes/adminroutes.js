
const express = require('express');
const adminController = require('../controllers/admincontroller');
/*const { authenticateUser } = require('../middleware/authMiddleware');*/

const router = express.Router();

router.get('/users',adminController.viewAllUsers);
router.delete('/users/:userId', adminController.removeUser);
router.get('/doctors', adminController.viewAllDoctors);
router.get('/appointments',  adminController.viewAllAppointments);
router.put('/doctors/approve/:doctorId', adminController.approveDoctor);

module.exports = router;
