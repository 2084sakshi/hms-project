// src/patient/Settings.js

import React, { useState } from 'react';

const Settings = () => {
  // State to store form input values
  const [formData, setFormData] = useState({
    notifications: false,
    language: 'en',
    // Add more fields as needed
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform logic to submit settings data (e.g., send to API)
    console.log('Settings updated:', formData);
  };

  return (
    <div className="container">
      <h2>Settings</h2>
      <p>Customize your healthcare experience with personalized settings below:</p>

      <form onSubmit={handleFormSubmit}>
        <label>
          Receive Notifications:
          <input type="checkbox" name="notifications" checked={formData.notifications} onChange={handleInputChange} />
        </label>

        <label>
          Preferred Language:
          <select name="language" value={formData.language} onChange={handleInputChange}>
            <option value="en">English</option>
            <option value="es">Español</option>
            {/* Add more language options as needed */}
          </select>
        </label>

        {/* Add more form fields as needed for additional settings */}

        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
}

export default Settings;
