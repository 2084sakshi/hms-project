// Profile.js
import React, { useState } from 'react';
import PatientHeader from './patientheader';
import './../css/patient.css';

function Profile() {
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    gender: 'Male',
    dateOfBirth: '1990-01-01',
    contactNumber: '123-456-7890',
    email: 'john.doe@example.com',
    address: '123 Main Street, Cityville',
  });

  const handleToggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleInputChange = (field, value) => {
    setProfileData((prevProfileData) => ({
      ...prevProfileData,
      [field]: value,
    }));
  };

  const saveChanges = () => {
    // Implement logic to save changes to the backend
    console.log('Changes saved:', profileData);
    setEditMode(false); 
  };

  return (
    <div>
      <PatientHeader />
      <div>
        <h2>Your Profile</h2>

        {editMode ? (
          <div>
            {/* Include fields for editing profile information */}
            <div>
              <label>First Name: <input type="text" value={profileData.firstName} onChange={(e) => handleInputChange('firstName', e.target.value)} /></label>
            </div>
            <div>
              <label>Last Name: <input type="text" value={profileData.lastName} onChange={(e) => handleInputChange('lastName', e.target.value)} /></label>
            </div>
            <div>
              <label>Gender: <input type="text" value={profileData.gender} onChange={(e) => handleInputChange('gender', e.target.value)} /></label>
            </div>
            <div>
              <label>Date of Birth: <input type="date" value={profileData.dateOfBirth} onChange={(e) => handleInputChange('dateOfBirth', e.target.value)} /></label>
            </div>
            <div>
              <label>Contact Number: <input type="tel" value={profileData.contactNumber} onChange={(e) => handleInputChange('contactNumber', e.target.value)} /></label>
            </div>
            <div>
              <label>Email: <input type="email" value={profileData.email} onChange={(e) => handleInputChange('email', e.target.value)} /></label>
            </div>
            <div>
              <label>Address: <textarea value={profileData.address} onChange={(e) => handleInputChange('address', e.target.value)} /></label>
            </div>
          </div>
        ) : (
          <div>
            {/* Display profile information in non-edit mode */}
            <p>
              <strong>First Name:</strong> {profileData.firstName}
            </p>
            <p>
              <strong>Last Name:</strong> {profileData.lastName}
            </p>
            <p>
              <strong>Gender:</strong> {profileData.gender}
            </p>
            <p>
              <strong>Date of Birth:</strong> {profileData.dateOfBirth}
            </p>
            <p>
              <strong>Contact Number:</strong> {profileData.contactNumber}
            </p>
            <p>
              <strong>Email:</strong> {profileData.email}
            </p>
            <p>
              <strong>Address:</strong> {profileData.address}
            </p>
          </div>
        )}

        <button onClick={editMode ? saveChanges : handleToggleEditMode}>
          {editMode ? 'Save Changes' : 'Edit Profile'}
        </button>
      </div>
    </div>
  );
}

export default Profile;
