// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header({ onLogout }) {
  // Assuming you have a logo image in the public folder
  const logoUrl = process.env.PUBLIC_URL + '/path/to/your/logo.png';
  const handleLogout = () => {
    console.log('Logout logic goes here');
  };
  return (
    <header>
      <div className="logo-container inline-block">
        <img src={logoUrl} alt="Logo" />
        <h5>Medconnect360</h5>
      </div>
      <nav className="quick-links">
        <ul>
          <li>
            <Link to="/admin/users">View User List</Link>
          </li>
          <li>
            <Link to="/admin/doctors">View Doctor List</Link>
          </li>
          <li>
            <Link to="/admin/appointments">View Appointments</Link>
          </li>
          <li>
            <Link to="/admin/approve-doctors">Approve Doctors</Link>
          </li>
        </ul>
        <button onClick={onLogout}>Logout</button>
      </nav>
    </header>
  );
}

export default Header;
