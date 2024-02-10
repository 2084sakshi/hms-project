import React, { useState, useEffect } from 'react';
import DoctorHeader from './doctorheader';
import './doctor.css'; // Import the CSS file

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
          status: 'Pending',
        },
        {
          id: 2,
          patientName: 'Jane Smith',
          date: '2024-02-12',
          time: '2:30 PM',
          status: 'Pending',
        },
        {
          id: 3,
          patientName: 'Bob Johnson',
          date: '2024-01-15',
          time: '3:45 PM',
          status: 'Pending',
        },
        // Add more dummy data as needed
      ];

      setAppointments(dummyAppointments);
    };

    fetchAppointments();
  }, []);

  const handleSelectAppointment = (appointment) => {
    setSelectedAppointment(appointment);
  };

  const handleApproveAppointment = () => {
    const updatedAppointments = appointments.map((appointment) =>
      appointment.id === selectedAppointment.id
        ? { ...appointment, status: 'Approved' }
        : appointment
    );

    setAppointments(updatedAppointments);
    setSelectedAppointment(null);
  };

  const handleRejectAppointment = () => {
    const updatedAppointments = appointments.map((appointment) =>
      appointment.id === selectedAppointment.id
        ? { ...appointment, status: 'Rejected' }
        : appointment
    );

    setAppointments(updatedAppointments);
    setSelectedAppointment(null);
  };

  return (
    <div className="container">
      <div className="content">
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
                <tr key={appointment.id}>
                  <td>{appointment.patientName}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.time}</td>
                  <td className="actions">
                    <button onClick={() => handleSelectAppointment(appointment)}>Approve</button>
                    <button onClick={handleRejectAppointment}>Reject</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DoctorApproveAppointment;
