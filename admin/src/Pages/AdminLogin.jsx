import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../Css/AdminLogin.css'; 
import { toast} from 'react-toastify';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  // const apiUrl = 'http://localhost:4000';
  const apiUrl = process.env.REACT_APP_API_URL;


  const successNotify = () => {
    toast.success('Login Successfully !!', {
      position: 'top-right',
      autoClose: 2000,
    });
  }

  const errorNotify = () => {
    toast.error('Login Failed!!', {
      position: 'top-right',
      autoClose: 2000,
    });
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.success) {
        successNotify();
        navigate('/admin/dashboard');
        setEmail('');
        setPassword('');
      } else {
        errorNotify();
      }

    } catch (error) {
      console.error('Error:', error);
      errorNotify();

    }
    
  };

  return (
    <div className="admin-login">
      <h1>Admin Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit">Login</button>
        <p className="create-account">
          Don't have an account? <Link to={'/admin/register'}>Create New</Link>
        </p>
      </form>
    </div>
  );
};

export default AdminLogin;
