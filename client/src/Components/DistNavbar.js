import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/DistNavbar.css'; // Assuming the CSS file is in the same directory

const DistNavbar = () => {

  return (
    <nav className="dist-navbar">
      <Link to="/distributor/profile" className="logo">  {/* Link to homepage (optional) */}
        <h1>#mySeatBooker</h1>
      </Link>
      <ul>  {/* Wrap links in a list for better semantic structure */}
        <li><Link to="/distributor/profile">Profile</Link></li>
        <li>|</li>
        <li><Link to="/distributor/vehicles">See Vehicle</Link></li>
        <li>|</li>
        <li><Link to="/distributor/update-date-time">Update Date/Time</Link></li>
        <li>|</li>
        <li><Link to="/distributor/add-vehicle">Add Vehicle</Link></li>
        <li>|</li>
        <li><Link to="/distributor/login">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default DistNavbar;
