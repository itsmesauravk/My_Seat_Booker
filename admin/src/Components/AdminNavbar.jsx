import React from 'react';
import { Link } from 'react-router-dom'; 
import '../Css/AdminNavbar.css';

const AdminNavbar = () => {
  return (
    <nav className="admin-navbar">
      <div className="navbar-container">
        <Link to="/admin/dashboard" className="navbar-logo">
          <h3 className='my-logo'>MySeatBooker</h3>
        
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/admin/dashboard" className="nav-links">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/add-distributor" className="nav-links">
              Add Distributor
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/users" className="nav-links">
              See Users
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/distributors" className="nav-links">
              See Distributors
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/buses" className="nav-links">
              See Buses
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link to="/admin/settings" className="nav-links dropdown-toggle">
              Settings
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/admin/settings/profile" className="dropdown-item">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/admin/settings/account" className="dropdown-item">
                  Account
                </Link>
              </li>
              <li>
                <Link to="/admin/settings/preferences" className="dropdown-item">
                  Preferences
                </Link>
              </li>
              <li>
                <Link to="/admin/login" className="dropdown-item">
                  Logout
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AdminNavbar;
