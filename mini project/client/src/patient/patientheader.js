// PatientHeader.js
import React from 'react';
import { Link } from 'react-router-dom';
import './../css/patient.css';
function PatientHeader() {
  const logoUrl = 'mini project\client\src\css\logo.png';

  const handleLogout = () => {
    const { loginWithRedirect } = useAuth0();
  return <button onClick={() => loginWithRedirect()}>Log In</button>;
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
      <div>
      <h5>Hi, User</h5>
      </div>
    </header>
  );
}

export default PatientHeader;
