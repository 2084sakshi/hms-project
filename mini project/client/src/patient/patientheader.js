// PatientHeader.js
import React from 'react';
import './../css/patient.css'
import { useAuth0 } from "@auth0/auth0-react";
import logo from './../img/logo.svg';
import { useNavigate } from 'react-router-dom';

function DoctorHeader({ onLogout}) {
  const navigate = useNavigate();
  const handleLogout = () => {
  
    console.log('Logout logic goes here');
    if (onLogout) {
      onLogout();
    }

    // Navigate to the home page ("/")
    navigate("/");
  };
}
function PatientHeader() {


  const handleLogout = () => {
    const { loginWithRedirect } = useAuth0();
  return <button onClick={() => loginWithRedirect()}>Log In</button>;
  };

  return (
    <header>
      <nav className='patient-navbar'>
      <div className="logo-container">
          <img src={logo} alt="MedConnect360 logo"/>
          <h1>Medconnect360</h1>
        </div>
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
