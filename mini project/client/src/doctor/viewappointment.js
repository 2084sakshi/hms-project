import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DoctorHeader from './doctorheader';

function DoctorViewAppointments() {
  const [completedAppointments, setCompletedAppointments] = useState([]);
  const [pendingAppointments, setPendingAppointments] = useState([]);
  const doctorId = '65fb1ad51c177f3f9b3d7934'; // Assuming you have the doctor's ID

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/doctor/${doctorId}/appointments`);
        console.log('Appointments data:', response.data);
        console.log('Doctor ID:', doctorId);
        setCompletedAppointments(response.data);
        setPendingAppointments(response.data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
  
    };

    fetchAppointments();
  }, [doctorId]);

  return (
    <div>
      <DoctorHeader />
      <h2>Your Appointments</h2>
      {renderAppointments(pendingAppointments)}
    </div>
  );
}

function renderAppointments(appointments,index) {
  return (
    <table className="appointment-table">
      <thead>
        <tr>
       
          <th>Patient</th>
          <th>BookingDate</th>
          <th>Date</th>
          <th>Time</th>
          
        </tr>
      </thead>
      <tbody>
        {appointments.map(appointment => (
          <tr key={appointment._id}>

            <td>{appointment.patient.name}</td>
            <td>{appointment.bookingDate}</td>
            <td>{appointment.date}</td>
            <td>{appointment.time}</td>
           
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DoctorViewAppointments;
