import React from 'react';
import Header from './adminheader';
import './../css/admin.css';

function AdminDashboard() {
  // Simulated data
  const userCount = 100;
  const doctorCount = 20;
  const patientCount = 80;
  const applicationCount = 5;

  return (
    <div className="admin-dashboard">
      <header className='logout-btn'>
        <Header onLogout={() => {}} />
      </header>
      <h1>Welcome to the Admin Dashboard</h1>
      <section>
        <h2>Summary:</h2>
        <p>
          Explore and manage user, doctor, and application data in the admin panel. Here's a quick overview of the current statistics:
        </p>
        <ul >
          <span className='list'>
          <li className='card-1'>Total Users:<span className='list-item'> {userCount}</span></li>
          <li className='card-2'>Total Doctors: {doctorCount}</li>
          <li className='card-4'>Pending Applications: {applicationCount}</li>
          <li className='card-3'>Total Patients: {patientCount}</li>
          </span>
        </ul>
      </section>
    </div>
  );
}

export default AdminDashboard;
