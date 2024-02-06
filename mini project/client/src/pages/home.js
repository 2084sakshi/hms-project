// LandingPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [showLoginRegister, setShowLoginRegister] = useState(null);

  const handleDropdownClick = (userType) => {
    setShowLoginRegister(showLoginRegister === userType ? null : userType);
  };

  return (
    <div className="landing-page">
      {/* Header Section */}
      <header>
        <div className="logo">
          <img src="/path/to/logo.png" alt="Medconnect360 Logo" />
          <h1>Medconnect360</h1>
        </div>
        {/* 
        <nav>
          <ul>
            <li>
              <Link to="/admin">Admin</Link>
              {showLoginRegister === 'admin' && (
                <div className="dropdown">
                  <Link to="/login">Login</Link>
                  <Link to="/register">Register</Link>
                </div>
              )}
            </li>
            <li>
              <Link to="/doctor">Doctor</Link>
              {showLoginRegister === 'doctor' && (
                <div className="dropdown">
                  <Link to="/login">Login</Link>
                  <Link to="/register">Register</Link>
                </div>
              )}
            </li>
            <li>
              <Link to="/patient">Patient</Link>
              {showLoginRegister === 'patient' && (
                <div className="dropdown">
                  <Link to="/login">Login</Link>
                  <Link to="/register">Register</Link>
                </div>
              )}
            </li>
          </ul>
        </nav>
        */}
        <nav >
        <ul>
          <li>
        <Link to="/login">Login</Link>
        </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          </ul>
          </nav>

          
      </header>

      {/* Welcome Section */}
      <section className="welcome-section">
        <h2>Embrace Your Health Journey with Medconnect360</h2>
        <p>
          Welcome to Medconnect360, where health meets technology in a seamless dance. Schedule and manage appointments effortlessly for both doctors and patients. Let's embark on a journey to prioritize your well-being.
        </p>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="feature">
          <h3>For Doctors</h3>
          <ul>
            <li>Effortlessly orchestrate appointments</li>
            <li>Dive into patient histories with grace</li>
            <li>Maintain your availability like a symphony</li>
          </ul>
        </div>
        <div className="feature">
          <h3>For Patients</h3>
          <ul>
            <li>Schedule appointments with the finesse of a virtuoso</li>
            <li>Access medical records at your fingertips</li>
            <li>Stay harmoniously informed about your health journey</li>
          </ul>
        </div>
        <div className="feature">
          <h3>Admin Dashboard</h3>
          <ul>
            <li>Streamline user management with the precision of a conductor</li>
            <li>Monitor appointments in a rhythm that suits you</li>
            <li>Analyze system analytics for a symphony of insights</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Home;
