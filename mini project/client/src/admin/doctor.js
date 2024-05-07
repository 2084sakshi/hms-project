import React, { useState, useEffect } from 'react';
import Header from './adminheader';
import axios from 'axios';
import './../css/admin.css';

function DoctorList() {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/admin/doctors');
                const data = response.data;
                console.log(data);
                setDoctors(data);
            } catch (error) {
                console.error('Error fetching doctors:', error.message);
            }
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
                        {doctors.map((doctor, index) => (

                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{doctor.name}</td>
                                <td>{doctor.userId.email}</td>
                                <td>{doctor.userId.mobileNo}</td>
                                <td>{doctor.specialization}</td>
                                <td>{doctor.experience}</td>
                                <td>${doctor.fees}</td>
                                <td>{doctor.address}</td>
                                <td>{doctor.gender}</td>
                                <td>{doctor.time.join(', ')}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default DoctorList;
