
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import DistributorLogin from './Pages/DistributorLogin';
import Homepage from './Pages/Homepage';
import DistHomepage from './Pages/DistHomepage';
import DistVehicle from './Pages/DistVehicle';
import DistAddVehicle from './Pages/DistAddVehicle';
import DistUpdateDateTime from './Pages/DistUpdateDateTime';
import ShowSearchBuses from './Pages/ShowSearchBuses';
import SelectSeat from './Pages/SelectSeat';

function App() {
  return (
    <Router>
      <Routes>
        {/* for distributor  */}
         <Route path="/distributor/login" element={<DistributorLogin />} />
         <Route path="/distributor/profile" element={<DistHomepage />} />
         <Route path="/distributor/vehicles" element={<DistVehicle/>} />
         <Route path="/distributor/add-vehicle" element={<DistAddVehicle />} />
         <Route path="/distributor/update-date-time" element={<DistUpdateDateTime />} />


        {/* for user  */}
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/buses-results' element={<ShowSearchBuses />} />
        <Route path='/select-seat' element={<SelectSeat />} />
      </Routes>
    </Router>
  );
}

export default App;
