import React from 'react';
import { Link } from 'react-router-dom';
import './body.css';
import backgroundImage from '../../assets/service.png'; // Ensure the path to the image is correct

const Body = () => {
  return (
    <div className="body" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="text-content">
        <h1>Welcome to Our Interactive Map Application</h1>
        <p>
          Children, adolescents, and young adults require access to the education and care system. This is essential for their development and also legally mandated.
        </p>
        <p>
          Our interactive map application for Chemnitz provides comprehensive data on various educational and care facilities. Explore our map to find detailed information about each facility, including their locations, contact details, and the services they offer.
        </p>
        <p>
          We aim to make it easier for families to make informed decisions about education and care for their children. Access to quality education and care is crucial for the growth and development of young individuals, and our tool is designed to help you find the best options available in Chemnitz.
        </p>
        <Link to="/services" className="services-button">Our Services</Link>
      </div>
    </div>
  );
};

export default Body;
