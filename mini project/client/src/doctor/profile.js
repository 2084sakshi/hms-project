// DoctorProfile.js
import React, { useState } from 'react';
import DoctorHeader from './doctorheader';


function DoctorProfile() {
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: 'Dr. Ananya Dubey',
    gender: 'Female',
    age: '25 years', // Assuming this is derived from age
    contactNumber: '9876543219',
    email: 'anaya@gmail.com',
    specialty: 'Pediatrics',
    clinicAddress: '456 Oak St, City',
    availability: '10:00 AM - 6:00 PM',
    bio: 'Experienced pediatrician with 8 years of practice. Committed to providing compassionate care to children.',
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
      <DoctorHeader />
      <div className = "doctor-main">
        <h2>Your Profile</h2>

        {editMode ? (
          <div className='card-1'>
            {/* Include fields for editing profile information */}
            <div>
              <label>Full Name: <input type="text" value={profileData.fullName} onChange={(e) => handleInputChange('fullName', e.target.value)} /></label>
            </div>
            <div>
              <label>Gender: <input type="text" value={profileData.gender} onChange={(e) => handleInputChange('gender', e.target.value)} /></label>
            </div>
            <div>
              <label>Age: <input type="text" value={profileData.Age} onChange={(e) => handleInputChange('age', e.target.value)} /></label>
            </div>
            <div>
              <label>Contact Number: <input type="tel" value={profileData.contactNumber} onChange={(e) => handleInputChange('contactNumber', e.target.value)} /></label>
            </div>
            <div>
              <label>Email: <input type="email" value={profileData.email} onChange={(e) => handleInputChange('email', e.target.value)} /></label>
            </div>
            <div>
              <label>Specialty: <input type="text" value={profileData.specialty} onChange={(e) => handleInputChange('specialty', e.target.value)} /></label>
            </div>
            <div>
              <label>Clinic Address: <textarea value={profileData.clinicAddress} onChange={(e) => handleInputChange('clinicAddress', e.target.value)} /></label>
            </div>
            <div>
              <label>Availability: <input type="text" value={profileData.availability} onChange={(e) => handleInputChange('availability', e.target.value)} /></label>
            </div>
            <div>
              <label>Bio: <textarea value={profileData.bio} onChange={(e) => handleInputChange('bio', e.target.value)} /></label>
            </div>
          </div>
        ) : (
          <div>
            {/* Display profile information in non-edit mode */}
            <p>
              <strong>Full Name:</strong> {profileData.fullName}
            </p>
            <p>
              <strong>Gender:</strong> {profileData.gender}
            </p>
            <p>
              <strong>Age:</strong> {profileData.age}
            </p>
            <p>
              <strong>Contact Number:</strong> {profileData.contactNumber}
            </p>
            <p>
              <strong>Email:</strong> {profileData.email}
            </p>
            <p>
              <strong>Specialty:</strong> {profileData.specialty}
            </p>
            <p>
              <strong>Clinic Address:</strong> {profileData.clinicAddress}
            </p>
            <p>
              <strong>Availability:</strong> {profileData.availability}
            </p>
            <p>
              <strong>Bio:</strong> {profileData.bio}
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

export default DoctorProfile;
