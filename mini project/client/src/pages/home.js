// LandingPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './../css/admin.css';

function Home() {
  const [showLoginRegister, setShowLoginRegister] = useState(null);

  const handleDropdownClick = (userType) => {
    setShowLoginRegister(showLoginRegister === userType ? null : userType);
  };

  return (
    <div className="landing-page">
      {/* Header Section */}
      <header className='admin-header'>
        <div className="logo-container inline-block">
          <img src="/path/to/logo.png" alt="Medconnect360 Logo" />
          <h1>Medconnect360</h1>
        </div>

        <nav className="quick-links">
          <ul>
            {/*<li>
            <div
                className="dropdown-trigger"
                onClick={() => handleDropdownClick('admin')}
              >
                Admin    
          
              {showLoginRegister === 'admin' && (
                <div className="dropdown">
                  <Link to="/login">Login</Link>
                  <Link to="/register">Register</Link>
                </div>
              )}
              </div>
            </li>
              */}
               <li>
             <a href = "#home">Home</a>
            </li>
               <li>
             <a href = "#about">About</a>
            </li>
            <li>
             <a href = "#contact">Contact</a>
            </li>
            <li>
            <div
                className="dropdown-trigger"
                onClick={() => handleDropdownClick('doctor')}
              >
                Doctor
              {showLoginRegister === 'doctor' && (
                <div className="dropdown">
                  <Link to="/login">Login</Link>
                  <Link to="/register">Register</Link>
                </div>
              )}
              </div>
            </li>
            <li>

              <div
                className="dropdown-trigger"
                onClick={() => handleDropdownClick('patient')}
              >
                Patient
              {showLoginRegister === 'patient' && (
                <div className="dropdown">
                  <Link to="/login">Login</Link>
                  <Link to="/register">Register</Link>
                </div>
              )}
              </div>
            </li>
           
          </ul>
        </nav>

        
        { /*<nav className='quick-links'>
      <ul>
        <li>
          <div className="dropdown">
            <button className="dropbtn">Login</button>
            <div className="dropdown-content">
              <Link to="/login?type=patient">Patient</Link>
              <Link to="/login?type=doctor">Doctor</Link>
              <Link to="/login?type=admin">Admin</Link>
            </div>
          </div>
        </li>
        <li>
          <div className="dropdown">
            <button className="dropbtn">Register</button>
            <div className="dropdown-content">
              <Link to="/register?type=patient">Patient</Link>
              <Link to="/register?type=doctor">Doctor</Link>
              <Link to="/register?type=admin">Admin</Link>
            </div>
          </div>
        </li>
      </ul>
    </nav>
*/}
          
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
      <section id="#contact" class = "contact">
        <div class = "title"  data-aos="fade-down" >
            <h2>Contact <span>Me</span></h2>
        </div>
        <div class = "contact-form"  data-aos="zoom-in" >
            <form action = "">
                <input type="text" placeholder="Enter Name" class="box" required></input>
                <input type="email" placeholder="Enter Email" class="box" required></input>
                <textarea name="" id="" cols="30" rows="10" placeholder="Enter Message" class="box"></textarea>
                <input type="submit" value="Send" class="btn-submit"></input>
            </form>
        </div>
      </section>
    </div>
  );
}

export default Home;
