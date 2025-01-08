// AboutUs.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    color: '#4A90E2',
    textAlign: 'center',
    marginBottom: '20px',
    transition: 'color 0.3s ease',
  };

  const headingHoverStyle = {
    color: '#357ABD',
  };

  const subHeadingStyle = {
    fontSize: '1.8rem',
    color: '#333',
    marginTop: '20px',
  };

  const paragraphStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    marginBottom: '15px',
  };

  const listStyle = { // Corrected this line
    listStyleType: 'disc',
    paddingLeft: '20px',
  };

  const buttonStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#4A90E2',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#357ABD',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle} onMouseOver={(e) => e.currentTarget.style.color = headingHoverStyle.color} onMouseOut={(e) => e.currentTarget.style.color = headingStyle.color}>
        About Us
      </h1>
      <p style={paragraphStyle}>We are a team of passionate individuals dedicated to providing the best learning experience.</p>
      <p style={paragraphStyle}>Our mission is to empower learners through providing books, quality education, and resources.</p>
      <h2 style={subHeadingStyle}>Our Values</h2>
      <ul style={listStyle}>
        <li style={paragraphStyle}>Integrity</li>
        <li style={paragraphStyle}>Innovation</li>
        <li style={paragraphStyle}>Excellence</li>
        <li style={paragraphStyle}>Collaboration</li>
      </ul>
      <a href="/contact" style={buttonStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}>
        Contact Us
      </a>
      <br />
      <Link to="/" style={{ ...buttonStyle, marginTop: '20px' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}>
        Go to Home
      </Link>
    </div>
  );
};

export default AboutUs;