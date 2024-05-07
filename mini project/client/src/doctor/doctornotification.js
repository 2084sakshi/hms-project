import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import DoctorHeader from './doctorheader';
;


function DoctorNotification() {
  const [notifications, setNotifications] = useState([]);

  const handleLogout = () => {
    console.log('Logout logic goes here');
  };

  // Simulated notifications data
  const initialNotifications = [
    { id: 1, message: 'New appointment scheduled' },
    { id: 2, message: 'Patient has updated medical history' },
    // Add more simulated notifications as needed
  ];

  useEffect(() => {
    // Simulate fetching notifications (can be replaced with actual API call)
    setNotifications(initialNotifications);
  }, []);

  // Function to handle notification click
  const handleNotificationClick = (id) => {
    // For simplicity, let's just log the clicked notification
    console.log('Notification clicked:', id);
  };

  return (
    <div>
      <header className='home-header'>
        <div className="logo-container">
          
          <h1>Medconnect360</h1>
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
              <Link to="/doctor/appointments">View Appointment</Link>
            </li>
            <li>
              <Link to="/doctor/profile">Profile</Link>
            </li>
            <li>
              <Link to="/doctor/settings">Settings</Link>
            </li>
            <li>
              <Link to="/doctor/doctor-notification">Notification</Link>
            </li>
          </ul>
          
          <button onClick={handleLogout}>Logout</button>
        </nav>
      </header>

      <div className="notification-container">
      <h2>Notifications</h2>
        <ul className="notification-list">
          {notifications.map((notification) => (
            <li key={notification.id} onClick={() => handleNotificationClick(notification.id)}>
              {notification.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DoctorNotification;