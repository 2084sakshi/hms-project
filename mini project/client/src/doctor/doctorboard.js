// DoctorDashboard.js
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import DoctorHeader from './doctorheader';
import Appointments from '../admin/appointment';


function DoctorDashboard() {
  const appointments = 15;
  const upcomingappt = 7;
  const todayappt = 3;
  return (
  <div className="doctor-dashboard-container">
  <DoctorHeader />
  <section className="welcome-section" id="home">
    <div className='top-section-doctor'>

  <h1>Welcome to Your Doctor Dashboard</h1>
  <p>Thank you for choosing Medconnect360 for your healthcare needs.</p>
  <p>This dashboard provides you with quick access to essential features.</p>
</div>
</section>
 
<section className="dashboard-content">
<h2>Doctor Overview</h2>

<section>
<div className='doctor-grid'>
  <div className="feature">
    <div className='comparison-box'>
      <ul>
        <li><strong>Total Appointments: {appointments}</strong></li>
      </ul>
    </div>
    <div className='comparison-box'>
      <ul>
        <li><strong>Upcoming Appointments: {upcomingappt}</strong></li>
      </ul>
    </div>
    <div className='comparison-box'>
      <ul>
      <li><strong>Today's Appointments: {todayappt}</strong></li>
      </ul>
    </div>
  </div>
</div>
</section>

<section className="dashboard-overview">
  <h2>What You Can Do:</h2>
  <div className='comparisons-box'>
      <ul>
         <li>
      <strong>Manage Appointments:</strong> Schedule and review upcoming and past appointments.
    </li></ul></div>
    <div className='comparisons-box'>
      <ul>
      <li>
      <strong>Patient Information:</strong> Access and update patient medical history and diagnoses.
    </li></ul></div>
    <div className='comparisons-box'>
      <ul>
      <li>
      <strong>Profile:</strong> Keep your professional information up-to-date.
    </li></ul></div>
    <div className='comparisons-box'>
      <ul>
      <li>
      <strong>Settings:</strong> Customize your account settings and notification preferences.
    </li>
    </ul></div>
    <div className='comparisons-box'>
      <ul>
     <li>
      <strong>Notification:</strong> Get Notifications to stay updated on your daily activities.
    </li>
  </ul>
  </div>
  <p>
    Our dedicated team of healthcare professionals is here to ensure you provide the best care to your patients.
    If you have any questions or need assistance, feel free to use the messaging system.
  </p>
</section>

</section>


</div>
);
}

export default DoctorDashboard;