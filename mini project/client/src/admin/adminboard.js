import React from 'react';
import Header from './adminheader';
import './../css/admin.css'

function AdminDashboard() {
  // Simulated data
  const userCount = 100;
  const doctorCount = 20;
  const applicationCount = 5;

  return (
    <div>
      <header id = "#home">
        <Header onLogout={() => {}} />
      </header>
      <h1>Welcome to the Admin Dashboard</h1>
      <section id = "#about">
        <h2>Summary:</h2>
        <p>
          Explore and manage user, doctor, and application data in the admin panel. Here's a quick overview of the current statistics:
        </p>
        <ul>
          <li>Total Users: {userCount}</li>
          <li>Total Doctors: {doctorCount}</li>
          <li>Pending Applications: {applicationCount}</li>
        </ul>
      </section>
     
    </div>
  );
}

export default AdminDashboard;
