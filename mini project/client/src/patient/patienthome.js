// src/patient/PatientHome.js

import React from 'react';


const PatientHome = () => {

/*
  const handleLogout = () => {
    // Perform any logout logic here
    // For now, let's just redirect to pages/home.js
    history.push('/pages/home.js');
  };*/

  return (
    <div className="container">
      <nav>
        <ul>
          <li><a href="/view-appointments">View Appointments</a></li>
          <li><a href="/medical-history">Medical History</a></li>
          <li><a href="/scheduleappt">Schedule Appointment</a></li>
          <li><a href="/settings">Settings</a></li>
          <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
      </nav>

      <h2>Welcome to Your Patient Home</h2>
      <p>
        Your health is our priority! This is your personalized patient home page, where you have access
        to a range of features designed to make your healthcare journey seamless and comfortable.
      </p>
    </div>
  );
}

export default PatientHome;
