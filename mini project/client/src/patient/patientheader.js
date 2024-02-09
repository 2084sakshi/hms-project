// PatientHeader.js
import React from 'react';
import './../css/patient.css'
import { useAuth0 } from "@auth0/auth0-react";
  

function PatientHeader() {
  const logoUrl = 'mini project\client\src\css\logo.png';

  const handleLogout = () => {
    const { loginWithRedirect } = useAuth0();
  return <button onClick={() => loginWithRedirect()}>Log In</button>;
  };

  return (
    <header>
      <nav className='patient-navbar'>
      <img src={logoUrl} alt="Medconnect360" />
        <ul className='patient-header'>
          <li className='nav-links'><a href="/patient">Dashboard</a></li>
          <li className='nav-links'><a href="/patient/appointment-booking">Book Appointment</a></li>
          <li className='nav-links'><a href="/patient/profile">Profile</a></li>
          <li className='nav-links'><a href="/patient/view-appointments">View Appointments</a></li>
          <li className='nav-links'><a href="/patient/medical-history">Medical History</a></li>
          <li className='nav-links'><a href="/patient/settings">Settings</a></li>
        </ul>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <div>
        <h3>Hi, User</h3>
      </div>
    </header>
  );
}

export default PatientHeader;
