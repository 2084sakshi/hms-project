const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
require('dotenv').config();

const dbconfig = require('./config/dbconfig');

app.use(express.json());

  
// Routes
const adminRoutes = require('./routes/adminroutes'); 
const doctorRoutes = require('./routes/doctorroutes');
const patientRoutes = require('./routes/userroutes') 

app.use('/api/admin', adminRoutes);
app.use('/api/doctor', doctorRoutes);
app.use('/api/patient', patientRoutes);

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Server is running!');
  });

app.listen(port, () => console.log(`Server running on port ${port}`));
