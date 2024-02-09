// ViewAppointment.js
import React from 'react';
import PatientHeader from './patientheader';
import './../css/patient.css';
function ViewAppointment() {
  // Mock data for demonstration purposes
  const appointments = [
    { date: '2024-02-10', startTime: '10:00 AM', endTime: '11:00 AM', doctor: 'Dr. Smith', status: 'Confirmed' },
    { date: '2024-02-15', startTime: '02:30 PM', endTime: '03:30 PM', doctor: 'Dr. Johnson', status: 'Pending' },
    // Add more appointments as needed
  ];

  return (
    <div>
      <PatientHeader />
      <div>
        <h2>Your Appointments</h2>
        <table>
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Date</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Doctor</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{appointment.date}</td>
                <td>{appointment.startTime}</td>
                <td>{appointment.endTime}</td>
                <td>{appointment.doctor}</td>
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
