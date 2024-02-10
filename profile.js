import React, { useState } from 'react';
import DoctorHeader from './doctorheader';
import './doctor.css'; // Import the CSS file

function DoctorProfile() {
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: 'Dr. John Doe',
    gender: 'Male',
    dateOfBirth: '1980-01-01',
    contactNumber: '123-456-7890',
    email: 'john.doe@example.com',
    specialty: 'General Medicine',
    clinicAddress: '123 Medical Street, Cityville',
    availability: 'Monday to Friday, 9:00 AM to 5:00 PM',
    bio: 'Experienced doctor specializing in general medicine. Dedicated to providing quality healthcare.',
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
    <div className="profile-container">
      <DoctorHeader />
      <div>
        <h2>Your Profile</h2>

        {editMode ? (
          <div>
            {/* Include fields for editing profile information */}
            <div>
              <label>Full Name: <input type="text" value={profileData.fullName} onChange={(e) => handleInputChange('fullName', e.target.value)} /></label>
            </div>
            {/* Other input fields */}
          </div>
        ) : (
          <div>
            {/* Display profile information in non-edit mode */}
            <p>
              <strong>Full Name:</strong> {profileData.fullName}
            </p>
            {/* Other profile information */}
          </div>
        )}

        <button className="edit-profile-btn" onClick={editMode ? saveChanges : handleToggleEditMode}>
          {editMode ? 'Save Changes' : 'Edit Profile'}
        </button>
      </div>
    </div>
  );
}

export default DoctorProfile;
