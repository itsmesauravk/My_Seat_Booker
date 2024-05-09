import React, { useState } from 'react';
import '../Css/RegisterPage.css'; 
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Implement register logic here
    console.log('Registering with:', {
      fullName,
      address,
      email,
      contact,
      password,
    });

    setFullName('');
    setAddress('');
    setEmail('');
    setContact('');
    setPassword('');
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container"> 
      <div className="login-image"> 
        <img src="./images/bus.jpg" alt="Bus" /> 
      </div>
      <div className="login-content">
        <h1>Register</h1>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Contact Number</label>
            <input
              type="tel" // Use tel for phone number input
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p className='show-pass' onClick={toggleShowPassword} >{showPassword?"Hide" : "Show"}</p>

          </div>
          <div className="form-group">
            <button type="submit">Register</button>
            <p>Already have an account? <Link to="/login">Login</Link></p>
          </div>
        </form>
        <div className="continue-with">
          <span>Continue with:</span>
          <button className="google-btn">
            <img style={{width:"30px", height:"30px"}} src="./images/google.png" alt="Google" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
