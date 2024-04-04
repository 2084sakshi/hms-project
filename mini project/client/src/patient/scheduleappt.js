import React, { useState } from 'react';
import PatientHeader from './patientheader';
import './../css/patient.css';
import axios from 'axios'; // Import Axios

function AppointmentBooking() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  
  const doctors = [
    { _id: '65f9b1417329da8cbe928493', name: 'Dr.Alice Johnson' },
    { _id: '65f9b1e77329da8cbe928499', name: 'Dr. Olivia Wilson' },
    { _id: '65fb1ad51c177f3f9b3d7934', name: 'Dr. Ananya Dubey' },
  ];

  function handleDateChange(date) {
    setSelectedDate(date);
  }

  function handleTimeChange(time) {
    setSelectedTime(time);
  }

  function handleDoctorChange(doctor) {
    setSelectedDoctor(doctor);
  }

  async function handleBooking() {
    try {
      const response = await axios.post('http://localhost:5000/api/patient/book-appointment', {
        doctor: selectedDoctor,
        date: selectedDate,
        time: selectedTime,
        patient: '65f99f567329da8cbe928470', // Assuming you have the patient's ID
      });
      console.log('Appointment booked successfully:', response.data);
      // Handle success, show a confirmation message, etc.
    } catch (error) {
      console.error('Error booking appointment:', error);
      // Handle error, show an error message to the user, etc.
    }
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
              <option key={doctor._id} value={doctor._id}>{doctor.name}</option>
            ))}
          </select>
        </div>

       

      
        <div style={{ marginBottom: '20px' }}>
          <label>Select Date:</label>
          <input type="date" value={selectedDate} onChange={(e) => handleDateChange(e.target.value)}/>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>Select Time:</label>
          <input type="time" value={selectedTime} onChange={(e) => handleTimeChange(e.target.value)} />
        </div>

        <div>
          <button onClick={handleBooking}>Book Appointment</button>
        </div>
      </div>
    </div>
  );
}

export default AppointmentBooking;
