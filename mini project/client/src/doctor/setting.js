import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast'; 
import { toast } from 'react-hot-toast';// Import Toaster from react-hot-toast
import DoctorHeader from './doctorheader';

function DoctorSettings() {
  const [changePassword, setChangePassword] = useState(false);
  const [notificationPreferences, setNotificationPreferences] = useState({
    email: true,
    // Add more notification channels as needed
  });
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('light');
  
const notify = (message) => {
  toast.success(message); // Display a success toast message
};

  const handleToggleChangePassword = () => {
    setChangePassword(!changePassword);
    
  };

  const handleToggleNotification = () => {
    setNotificationPreferences((prevPreferences) => ({
     /* ...prevPreferences,*/
      email: !prevPreferences.email,
    }));
    
  };


  const saveChanges = () => {
    // Implement logic to save changes to the backend
    console.log('Changes saved:', { changePassword, notificationPreferences });
    notify('Changes saved successfully');
  };

  return (
    <div>
      <DoctorHeader />
      <h2>Account Settings</h2>
      {/* Add Toaster component */}
      <Toaster position="top-right" reverseOrder={false} />

      <section>
        <h3>Change Password</h3>
        <label>
          <input type="checkbox" checked={changePassword} onChange={handleToggleChangePassword} />
          Enable password change
        </label>
        {changePassword && (
          <div>
            {/* Include fields for entering current password and new password */}
            <label>Current Password: <input type="password" /></label>
            <label>New Password: <input type="password" /></label>
          </div>
        )}
      </section>

      <section>
        <h3>Notification Preferences</h3>
        <label>
          <input type="checkbox" checked={notificationPreferences.email} onChange={handleToggleNotification} />
          Receive email notifications
        </label>
      </section>

      <button onClick={saveChanges}>Save Changes</button>
    </div>
  );
}

export default DoctorSettings;
