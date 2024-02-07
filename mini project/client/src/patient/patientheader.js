// PatientHeader.js
import React from 'react';
import { Link } from 'react-router-dom';

function PatientHeader() {
  const logoUrl = process.env.PUBLIC_URL + '/path/to/your/logo.png';

  const handleLogout = () => {
    console.log('Logout logic goes here');
  };

  return (
    <header>
      <div>
        <img src={logoUrl} alt="Medconnect360" />
        <h3>Hi, User</h3>
      </div>
      <nav>
      <ul>
      <li><Link to="/patient">Dashboard</Link></li>
      <li><Link to="/patient/appointment-booking">Book Appointment</Link></li>
      <li><Link to="/patient/profile">Profile</Link></li>
      <li><Link to="/patient/view-appointments">View Appointments</Link></li>
      <li><Link to="/patient/medical-history">Medical History</Link></li>
      <li><Link to="/patient/settings">Settings</Link></li>
    </ul>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </header>
  );
}

export default PatientHeader;
