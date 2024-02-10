import React from 'react';
import { Link } from 'react-router-dom';
import './doctor.css'; // Import the CSS file


function DoctorHeader() {
  const handleLogout = () => {
    console.log('Logout logic goes here');
  };

  return (
    <header className="doctor-header"> {/* Add a class name for styling */}
      <div className="logo">
        <img src="/path/to/your/logo.png" alt="MedConnect360" />
        <h4>Welcome, Doctor</h4> {/* Replace with your website name */}
      </div>

      <nav className="nav-container">
        {/* Add a class name for styling the nav container */}
        <ul className="nav-list"> {/* Add a class name for styling the nav list */}
          <li className="nav-item"> {/* Add a class name for styling the nav items */}
            <Link to="/doctor" className="nav-link">
              <span className="nav-text">Dashboard</span> {/* Add a span with class for styling */}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/doctor/approve-appointments" className="nav-link">
              <span className="nav-text">Approve Appointments</span> {/* Add a span with class for styling */}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/doctor/appointments" className="nav-link">
              <span className="nav-text">Scheduled Appointments</span> {/* Add a span with class for styling */}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/doctor/profile" className="nav-link">
              <span className="nav-text">Profile</span> {/* Add a span with class for styling */}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/doctor/settings" className="nav-link">
              <span className="nav-text">Settings</span> {/* Add a span with class for styling */}
            </Link>
          </li>
        </ul>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </nav>
    </header>
  );
}

export default DoctorHeader;
