import React, { useState, useEffect } from 'react';
import Header from './adminheader';

function Appointments() {
  // Simulated data
  const [appointments, setAppointments] = useState([]);

  // Simulating fetching data from the backend
  useEffect(() => {
    // Replace this with actual API call to fetch appointments from the backend
    const fetchAppointments = async () => {
      // Simulated data with additional columns
      const simulatedAppointments = [
        { id: 1, patientName: 'John Doe', doctorName: 'Dr. Smith', date: '2024-02-10', time: '10:00 AM', bookingDate: '2024-02-05', status: 'Confirmed' },
        { id: 2, patientName: 'Jane Smith', doctorName: 'Dr. Johnson', date: '2024-02-12', time: '02:30 PM', bookingDate: '2024-02-08', status: 'Pending' },
        { id: 3, patientName: 'Alice Brown', doctorName: 'Dr. Davis', date: '2024-02-15', time: '09:00 AM', bookingDate: '2024-02-10', status: 'Confirmed' },
        { id: 4, patientName: 'Bob Wilson', doctorName: 'Dr. Anderson', date: '2024-02-18', time: '11:30 AM', bookingDate: '2024-02-12', status: 'Pending' },
        { id: 5, patientName: 'Emily Johnson', doctorName: 'Dr. Thompson', date: '2024-02-20', time: '03:00 PM', bookingDate: '2024-02-15', status: 'Confirmed' },
        { id: 6, patientName: 'Michael Davis', doctorName: 'Dr. Wilson', date: '2024-02-22', time: '08:30 AM', bookingDate: '2024-02-18', status: 'Pending' },
        // Add more simulated appointments as needed
      ];

      setAppointments(simulatedAppointments);
    };

    fetchAppointments();
  }, []);

  return (
    <>
    <header>
    <Header onLogout={() => {}} />
  </header>
    <div>
      <h2>Appointments</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Date</th>
            <th>Time</th>
            <th>Booking Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.id}</td>
              <td>{appointment.patientName}</td>
              <td>{appointment.doctorName}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>{appointment.bookingDate}</td>
              <td>{appointment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default Appointments;
