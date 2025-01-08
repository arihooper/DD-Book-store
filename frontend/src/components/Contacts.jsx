// Contacts.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Contacts = () => {
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
        Contact Us
      </h1>
      <p style={paragraphStyle}>If you have any questions, feel free to reach out to us!</p>
      <div>
        <h2 style={subHeadingStyle}>Our Address</h2>
        <p style={paragraphStyle}>DD, Oromiya, Ethiopia</p>
      </div>
      <div>
        <h2 style={subHeadingStyle}>Email Us</h2>
        <p style={paragraphStyle}>support@gmail.com</p>
      </div>
      <div>
        <h2 style={subHeadingStyle}>Call Us</h2>
        <p style={paragraphStyle}>(123) 456-7890</p>
      </div>
      <a href="mailto:support@gmail.com" style={buttonStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}>
        Email Us
      </a>
      <br />
      <Link to="/" style={{ ...buttonStyle, marginTop: '20px' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}>
        Go to Home
      </Link>
    </div>
  );
};

export default Contacts;