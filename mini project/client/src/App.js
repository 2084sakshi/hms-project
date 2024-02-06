import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';

import AdminDashboard from './admin/adminboard';
import UserList from './admin/user';
import DoctorList from './admin/doctor';
import Appointments from './admin/appointment';
import ApproveDoctors from './admin/approve-doctor';

import PatientDashboard from './patient/patientboard';  // Import your patient-specific components
import AppointmentBooking from './patient/scheduleappt';
import Profile from './patient/profile';
import ViewAppointment from './patient/patientappt';
import MedicalHistory from './patient/medical-history';
import Settings from './patient/settings';

import DoctorDashboard from './doctor/doctorboard';  // Import your doctor-specific components
import DoctorApproveAppointment from './doctor/approveappt';
import DoctorScheduledAppointments from './doctor/viewappointment';
import DoctorProfile from './doctor/profile';
import DoctorSettings from './doctor/setting';




function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />

        <Route path="/admin/users" element={<UserList />} />
        <Route path="/admin/doctors" element={<DoctorList />} />
        <Route path="/admin/appointments" element={<Appointments />} />
        <Route path="/admin/approve-doctors" element={<ApproveDoctors />} />
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Add routes for patient-specific components */}
        <Route path="/patient" element={<PatientDashboard />} />
        <Route path="/patient/appointment-booking" element={<AppointmentBooking />} />
        <Route path="/patient/profile" element={<Profile />} />
        <Route path="/patient/view-appointments" element={<ViewAppointment />} />
        <Route path="/patient/medical-history" element={<MedicalHistory />} />
        <Route path="/patient/settings" element={<Settings />} />

        <Route path="/doctor" element={<DoctorDashboard />} />
        <Route path="/doctor/approve-appointments" element={<DoctorApproveAppointment />} />
        <Route path="/doctor/appointments" element={<DoctorScheduledAppointments />} />
        <Route path="/doctor/profile" element={<DoctorProfile />} />
        <Route path="/doctor/settings" element={<DoctorSettings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
