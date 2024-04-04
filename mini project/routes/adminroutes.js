
const express = require('express');
const adminController = require('../controller/admincontroller');
const User = require('../models/user');
const Doctor = require('../models/doctor');
/*const { authenticateUser } = require('../middleware/authMiddleware');*/

const router = express.Router();

router.post('/adduser', adminController.addUser);
router.get('/users',adminController.viewAllUsers);
router.delete('/users/:userId', adminController.removeUser);
router.get('/doctors', adminController.viewAllDoctors);

router.put('/doctors/approve/:doctorId', adminController.approveDoctor);
router.put('/doctors/reject/:doctorId', adminController.rejectDoctor);

router.get('/users/:userId', async (req, res) => {
    try {
      const userId = req.params.userId;
      // Find the user by ID in the database
      const user = await User.findById(userId);
      if (!user) {
        // If user not found, return 404 Not Found
        return res.status(404).json({ message: 'User not found' });
      }
      // Return the user details in the response
      res.json(user);
    } catch (error) {
      // If an error occurs, return 500 Internal Server Error
      console.error('Error fetching user:', error.message);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

  
router.get('/doctor-applications', async (req, res) => {
  try {
      // Query the Doctor model to find applications where isApproved is false
      const doctorApplications = await Doctor.find({ approved: false }).populate('userId', 'email mobileNo');;
      console.log(doctorApplications);
      res.json(doctorApplications);
  } catch (error) {
      console.error('Error fetching doctor applications:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;
