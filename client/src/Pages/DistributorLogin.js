import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Css/DistributorLogin.css';

const DistributorLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log(`Username: ${username}, Password: ${password}`);
    // Implement your login logic here (e.g., API call, validation)
    setUsername('');
    setPassword('');
  };

  return (
    <div className="distributor-login">
      <h1>Distributor Login</h1>
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
        <button type="submit">Login</button>

        <Link to={'#'}>forgot password?</Link>
      </form>
    </div>
  );
};

export default DistributorLogin;
