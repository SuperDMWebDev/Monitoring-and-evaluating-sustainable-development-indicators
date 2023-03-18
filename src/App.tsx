import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import './all.scss';
import { Home } from './pages/Home';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { defaultToastConfig } from './utils/config';
const App = () => {
  return (
    <div>
      <ToastContainer {...defaultToastConfig} />
      <BrowserRouter>
        <Routes>
          {/* <Route path="/login" element={<SignIn />} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
