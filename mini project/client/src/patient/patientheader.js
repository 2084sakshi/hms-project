// PatientHeader.js
import React from 'react';

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
          <li><a href="/patient">Dashboard</a></li>
          <li><a href="/patient/appointment-booking">Book Appointment</a></li>
          <li><a href="/patient/profile">Profile</a></li>
          <li><a href="/patient/view-appointments">View Appointments</a></li>
          <li><a href="/patient/medical-history">Medical History</a></li>
          <li><a href="/patient/settings">Settings</a></li>
        </ul>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </header>
  );
}

export default PatientHeader;
