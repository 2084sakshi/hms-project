import React, { useState, useEffect } from 'react';
import Header from './adminheader';
import axios from 'axios';
import './../css/admin.css';

function ApproveDoctors() {
  const [doctorApplications, setDoctorApplications] = useState([]);

  useEffect(() => {
    const fetchDoctorApplications = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin/doctor-applications');

        const formattedApplications = response.data.map(doctor => ({
          id: doctor._id,
          name: doctor.name,
          specialization: doctor.specialization,
          email: doctor.userId.email,
          phone: doctor.userId.mobileNo,
          experience: doctor.experience,
          fees: doctor.fees,
          address: doctor.address,
          gender: doctor.gender,
          time: doctor.time
        }));
        const data = response.data;
        console.log('Doctor applications:', data);
        setDoctorApplications(data);
      } catch (error) {
        console.error('Error fetching doctor applications:', error.message);
        console.log('Error fetching doctor applications:', error.message);
      }
    };

    fetchDoctorApplications();
  }, []);

  const handleApprove = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/admin/doctors/approve/${id}`);
      // Update the local state after successful approval
      setDoctorApplications(prevApplications => prevApplications.filter(application => application.id !== id));
      console.log(`Doctor with ID ${id} approved.`);
    } catch (error) {
      console.error('Error approving doctor:', error.message);
      console.log('Error approving doctor:', error.message);
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/admin/doctors/reject/${id}`);
      // Update the local state after successful rejection
      setDoctorApplications(prevApplications => prevApplications.filter(application => application.id !== id));
      console.log(`Doctor with ID ${id} rejected.`);
    } catch (error) {
      console.error('Error rejecting doctor:', error.message);
    }
  };

  return (
    <>
      <header>
        <Header onLogout={() => {}} />
      </header>
      <div>
        <h2>Approve Doctors</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Experience</th>
              <th>Fees</th>
              <th>Address</th>
              <th>Gender</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctorApplications.map((application, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{application.name}</td>
                <td>{application.specialization}</td>
                <td>{application.userId.email}</td>
                <td>{application.userId.mobileNo}</td> 
                <td>{application.experience}</td>
                <td>{application.fees}</td>
                <td>{application.address}</td>
                <td>{application.gender}</td>
                <td>{application.time}</td>
                <td>
                  <button onClick={() => handleApprove(application._id)}>Approve</button>
                  <button onClick={() => handleReject(application._id)}>Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ApproveDoctors;
