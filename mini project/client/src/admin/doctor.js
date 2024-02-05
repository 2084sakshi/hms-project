import React, { useState, useEffect } from 'react';
import Header from './adminheader';

function DoctorList() {
    // Simulated data
    const [doctors, setDoctors] = useState([]);

    // Simulating fetching data from the backend
    useEffect(() => {
        // Replace this with an actual API call to fetch doctors from the backend
        const fetchDoctors = async () => {
            // Simulated data
            const simulatedDoctors = [
                { srno: 1, name: 'Dr. John Doe', email: 'john@example.com', phone: '1234567890', specialization: 'Cardiology', experience: '10 years', fees: '2000', address: '123 Main St, City', gender: 'Male', time: '9:00 AM - 5:00 PM' },
                { srno: 2, name: 'Dr. Jane Smith', email: 'jane@example.com', phone: '9876543210', specialization: 'Pediatrics', experience: '8 years', fees: '550', address: '456 Oak St, City', gender: 'Female', time: '10:00 AM - 6:00 PM' },
                // Add more simulated doctors as needed
                { srno: 3, name: 'Dr. David Johnson', email: 'david@example.com', phone: '5555555555', specialization: 'Orthopedics', experience: '15 years', fees: '1250', address: '789 Elm St, City', gender: 'Male', time: '8:00 AM - 4:00 PM' },
                { srno: 4, name: 'Dr. Sarah Williams', email: 'sarah@example.com', phone: '9999999999', specialization: 'Dermatology', experience: '12 years', fees: '1080', address: '321 Pine St, City', gender: 'Female', time: '9:30 AM - 5:30 PM' },
                { srno: 5, name: 'Dr. Michael Brown', email: 'michael@example.com', phone: '7777777777', specialization: 'Ophthalmology', experience: '9 years', fees: '1900', address: '567 Maple St, City', gender: 'Male', time: '10:30 AM - 6:30 PM' },
                { srno: 6, name: 'Dr. Emily Davis', email: 'emily@example.com', phone: '8888888888', specialization: 'Gynecology', experience: '7 years', fees: '570', address: '654 Birch St, City', gender: 'Female', time: '11:00 AM - 7:00 PM' }
            ];

           

            setDoctors(simulatedDoctors);
        };

        fetchDoctors();
    }, []);

    return (
        <>
         <header>
        <Header onLogout={() => {}} />
      </header>
        <div>
            <h1>Explore Our Expert Doctors</h1>
            <p>Meet our skilled medical professionals dedicated to providing exceptional healthcare services. Discover the expertise, compassion, and personalized care offered by our esteemed doctors.</p>
            <table>
                <thead>
                    <tr>
                        <th>Sr No</th>
                        <th>Doctor's Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Specialization</th>
                        <th>Experience</th>
                        <th>Consultation Fees</th>
                        <th>Location</th>
                        <th>Gender</th>
                        <th>Availability</th>
                    </tr>
                </thead>
                <tbody>
                    {doctors.map((doctor) => (
                        <tr key={doctor.srno}>
                            <td>{doctor.srno}</td>
                            <td>{doctor.name}</td>
                            <td>{doctor.email}</td>
                            <td>{doctor.phone}</td>
                            <td>{doctor.specialization}</td>
                            <td>{doctor.experience}</td>
                            <td>{doctor.fees}</td>
                            <td>{doctor.address}</td>
                            <td>{doctor.gender}</td>
                            <td>{doctor.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    );
}

export default DoctorList;
