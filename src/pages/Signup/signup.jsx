import React from 'react';
import { Link } from 'react-router-dom';
import './signup.css';
import logo from '../../assets/default.png'; // Make sure to replace this with the correct path to your logo
import { FaArrowLeft } from 'react-icons/fa';

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="back-arrow">
        <Link to="/"><FaArrowLeft /></Link>
      </div>
      <div className="signup-box">
        <h2>Sign Up</h2>
        <img src={logo} alt="Logo" className="signup-logo" />
        <form>
          <div className="input-group">
            <input type="text" placeholder="Username" required />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" required />
          </div>
          <div className="input-group">
            <button type="submit" className="signup-button">Sign Up</button>
          </div>
        </form>
        <div className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
      <div className="signup-footer">
        <p>&copy; 2024 Education Chemnitz. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
