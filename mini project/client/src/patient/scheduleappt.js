// AppointmentBooking.js
import React, { useState } from 'react';
import PatientHeader from './patientheader';
import './../css/patient.css';
function AppointmentBooking() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');

  function handleDateChange(date) {
    setSelectedDate(date);
  }

  function handleTimeChange(time) {
    setSelectedTime(time);
  }

  function handleDoctorChange(doctor) {
    setSelectedDoctor(doctor);
  }

  function handleBooking() {
    // Implement the logic for booking the appointment
    console.log(`Appointment booked for ${selectedDate} at ${selectedTime} with Dr. ${selectedDoctor}`);
    // Additional logic for making an API call or other actions can be added here
  }

  return (
    <div>
      <PatientHeader />
      <div>
        <h2>Book an Appointment</h2>

        <div style={{ marginBottom: '20px' }}>
          <label>Select Date:</label>
          <input type="date" value={selectedDate} onChange={(e) => handleDateChange(e.target.value)} />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>Select Time:</label>
          <input type="time" value={selectedTime} onChange={(e) => handleTimeChange(e.target.value)} />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>Select Doctor:</label>
          <input type="text" value={selectedDoctor} onChange={(e) => handleDoctorChange(e.target.value)} />
        </div>

        <div>
          <button onClick={handleBooking}>Book Appointment</button>
        </div>
      </div>
    </div>
  );
}

export default AppointmentBooking;
