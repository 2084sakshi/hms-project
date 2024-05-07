// PatientHeader.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './../css/patient.css';
function PatientHeader({ onLogout}) {
  const logoUrl = 'mini project\client\src\css\logo.png';

  
    const navigate = useNavigate();
  const handleLogout = () => {
  
    console.log('Logout logic goes here');
    if (onLogout) {
      onLogout();
    }

    // Navigate to the home page ("/")
    navigate("/");
  };

  return (
    
    <header>
 <nav  className='patient-navbar'>
      
      <img src={logoUrl} alt="Medconnect360" />
       
    
     
      <ul className='patient-header'>
      <li  className='nav-links'><Link to="/patient">Dashboard</Link></li>
      <li  className='nav-links'><Link to="/patient/appointment-booking">Book Appointment</Link></li>
       
      <li className='nav-links'><Link to="/patient/view-appointments">View Appointments</Link></li>
      
      <li className='nav-links'><Link to="/patient/medical-history">Medical History</Link></li>
      <li className='nav-links' ><Link to="/patient/profile">Profile</Link></li>
      <li className='nav-links' ><Link to="/patient/settings">Settings</Link></li>
    </ul>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </header>

  );
}

export default PatientHeader;
