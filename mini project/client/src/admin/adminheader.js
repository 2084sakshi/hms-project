import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './../css/admin.css';

function Header({ onLogout }) {
  const logoUrl = process.env.PUBLIC_URL + '/path/to/your/logo.png';
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any logout logic
    console.log('Logout logic goes here');
    if (onLogout) {
      onLogout();
    }

    // Navigate to the home page ("/")
    navigate("/");
  };

  return (
    <header className='admin-header'>
      <div className="logo-container inline-block">
        <img src={logoUrl} alt="Logo" />
        <h5>Medconnect360</h5>
      </div>
      <nav className="quick-links">
        <ul>
          <li>
            <Link to="/admin">Dashboard</Link>
          </li>
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
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </header>
  );
}

export default Header;
