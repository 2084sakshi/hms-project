// MedicalHistory.js
import React from 'react';
import PatientHeader from './patientheader';
import diagnosis from './../img/diagnosis.svg';
import treatement from './../img/treatement.svg';
import medications from './../img/medications.svg';
function MedicalHistory() {
  // Mock data for demonstration purposes
  const medicalHistoryData = {
    diagnoses: [
      { name: 'Flu', date: '2023-03-15' },
      { name: 'Hypertension', date: '2022-08-20' },
    ],
    treatments: [
      { name: 'Antibiotics', date: '2023-03-20' },
      { name: 'Blood Pressure Medication', date: '2022-09-01' },
    ],
    medications: [
      { name: 'Aspirin', dosage: '75mg', frequency: 'Once a day' },
      { name: 'Ibuprofen', dosage: '200mg', frequency: 'As needed' },
    ],
  };

  return (
    <div>
      <PatientHeader />
      <div className='patient-main'>
    
        <h2>Your Medical History</h2>

        <section className='medical-hist'>
        <img src={diagnosis} style={{width:200 ,innerHeight:100}}/>
          <h3>Diagnoses</h3>
          <ul>
            {medicalHistoryData.diagnoses.map((diagnosis, index) => (
              <li key={index}>
                <strong>{diagnosis.name}</strong> diagnosed on {diagnosis.date}
              </li>
            ))}
          </ul>
        </section>

        <section className='medical-hist'>
        <img src={treatement} style={{width:200 ,innerHeight:100}}/>
          <h3>Treatments</h3>
          <ul>
            {medicalHistoryData.treatments.map((treatment, index) => (
              <li key={index}>
                <strong>{treatment.name}</strong> started on {treatment.date}
              </li>
            ))}
          </ul>
        </section>
       

        <section className='medical-hist' >
        <img src={medications} style={{width:200 ,innerHeight:100}}/>
          <h3>Medications</h3>
          <ul>
            {medicalHistoryData.medications.map((medication, index) => (
              <li key={index}>
                <strong>{medication.name}</strong> - Dosage: {medication.dosage}, Frequency: {medication.frequency}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default MedicalHistory;
