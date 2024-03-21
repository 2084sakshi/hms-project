import React, { useState, useEffect } from 'react';
import DoctorHeader from './doctorheader';

function DoctorApproveAppointment() {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  // Dummy data for appointments (replace with actual data fetching)
  useEffect(() => {
    // Simulated fetch from backend
    const fetchAppointments = async () => {
      // Simulated API endpoint
      const dummyAppointments = [
        {
          id: 1,
          patientName: 'John Doe',
          date: '2024-02-10',
          time: '10:00 AM',
        },
        {
          id: 2,
          patientName: 'Jane Smith',
          date: '2024-02-12',
          time: '2:30 PM',
        },
        {
          id: 3,
          patientName: 'Bob Johnson',
          date: '2024-01-15',
          time: '3:45 PM',
        },
        // Add more dummy data as needed
      ];

      setAppointments(dummyAppointments);
    };

    fetchAppointments();
  }, []);

  const handleApproveAppointment = (appointment) => {
    // Logic to approve appointment (to be implemented)
    console.log('Appointment approved:', appointment);
    // You may want to update the appointment status and re-fetch appointments from the backend
    setSelectedAppointment(null);
  };

  const handleRejectAppointment = (appointment) => {
    // Logic to reject appointment (to be implemented)
    console.log('Appointment rejected:', appointment);
    // You may want to update the appointment status and re-fetch appointments from the backend
    setSelectedAppointment(null);
  };

  return (
    <div>
      <DoctorHeader />
      <div>
        <h2>Approve Appointments</h2>
        <table>
          <thead>
            <tr>
              <th>Patient</th>
              <th>Date</th>
              <th>Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id} className={selectedAppointment === appointment ? 'selected' : ''}>
                <td>{appointment.patientName}</td>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td>
                  <button onClick={() => handleApproveAppointment(appointment)}>Approve</button>
                  <button onClick={() => handleRejectAppointment(appointment)}>Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DoctorApproveAppointment;
