import React, { useState } from 'react';
import PatientHeader from './patientheader';
import './../css/patient.css';

function AppointmentBooking() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [availableDates, setAvailableDates] = useState([
    '2023-03-01', '2023-03-02', '2023-03-03', // Add actual available dates
  ]);
  const [availableTimes, setAvailableTimes] = useState([
    '09:00 AM', '10:00 AM', '02:00 PM', '04:00 PM', // Add actual available times
  ]);
  const [doctors] = useState([
    'Dr. Smith', 'Dr. Johnson', 'Dr. Brown', // Add actual doctor names
  ]);

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
    console.log(`Appointment booked for ${selectedDate} at ${selectedTime} with ${selectedDoctor}`);
    // Additional logic for making an API call or other actions can be added here
  }

  return (
    <div>
      <PatientHeader />
      <div>
        <h2>Book an Appointment</h2>

        <div style={{ marginBottom: '20px' }}>
          <label>Select Doctor:</label>
          <select value={selectedDoctor} onChange={(e) => handleDoctorChange(e.target.value)}>
            <option value="" disabled>Select Doctor</option>
            {doctors.map((doctor) => (
              <option key={doctor} value={doctor}>{doctor}</option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>Select Date:</label>
          <select value={selectedDate} onChange={(e) => handleDateChange(e.target.value)}>
            <option value="" disabled>Select Date</option>
            {availableDates.map((date) => (
              <option key={date} value={date}>{date}</option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>Select Time:</label>
          <select value={selectedTime} onChange={(e) => handleTimeChange(e.target.value)}>
            <option value="" disabled>Select Time</option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>

        <div>
          <button onClick={handleBooking}>Book Appointment</button>
        </div>
      </div>
    </div>
  );
}

export default AppointmentBooking;
