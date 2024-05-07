import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PatientHeader from './patientheader';

function ViewAppointment() {
  const [appointments, setAppointments] = useState([]);
    // Assuming you have the patient ID
    const patientId = '65f99f567329da8cbe928470';

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        
        const response = await axios.get(`http://localhost:5000/api/patient/${patientId}/appointments`);
        console.log('Appointments data:', response.data);
        setAppointments(response.data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, [patientId]);

  return (
    <div>
      <PatientHeader />
      <div>
        <h2>Your Appointments</h2>
        <table>
          <thead>
            <tr>
            <th>Doctor</th>
              <th>Date</th>
              <th>Time</th>
              <th>BookingDate</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={appointment._id}>
                 <td>{appointment.doctor.name}</td>
                 <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td>{appointment.bookingDate}</td>
                <td>{appointment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewAppointment;
