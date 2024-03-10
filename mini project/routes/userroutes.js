const express = require('express');
const patientController = require('../controller/patientcontroller');
//const { authenticateUser } = require('../middleware/authMiddleware');

const router = express.Router();

// Define routes for patient functionalities
// router.get('/appointments', authenticateUser, patientController.viewAppointments);
// router.post('/appointments/book', authenticateUser, patientController.bookAppointment);
// router.get('/medical-history', authenticateUser, patientController.viewMedicalHistory);
// router.put('/profile', authenticateUser, patientController.changeProfile);
// router.put('/settings/notification', authenticateUser, patientController.notificationSettings);
// router.put('/settings/password', authenticateUser, patientController.changePassword);

router.get('/appointments', patientController.viewAppointments);
 router.post('/book-appointment', patientController.bookAppointment);
 router.get('/medical-history', patientController.viewMedicalHistory);
 router.get('/profile', patientController.viewProfile);
 router.put('/updateprofile', patientController.changeProfile);
 router.put('/settings/notification', patientController.notificationSettings);
router.put('/settings/password', patientController.changePassword);

module.exports = router;

/*const express = require('express');
const router = express.Router();
const user = require('../models/usermodel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register', async(req, res) => {
    try {
        // Validate user input
        const userexists = await user.findOne({ email: req.body.email });
        if (userexists) {
            return res.status(200).send({ message: 'User already exists',success: false });
        }
        
        // Check if user exists
        // Encrypt password
        // Save user
        // Return jsonwebtoken
        const  password  = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);
        req.body.password = passwordHash;
        const newUser = new user(req.body);
        await newUser.save();
        res.status(200).send({ message: 'User created',success: true });
    } 
    catch (error) {
        console.error(error.message);
        res.status(500).send({message:'Server error',success: false,error:error.message});
    }
   
});

router.post('/login', async(req, res) => {
    try {
        // Check if user exists
        // Return jsonwebtoken
        const user = await user.findOne({email:req.body.email});
        if(!user){
            return res.status(200).send({message:'User not found',success: false});
        }

        const validPassword = await bcrypt.compare(req.body.password,user.password);
        if(!validPassword){
            return res.status(200).send({message:'Incorrect password',success: false});
        }
        else{
        const token = jwt.sign({_id:user._id},process.env.TOKEN_SECRET,{expiresIn:'1d'})
        res.status(200).send({message:'Login successful',success: true,data:token});
    }
    } 
    catch (error) {
        console.error(error.message);
        res.status(500).send({message:'Server error',success: false,error:error.message});
    }
    res.send('Login');
}); 
module.exports = router;
*/