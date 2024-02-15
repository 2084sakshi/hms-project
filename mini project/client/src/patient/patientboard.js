// PatientDashboard.js
import React from 'react';
import PatientHeader from './patientheader';
import './../css/patient.css';
import Book from './../img/Book.svg';
import MediHist from './../img/medicalhist.svg';
import viewappt from './../img/viewappt.svg';
import profile from './../img/profile.svg';
import settings from './../img/settings.svg';
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
          <img src={Book} style={{width:200 ,innerHeight:100}}/>
          <li><strong>Book Appointment:</strong> Schedule your medical appointments with ease.</li>
          <img src={viewappt} style={{width:200 ,innerHeight:100}}/>
          <li><strong>View Appointments:</strong> Check your upcoming and past appointments.</li>
          <img src={MediHist} style={{width:200 ,innerHeight:100}}/>
          <li><strong>Medical History:</strong> Review your medical history and diagnoses.</li>
          <img src={profile} style={{width:200 ,innerHeight:100}}/>
          <li><strong>Profile:</strong> Update your personal information and preferences.</li>
          <img src={settings} style={{width:200 ,innerHeight:100}}/>
          <li><strong> Dynamic Settings:</strong> Customize your account settings and notification preferences.</li>
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
