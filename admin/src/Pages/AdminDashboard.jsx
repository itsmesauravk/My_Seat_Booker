import React from 'react';
import AdminNavbar from '../Components/AdminNavbar';
import '../Css/AdminDashboard.css';

const AdminDashboard = () => {
  // Replace with your logic to fetch data
  const totalUsers = 100;
  const totalDistributors = 50;
  const totalBuses = 20;

  return (
    <>
      <AdminNavbar />
      <div className="admin-dashboard">
        <h1>Admin Dashboard</h1>
        <div className="summary-cards">
          <div className="summary-card">
            <h3>Total Users</h3>
            <p>{totalUsers}</p>
          </div>
          <div className="summary-card">
            <h3>Total Distributors</h3>
            <p>{totalDistributors}</p>
          </div>
          <div className="summary-card">
            <h3>Total Buses</h3>
            <p>{totalBuses}</p>
          </div>
          {/* Add more summary cards as needed */}
        </div>
        {/* Other dashboard content goes here */}
      </div>
    </>
  );
};

export default AdminDashboard;
