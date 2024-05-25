import React from 'react';
import "../Css/Homepage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const AboutUsUser = () => {
  return (
    <div>
      <footer className='footer'>
        <div className='footer-container'>
          <div className='footer-section about'>
            <h2>About Us</h2>
            <p>MySeatBooker is your go-to platform for booking bus tickets across India. We provide a seamless and convenient way to travel with a wide range of options from various bus operators. Our mission is to make bus travel easy and accessible for everyone.</p>
          </div>
          <div className='footer-section links'>
            <h2>Quick Links</h2>
            <ul>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>About Us</a></li>
              <li><a href='#'>Bus Routes</a></li>
              <li><a href='#'>Contact</a></li>
              <li><a href='#'>FAQ</a></li>
            </ul>
          </div>
          <div className='footer-section contact'>
            <h2>Contact Us</h2>
            <ul>
              <li><FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Travel Lane, City, State</li>
              <li><FontAwesomeIcon icon={faPhone} /> +91 12345 67890</li>
              <li><FontAwesomeIcon icon={faEnvelope} /> support@myseatbooker.com</li>
            </ul>
          </div>
          <div className='footer-section social'>
            <h2>Follow Us</h2>
            <div className='social-links'>
              <a href='#'><FontAwesomeIcon icon={faFacebookF} /> </a>
              <a href='#'><FontAwesomeIcon icon={faTwitter} /> </a>
              <a href='#'><FontAwesomeIcon icon={faInstagram} /> </a>
              <a href='#'><FontAwesomeIcon icon={faLinkedinIn} /> </a>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <p>&copy; 2024 MySeatBooker. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default AboutUsUser;
