// DoctorDashboard.js
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import DoctorHeader from './doctorheader';
import './doctor.css'; // Import the CSS file


function DoctorDashboard() {
  const appointments = 15;
  const upcomingappt = 7;
  const todayappt = 3;
  return (
    <div className="doctor-dashboard-container">
        <DoctorHeader />
      <header>
        <h1>Welcome to Your Doctor Dashboard</h1>
        <p>Thank you for choosing Medconnect360 for your healthcare needs.</p>
        <p>This dashboard provides you with quick access to essential features.</p>
      </header>
       
      <section className="dashboard-content">
        <h2>Doctor Overview</h2>
        <div className="overview-stats">
          <ul>
            <li>Total Appointments: {appointments}</li>
            <li>Upcoming Appointments: {upcomingappt}</li>
            <li>Today's Appointments:{todayappt}</li>
          </ul>
        </div>
      </section>
      <section className="dashboard-overview">
        <h2>What You Can Do:</h2>
        <ul>
          <li>
            <strong>Manage Appointments:</strong> Schedule and review upcoming and past appointments.
          </li>
          <li>
            <strong>Patient Information:</strong> Access and update patient medical history and diagnoses.
          </li>
          <li>
            <strong>Profile:</strong> Keep your professional information up-to-date.
          </li>
          <li>
            <strong>Settings:</strong> Customize your account settings and notification preferences.
          </li>
        </ul>
        <p>
          Our dedicated team of healthcare professionals is here to ensure you provide the best care to your patients.
          If you have any questions or need assistance, feel free to use the messaging system.
        </p>
      </section>
    </div>
  );
}

export default DoctorDashboard;
