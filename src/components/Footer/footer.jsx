import React, { forwardRef } from 'react';
import './footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../../assets/default.png';

const Footer = forwardRef((props, ref) => {
  return (
    <footer className="footer" ref={ref}>
      <div className="footer-content">
        <div className="contact-info">
          <FaPhoneAlt className="icon" />
          <p className="contact-text">+49 12 3456 7890</p>
          <span className="contact-subtext">Customer Service</span>
          <FaMapMarkerAlt className="icon" />
          <p className="contact-text">Chemnitz, Reichenhainer Str.37, 34th floor</p>
        </div>
        <div className="contact-form">
          <h2>Get In Touch</h2>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email Address" required />
            </div>
            <textarea placeholder="Leave your message..." required></textarea>
            <button type="submit">Send It Now</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-logo">
          <img src={logo} alt="Company Logo" />
        </div>
        <div className="footer-social">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedinIn />
          <FaYoutube />
        </div>
        <p>&copy; 2024 Education Chemnitz. All rights reserved.</p>
      </div>
    </footer>
  );
});

export default Footer;
