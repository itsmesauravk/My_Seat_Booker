import React from 'react';
import { Link } from 'react-router-dom'; 
import '../Css/Categories.css';

const Categories = () => {
  return (
    <nav className="categories-nav">
      <div className="container">
        <ul className="nav-list">
            <li><Link to="/categories">Categories</Link></li>
            <li><Link to="/reservation">Reservation</Link></li>
            <li><Link to="/mytickets">My Tickets</Link></li>
        </ul>
        <ul className="nav-list right">
            <li><Link to="/help">Help</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/offers">Offers</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Categories;
