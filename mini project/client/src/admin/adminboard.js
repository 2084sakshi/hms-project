import React from 'react';
import Header from './adminheader';
import './../css/admin.css';

function AdminDashboard() {
  // Simulated data
  const userCount = 11;
  const doctorCount = 3;
  const applicationCount = 2;
  const patientCount = 8;

  const handleDropdownClick = (userType) => {
    // Toggle the showLoginRegister state based on the selected userType
    setShowLoginRegister(showLoginRegister === userType ? null : userType);
  }
  return (/*
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
     
    </div>*/
    <div className="landing-page">
      {/* Header Section */}
      <header className="home-header">
      <Header onLogout={() => {}} />
      </header>

      {/* Welcome Section */}
      <section className="welcome-section" id="home">
        <div className='top-section-admin'>
        <h2>Welcome To <span>Admin Dashboard</span></h2>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" id="about">
        <div className="feature">
          <div className='comparison-item'>
            {/*<img src={user} alt='user'/>*/}
            <h3>Total Users: {userCount}</h3>
           
            <mark className="text-branch">
            <ul>
              <li>Patients can securely access and manage their health records.</li>

              <li>Stay harmoniously informed about your health journey</li>
            </ul>
            </mark>
          </div>
        </div>
        <div className="feature">
          <div className='comparison-item'>
            {/*<img src={doctor} alt='doctor'/>*/}
            <h3>Total Doctors: {doctorCount}</h3>
            <mark className="text-branch">
            <ul>
              <li>Effortlessly orchestrate appointments</li>
              <li>Dive into patient histories with grace</li>
              <li>Maintain your availability like a symphony</li>
            </ul>
            </mark>
          </div>
        </div>
        <div className="feature">
          <div className='comparison-item'>
            {/*<img src={patient} alt='patient'/>*/}
            <h3>Total Patients: {patientCount}</h3>
            <mark className="text-branch">
           
            <ul>
               {/* Add additional user interface elements here */}
               <li>Schedule appointments with the finesse of a virtuoso</li>
              <li>Access medical records at your fingertips</li>
              <li>Stay harmoniously informed about your health journey</li>
            </ul>
            </mark>
          </div>
        </div>
        <div className="feature">
          <div className='comparison-item'>
            
            {/*<img src={applications} alt='applications'/>*/}
            <h3>Total Applications: {applicationCount}</h3>
            <mark className="text-branch">
            
            <ul>
               {/* Add additional user interface elements here */}
               <li>Ensure the privacy and security of user data through robust encryption.</li>
              <li>Receive instant notifications for appointments, messages, and updates.</li>
            </ul>
            </mark>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdminDashboard;
