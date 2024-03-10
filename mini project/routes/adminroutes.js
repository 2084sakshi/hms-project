
const express = require('express');
const adminController = require('../controller/admincontroller');
/*const { authenticateUser } = require('../middleware/authMiddleware');*/

const router = express.Router();

router.post('/adduser', adminController.addUser);
router.get('/users',adminController.viewAllUsers);
router.delete('/users/:userId', adminController.removeUser);
router.get('/doctors', adminController.viewAllDoctors);
router.get('/appointments',  adminController.viewAllAppointments);
router.put('/doctors/approve/:doctorId', adminController.approveDoctor);
router.put('/doctors/reject/:doctorId', adminController.rejectDoctor);
module.exports = router;
