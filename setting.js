// DoctorSettings.js
import React, { useState } from 'react';
import DoctorHeader from './doctorheader';

function DoctorSettings() {
  const [changePassword, setChangePassword] = useState(false);
  const [notificationPreferences, setNotificationPreferences] = useState({
    email: true,
    // Add more notification channels as needed
  });
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('light');

  const handleToggleChangePassword = () => {
    setChangePassword(!changePassword);
  };

  const handleToggleNotification = () => {
    setNotificationPreferences((prevPreferences) => ({
      ...prevPreferences,
      email: !prevPreferences.email,
    }));
  };

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  const saveChanges = () => {
    // Implement logic to save changes to the backend
    console.log('Changes saved:', { changePassword, notificationPreferences});
  };

  return (
    <div>
      <DoctorHeader />
        <h2>Account Settings</h2>
       
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
