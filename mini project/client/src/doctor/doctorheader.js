// DoctorHeader.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function DoctorHeader({ onLogout}) {
  const navigate = useNavigate();
  const handleLogout = () => {
  
    console.log('Logout logic goes here');
    if (onLogout) {
      onLogout();
    }

    // Navigate to the home page ("/")
    navigate("/");
  };
  return (
    <header>
      <div className="logo">
        <img src="/path/to/your/logo.png" alt="MedCAonnect360" />
        <h4>Welcome,Doctor</h4> {/* Replace with your website name */}
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/doctor">Dashboard</Link>
          </li>
          <li>
            <Link to="/doctor/approve-appointments">Approve Appointments</Link>
          </li>
            <li>
                <Link to="/doctor/appointments">Scheduled Appointments</Link>
            </li>
          <li>
            <Link to="/doctor/profile">Profile</Link>
          </li>
          <li>
            <Link to="/doctor/settings">Settings</Link>
          </li>
        </ul>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </header>
  );
}

export default DoctorHeader;
