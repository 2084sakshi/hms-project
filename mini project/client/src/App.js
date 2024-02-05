import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';

import AdminDashboard from './admin/adminboard';
import UserList from './admin/user';
import DoctorList from './admin/doctor';
import Appointments from './admin/appointment';
import ApproveDoctors from './admin/approve-doctor';



import { Button} from 'antd';
import { Toaster } from 'react-hot-toast';


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
              <Route path="/admin/appointments" element={< Appointments/>} />
              <Route path="/admin/approve-doctors" element={<ApproveDoctors />} />
              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
          
    </BrowserRouter>
  );
}
export default App;
        

