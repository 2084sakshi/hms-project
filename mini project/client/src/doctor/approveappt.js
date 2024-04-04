import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DoctorHeader from './doctorheader';

function DoctorApproveAppointment() {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  // Fetch appointments from the backend
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/doctor/65fb1ad51c177f3f9b3d7934/appointments');
        const pendingAppointments = response.data.filter(appointment => appointment.status === 'pending');
        setAppointments(pendingAppointments);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);
/*
  const handleApproveAppointment = async (appointmentId) => {
    try {
      await axios.put(`http://localhost:5000/api/doctor/appointmentapprove/${appointmentId}`);
      // If the request is successful, update the local state or re-fetch appointments
      // Update local state example:
      const updatedAppointments = appointments.map(appointment => {
        if (appointment._id === appointmentId) {
          return { ...appointment, status: 'approved' };
        }
        return appointment;
      });
      setAppointments(updatedAppointments);
    } catch (error) {
      console.error('Error approving appointment:', error);
    }
  };

  const handleRejectAppointment = async (appointmentId) => {
    try {
      await axios.put(`http://localhost:5000/api/doctor/appointmentcancel/${appointmentId}`);
      // If the request is successful, update the local state or re-fetch appointments
      // Update local state example:
      const updatedAppointments = appointments.map(appointment => {
        if (appointment._id === appointmentId) {
          return { ...appointment, status: 'rejected' };
        }
        return appointment;
      });
      setAppointments(updatedAppointments);
    } catch (error) {
      console.error('Error rejecting appointment:', error);
    }
  };*/
const  handleApproveAppointment = async (appointmentId) => {
    try {
      console.log('Approving appointment:', appointmentId)
      const response = await axios.put(`http://localhost:5000/api/doctor/appointmentapprove/${appointmentId}`);

    console.log('Appointment approved successfully:', response.data);
      // If the request is successful, update the local state or re-fetch appointments
      // Update local state example:
      const updatedAppointments = appointments.map(appointment => {
        if (appointment._id === appointmentId) {
          return { ...appointment, status: 'approved' };
        }
        return appointment;
      });
      setAppointments(updatedAppointments);
      console.log('Appointment approved successfully');
    } catch (error) {
      console.error('Error approving appointment:', error);
      // Handle error, show an error message to the user, etc.
    }
  };
  
  const handleRejectAppointment = async (appointmentId) => {
    try {
      await axios.put(`http://localhost:5000/api/doctor/appointmentcancel/${appointmentId}`);
      // If the request is successful, update the local state or re-fetch appointments
      // Update local state example:
      const updatedAppointments = appointments.map(appointment => {
        if (appointment._id === appointmentId) {
          return { ...appointment, status: 'rejected' };
        }
        return appointment;
      });
      setAppointments(updatedAppointments);
      console.log('Appointment rejected successfully');
    } catch (error) {
      console.error('Error rejecting appointment:', error);
      // Handle error, show an error message to the user, etc.
    }
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
              <tr key={appointment._id} className={selectedAppointment === appointment ? 'selected' : ''}>
                <td>{appointment.patient.name}</td>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td>
                  <button onClick={() => handleApproveAppointment(appointment._id)}>Approve</button>
                  <button onClick={() => handleRejectAppointment(appointment._id)}>Reject</button>
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
