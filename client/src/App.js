
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import DistributorLogin from './Pages/DistributorLogin';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <Router>
      <Routes>
        {/* for distributor  */}
         <Route path="/distributor/login" element={<DistributorLogin />} />

        {/* for user  */}
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
