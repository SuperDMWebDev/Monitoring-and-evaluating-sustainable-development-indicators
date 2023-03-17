import * as React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
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
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
