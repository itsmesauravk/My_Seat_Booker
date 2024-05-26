import React from 'react';
import {Link} from 'react-router-dom';
import '../Css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to={'/'} className="brand-logo">
          <img  src='./images/busLogo.png' alt='bus logo' className='logo-img' />
          MySeat<span className='theme-color'>Booker</span>
        </Link>
        <ul className="nav-list-login">
          <li><Link to={"/login"}>Login</Link></li>
          <li>|</li>
          <li><Link to={"/register"}>Signup</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
