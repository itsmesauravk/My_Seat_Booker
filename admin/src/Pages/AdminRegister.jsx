
import React, { useState } from 'react'; // Import useState for form handling
import { Link } from 'react-router-dom';
import '../Css/AdminRegister.css'; 

const AdminRegister = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log(`Username: ${username}, Email: ${email}, Contact: ${contact}, Password: ${password}`);
    // Implement your registration logic here (e.g., API call, validation)
    setUsername('');
    setEmail('');
    setContact('');
    setPassword('');
  };

  return (
    <div className="admin-register">
      <h1>Admin Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
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
          <label htmlFor="contact">Contact</label>
          <input
            type="tel" // Input type for phone number
            id="contact"
            name="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
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
        <button type="submit">Register</button>
      </form>
      <p className="already-registered">
        Already have an account? <Link to={'/admin/login'}>Login</Link>
      </p>
    </div>
  );
};

export default AdminRegister;
