// PatientAppointments.js

import React, { useEffect, useState } from 'react';
// Define your React component
function PatientAppointments() {
    const appointments = [
      { id: 1, date: "2024-02-10", time: "10:00 AM", doctor: "Dr. Smith" },
      { id: 2, date: "2024-02-15", time: "02:30 PM", doctor: "Dr. Johnson" },
      // Add more appointments as needed
    ];
  
    return (
      <div className="container">
        <h2>Your Appointments</h2>
        <div id="appointments-list">
          {appointments.map(appointment => (
            <div key={appointment.id} className="appointment">
              <strong>Appointment ID:</strong> {appointment.id}<br />
              <strong>Date:</strong> {appointment.date}<br />
              <strong>Time:</strong> {appointment.time}<br />
              <strong>Doctor:</strong> {appointment.doctor}<br />
            </div>
          ))}
        </div>
      </div>
    );
  }
  
 
  
export default PatientAppointments;
