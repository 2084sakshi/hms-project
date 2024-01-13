import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import { Button} from 'antd';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <BrowserRouter>
    <Toaster position="top-center" reverseOrder={false} />
      <Routes>     
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;