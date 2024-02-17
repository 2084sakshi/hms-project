// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './../css/admin.css';
import logoUrl from './../image/logo.svg';



function Header({ onLogout }) {
  // Assuming you have a logo image in the public folder
 
  const handleLogout = () => {
    console.log('Logout logic goes here');
  };
  return (
    <header className="home-header">
    <div className="logo-container">
      <img src={logoUrl} alt="MedConnect360 logo"/> {/* Use the imported logoUrl */}
      <h1>Medconnect360</h1>
    </div>

    <nav className="quick-links">
      <ul className="nav-links">
      <li className='nav-links'><a href="/admin">Dashboard</a></li>
        <li className='nav-links'><a href="/admin/users">View User List</a></li>
        <li className='nav-links'><a href="/admin/doctors">View Doctor List</a></li>
        <li className='nav-links'><a href="/admin/appointments">View Appointments</a></li>
        <li className='nav-links'><a href="/admin/approve-doctors">Approve Doctors</a></li>
       
        <li className='nav-links'> </li>
      </ul>
    </nav>
  </header>
  );
}

export default Header;
