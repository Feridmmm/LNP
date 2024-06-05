import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import logo from '../../assets/default.png'; // Make sure to replace this with the correct path to your logo
import { FaArrowLeft } from 'react-icons/fa';

const Login = () => {
  return (
    <div className="login-container">
      <div className="back-arrow">
        <Link to="/"><FaArrowLeft /></Link>
      </div>
      <div className="login-box">
        <h2>Welcome</h2>
        <img src={logo} alt="Logo" className="login-logo" />
        <form>
          <div className="input-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" required />
          </div>
          <div className="input-group">
            <button type="submit" className="login-button">Login</button>
          </div>
        </form>
        <div className="signup-link">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
      <div className="login-footer">
        <p>&copy; 2024 Education Chemnitz. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
