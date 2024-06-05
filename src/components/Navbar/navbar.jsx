import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/default.png'; // Make sure to replace this with the correct path to your logo
import { FaShoppingBag } from 'react-icons/fa'; // Using Font Awesome for the shopping bag icon
import { Link } from 'react-router-dom'; // Import Link for navigation

const Navbar = ({ onContactClick }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Company Logo" className="navbar-logo" />
      <ul className="navbar-menu">
        <li className="navbar-item"><Link to="/">Home</Link></li>
        <li className="navbar-item"><Link to="/about">About Us</Link></li>
        <li className="navbar-item dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <span>Services</span>
          {dropdownVisible && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">School</li>
              <li className="dropdown-item">Kindergarten</li>
              <li className="dropdown-item">Social child project</li>
              <li className="dropdown-item">Social teenager projects</li>
            </ul>
          )}
        </li>
        <li className="navbar-item" onClick={onContactClick}>Contact</li>
      </ul>
      <ul className="navbar-end">
        <li className="navbar-item">
          <FaShoppingBag />
        </li>
        <li className="navbar-item"><Link to="/login">Login</Link></li>
        <li className="navbar-item signup-button"><Link to="/signup">Signup</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
