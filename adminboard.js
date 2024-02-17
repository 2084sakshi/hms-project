import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoUrl from './../image/logo.svg';
import doctor from './../image/doctor.svg';
import patient from './../image/patient.svg';
import applications from './../image/applications.svg';
import user from './../image/user.svg';
import './../css/home.css';

function AdminDashboard() {
  const [showLoginRegister, setShowLoginRegister] = useState(null);

  // Define state variables for user, doctor, patient, and application counts
  const [userCount, setUserCount] = useState(100);
  const [doctorCount, setDoctorCount] = useState(20);
  const [patientCount, setPatientCount] = useState(80);
  const [applicationCount, setApplicationCount] = useState(5);

  const handleDropdownClick = (userType) => {
    // Toggle the showLoginRegister state based on the selected userType
    setShowLoginRegister(showLoginRegister === userType ? null : userType);
  };

  // JavaScript logic for incrementing user, doctor, patient, and application counts
  const incrementUserCount = () => setUserCount(userCount + 1);
  const incrementDoctorCount = () => setDoctorCount(doctorCount + 1);
  const incrementPatientCount = () => setPatientCount(patientCount + 1);
  const incrementApplicationCount = () => setApplicationCount(applicationCount + 1);

  return (
    <div className="landing-page">
      {/* Header Section */}
      <header className="home-header">
        <div className="logo-container">
          <img src={logoUrl} alt="MedConnect360 logo"/> 
          <h1>Medconnect360</h1>
        </div>

        <nav className="quick-links">
          <ul className="nav-links">
            <li className='nav-links'><a href="/admin/users">View User List</a></li>
            <li className='nav-links'><a href="/admin/doctors">View Doctor List</a></li>
            <li className='nav-links'><a href="/admin/appointments">View Appointments</a></li>
            <li className='nav-links'><a href="/admin/approve-doctors">Approve Doctors</a></li>
           
            <li className='nav-links'> </li>
          </ul>
        </nav>
      </header>

      {/* Welcome Section */}
      <section className="welcome-section" id="home">
        <div className='top-section'>
          <h2>
            Welcome to  <span>Admin Dashboard</span>
          </h2>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" id="about">
        <div className="feature">
          <div className='comparison-item'>
            <img src={user} alt='user'/>
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
            <img src={doctor} alt='doctor'/>
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
            <img src={patient} alt='patient'/>
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
            <img src={applications} alt='applications'/>
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
