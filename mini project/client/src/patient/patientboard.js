// PatientDashboard.js
import React from 'react';
import PatientHeader from './patientheader';
import './../css/patient.css';
function PatientDashboard() {
  return (
    <div>
      <PatientHeader />
      <div className='patientheader'>
        <h2>Welcome to Your Dashboard!</h2>
        <p>
          Thank you for choosing Medconnect360 for your healthcare needs. This dashboard provides you with
          quick access to essential features. Here's what you can do:
        </p>
        <ul className='dash-links'>
          <img src='' alt=''/>
          <li><strong>Book Appointment:</strong> Schedule your medical appointments with ease.</li>
          <li><strong>View Appointments:</strong> Check your upcoming and past appointments.</li>
          <li><strong>Medical History:</strong> Review your medical history and diagnoses.</li>
          <li><strong>Profile:</strong> Update your personal information and preferences.</li>
          <li><strong>Settings:</strong> Customize your account settings and notification preferences.</li>
        </ul>
        <p>
          Our dedicated team of healthcare professionals is here to ensure you receive the best care.
          If you have any questions or concerns, feel free to reach out through the <a href="/patient/messages">messaging system</a>.
        </p>
       
      </div>
    </div>
  );
}

export default PatientDashboard;
