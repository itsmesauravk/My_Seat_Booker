import React, { useState } from 'react';
import '../Css/LoginPage.css';
import { Link } from 'react-router-dom';


const  busImage = './images/bus.jpg'; 


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Handle login logic here
    console.log('Logging in with:', email, password);
  };

  return (
    <div className="login-container">
      <div className="login-image" >
        <img src={busImage} alt="Bus" />
      </div>
      <div className="login-content">
        <h1>Login</h1>
        <form>
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
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <Link href="#">Forgot Password?</Link>
          </div>
          <div className="form-group">
            <button type="button" onClick={handleLogin}>
              Login
            </button>
            <p>Doesn't have any account ? <Link to={'/register'}>Create one</Link></p>
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

export default LoginPage;
