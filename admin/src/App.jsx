import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import AdminDashboard from './Pages/AdminDashboard'
import AdminLogin from './Pages/AdminLogin'
import AdminRegister from './Pages/AdminRegister'
import AdminAddDistributor from './Pages/AdminAddDistributor'

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path='/admin/login' element={<AdminLogin/>} />
        <Route path='/admin/register' element={<AdminRegister/>} />
        <Route path='/admin/add-distributor' element={<AdminAddDistributor/>} />
        <Route path='*'>404 Not Found</Route>
      </Routes>
    </Router>
  )
}

export default App
