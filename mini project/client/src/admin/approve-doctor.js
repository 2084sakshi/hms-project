import React, { useState, useEffect } from 'react';
import Header from './adminheader';

function ApproveDoctors() {
  // Simulated data
  const [doctorApplications, setDoctorApplications] = useState([]);

  // Simulating fetching data from the backend
  useEffect(() => {
    // Replace this with actual API call to fetch doctor applications from the backend
    const fetchDoctorApplications = async () => {
      // Simulated data with additional columns
      const simulatedApplications = [
        { id: 1, name: 'Dr. John Doe', specialty: 'Cardiology', email: 'john@example.com', phone: '1234567890', experience: '10 years', fees: '2000', address: '123 Main St, City', gender: 'Male', time: '9:00 AM - 5:00 PM' },
        { id: 2, name: 'Dr. Jane Smith', specialty: 'Pediatrics', email: 'jane@example.com', phone: '9876543210', experience: '8 years', fees: '1500', address: '456 Oak St, City', gender: 'Female', time: '10:00 AM - 6:00 PM' },
        // Add more simulated doctor applications as needed
      ];

      setDoctorApplications(simulatedApplications);
    };

    fetchDoctorApplications();
  }, []);

  const handleApprove = (id) => {
    // Implement logic to approve the doctor application
    console.log(`Doctor with ID ${id} approved.`);
  };

  const handleReject = (id) => {
    // Implement logic to reject the doctor application
    console.log(`Doctor with ID ${id} rejected.`);
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
          {doctorApplications.map((application) => (
            <tr key={application.id}>
              <td>{application.id}</td>
              <td>{application.name}</td>
              <td>{application.specialty}</td>
              <td>{application.email}</td>
              <td>{application.phone}</td>
              <td>{application.experience}</td>
              <td>{application.fees}</td>
              <td>{application.address}</td>
              <td>{application.gender}</td>
              <td>{application.time}</td>
              <td>
                <button onClick={() => handleApprove(application.id)}>Approve</button>
                <button onClick={() => handleReject(application.id)}>Reject</button>
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
