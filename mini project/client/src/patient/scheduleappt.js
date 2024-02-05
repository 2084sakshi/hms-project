// src/patient/ScheduleAppointment.js

import React, { useState } from 'react';

const ScheduleAppointment = () => {
  // State to store form input values
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    doctor: '',
    // Add more fields as needed
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform logic to submit appointment data (e.g., send to API)
    console.log('Appointment scheduled:', formData);
    // Reset the form fields after submission
    setFormData({
      date: '',
      time: '',
      doctor: '',
    });
  };

  return (
    <div className="container">
      <h2>Schedule Appointment</h2>
      <p>Empower your health journey by scheduling a new appointment. Choose the perfect date, time, and healthcare professional below:</p>
      <br>  </br>
      <form onSubmit={handleFormSubmit}>
        <label>
          Date:
          <input type="date" name="date" value={formData.date} onChange={handleInputChange} required />
        </label>
<br>  </br>
        <label>
          Time:
          <input type="time" name="time" value={formData.time} onChange={handleInputChange} required />
        </label>
        <br>  </br>
        <label>
          Doctor:
          <input type="text" name="doctor" value={formData.doctor} onChange={handleInputChange} required />
        </label>
        <br>  </br>
        {/* Add more form fields as needed (e.g., reason for appointment) */}

        <button type="submit">Schedule Appointment</button>
      </form>
    </div>
  );
}

export default ScheduleAppointment;
