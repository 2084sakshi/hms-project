// src/patient/ViewMedicalHistory.js

import React, { useState, useEffect } from 'react';

const ViewMedicalHistory = () => {
  // Mock medical history data (replace with actual API calls)
  const [medicalHistory, setMedicalHistory] = useState([
    { date: '2023-01-15', diagnosis: 'Common Cold', treatment: 'Prescription: Rest and fluids' },
    { date: '2023-04-02', diagnosis: 'Sprained Ankle', treatment: 'Prescription: Pain relievers, Rest, Ice, Compression, Elevation (RICE)' },
    // Add more medical history entries as needed
  ]);

  useEffect(() => {
    // Fetch medical history data from API and update state
    // Example: fetchMedicalHistoryData().then(data => setMedicalHistory(data));
  }, []);

  return (
    <div className="container">
      <h2>Medical History</h2>
      <p>Explore and review your comprehensive medical history below:</p>

      <div id="medical-history-list">
        {medicalHistory.map((entry, index) => (
          <div key={index} className="medical-entry">
            <strong>Date:</strong> {entry.date}<br />
            <strong>Diagnosis:</strong> {entry.diagnosis}<br />
            <strong>Treatment:</strong> {entry.treatment}<br />
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewMedicalHistory;
