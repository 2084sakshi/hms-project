// DoctorViewAppointments.js
import React from 'react';
import DoctorHeader from './doctorheader';
import './doctor.css'; // Import the CSS file

const dummyAppointments = [
  {
    id: 1,
    patientName: 'John Doe',
    date: '2024-02-10',
    time: '10:00 AM',
    status: 'Upcoming',
  },
  {
    id: 2,
    patientName: 'Jane Smith',
    date: '2024-02-12',
    time: '2:30 PM',
    status: 'Upcoming',
  },
  {
    id: 3,
    patientName: 'Bob Johnson',
    date: '2024-01-15',
    time: '3:45 PM',
    status: 'Completed',
  },
  // Add more dummy data as needed
  {
    id: 4,
    patientName: 'Alice Brown',
    date: '2024-02-15',
    time: '9:30 AM',
    status: 'Upcoming',
  },
  {
    id: 5,
    patientName: 'Michael Davis',
    date: '2024-02-18',
    time: '4:00 PM',
    status: 'Upcoming',
  },
  {
    id: 6,
    patientName: 'Sarah Johnson',
    date: '2024-02-20',
    time: '11:30 AM',
    status: 'Completed',
  },
  {
    id: 7,
    patientName: 'David Wilson',
    date: '2024-02-22',
    time: '3:00 PM',
    status: 'Completed',
  },
  {
    id: 8,
    patientName: 'Emily Thompson',
    date: '2024-02-25',
    time: '9:00 AM',
    status: 'Completed',
  },
  {
    id: 9,
    patientName: 'Daniel Harris',
    date: '2024-02-28',
    time: '1:30 PM',
    status: 'Completed',
  },
];

function DoctorViewAppointments() {
  const today = new Date().toLocaleDateString();

  const completedAppointments = dummyAppointments.filter(appointment => appointment.status === 'Completed').reverse();
  const upcomingAppointments = dummyAppointments.filter(appointment => appointment.status === 'Upcoming' && appointment.date !== today).reverse();
  

  return (
    <div>
      <DoctorHeader />
      <h2>Your Appointments</h2>
      <h3>Upcoming Appointments</h3>
      {renderAppointments(upcomingAppointments)}
      <h3>Completed Appointments</h3>
      {renderAppointments(completedAppointments)}

    </div>
  );
}

function renderAppointments(appointments) {
  return (
    <table className="appointment-table">
      <thead>
        <tr>
          <th>Patient</th>
          <th>Date</th>
          <th>Time</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map(appointment => (
          <tr key={appointment.id}>
            <td>{appointment.patientName}</td>
            <td>{appointment.date}</td>
            <td>{appointment.time}</td>
            <td>{appointment.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DoctorViewAppointments;
