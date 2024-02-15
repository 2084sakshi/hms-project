// LandingPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './../css/home.css';
import './../css/admin.css';
import logo from './../img/logo.svg';
import Homepage from './../img/homepage1.svg';
import doctor from './../img/doctor.svg';
import patient from './../img/patient.svg';

function Home() {
  const [showLoginRegister, setShowLoginRegister] = useState(null);

  const handleDropdownClick = (userType) => {
    setShowLoginRegister(showLoginRegister === userType ? null : userType);
  };

  return (
    <div className="landing-page">
      {/* Header Section */}
      <header className="home-header">
        <div className="logo-container">
          <img src={logo} alt="MedConnect360 logo"/>
          <h1>Medconnect360</h1>
        </div>

        <nav className="quick-links">
          <ul className="nav-links">
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
               <li className='nav-links'><a href = "#home">Home</a> </li>
               <li className='nav-links'><a href = "#about">About</a>
            </li>
            <li className='nav-links'> <a href = "#contact">Contact</a> </li>
            <li className='nav-links'>
            <div
                className="dropdown-trigger"
                onClick={() => handleDropdownClick('doctor')}
              >
                Doctor
              {showLoginRegister === 'doctor' && (
                <div className="dropdown">
                  <Link to="/login-doctor">Login</Link>
                  <Link to="/register-doctor">Register</Link>
                </div>
              )}
              </div>
            </li>
            <li className='nav-links'>

              <div
                className="dropdown-trigger"
                onClick={() => handleDropdownClick('patient')}
              >
                Patient
              {showLoginRegister === 'patient' && (
                <div className="dropdown">
                  <Link to="/login-patient">Login</Link>
                  <Link to="/register-patient">Register</Link>
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
        <div className='top-section'>
        <h2>Embrace Your Health Journey with <span>Medconnect360</span></h2>
        <p>
          Welcome to Medconnect360, where health meets technology in a seamless dance. Schedule and manage appointments effortlessly for both doctors and patients. Let's embark on a journey to prioritize your well-being.
        </p>
  
        </div>
        
      </section>


      {/* Features Section */}
      <section id = "about">
             <section className="features-section">
        <div className="feature">
         <div className='comparison-item'>
          <img src={doctor} alt='doctor'/>
          <mark className="text-branch"><h3>For Doctors</h3></mark>
           <ul>
            <li>Effortlessly orchestrate appointments</li>
            <li>Dive into patient histories with grace</li>
            <li>Maintain your availability like a symphony</li>
           </ul>
          </div>
        </div>
        <div className="feature">
        <div className='comparison-item'>
        <img src={patient} alt='patient'/>
        <mark className="text-branch1"><h3>For Patients</h3></mark>
          <ul>
            <li >Schedule appointments with the finesse of a virtuoso</li>
            <li>Access medical records at your fingertips</li>
            <li>Stay harmoniously informed about your health journey</li>
          </ul>
          </div>
        </div>
      </section>
      </section>
      <div className='contact-us'>
      <section id="contact" class = "contact">
        <div class = "title"  data-aos="fade-down" >
          <div className='card'>
            <h2>Contact <span>Us</span></h2>
            </div>
        </div>
        <div class = "contact-form"  data-aos="zoom-in" >
        <div className='card'>
            <form action = "">
                <input type="text" placeholder="Enter Name" class="box" required></input>
                <input type="email" placeholder="Enter Email" class="box" required></input>
                <textarea name="" id="" cols="30" rows="10" placeholder="Enter Message" class="box1"></textarea>
                <input type="submit" value="Send" class="btn-submit"></input>
            </form>
            </div>
        </div>
    
      </section>
      </div>
    </div>
  );
}

export default Home;
