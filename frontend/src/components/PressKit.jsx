// src/components/PressKit.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const PressKit = () => {
  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9', // Light background color
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    color: '#4A90E2',
    textAlign: 'center',
    marginBottom: '20px',
  };

  const sectionHeadingStyle = {
    fontSize: '1.8rem',
    color: '#333',
    marginTop: '20px',
  };

  const paragraphStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    marginBottom: '15px',
    color: '#555', // Darker text color for better readability
  };

  const listStyle = {
    listStyleType: 'disc',
    paddingLeft: '20px',
  };

  const linkStyle = {
    display: 'inline-block',
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#4A90E2',
    color: 'white',
    borderRadius: '5px',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
  };

  const linkHoverStyle = {
    backgroundColor: '#357ABD',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>The Importance of Reading in Our Lives</h1>
      <section>
        <h2 style={sectionHeadingStyle}>Unleashing the Power of Reading: Transforming Lives, One Page at a Time</h2>
        <p style={paragraphStyle}>
          Naqamte, Ethiopia - January 8, 2025 – In a world saturated with information and digital distractions, the timeless practice of reading remains a fundamental cornerstone of personal growth and societal advancement. Reading, 
          a simple yet profound activity, plays a critical role in shaping our lives, broadening our horizons, and fostering a more enlightened and empathetic society.
        </p>
      </section>
      <section>
        <h2 style={sectionHeadingStyle}>Why Reading Matters</h2>
        <ul style={listStyle}>
          <li style={paragraphStyle}>Empowers Individuals: Reading equips individuals with knowledge, helping them make informed decisions, solve problems, and lead fulfilling lives. It fosters critical thinking and enhances cognitive skills, 
            enabling readers to better understand and navigate the complexities of the world.</li>
          <li style={paragraphStyle}>Fosters Empathy and Understanding: Through stories and narratives, readers are transported to different cultures, eras, and perspectives. This exposure cultivates empathy, tolerance, and a deeper appreciation
             for diversity, breaking down barriers and building stronger, more connected communities.</li>
          <li style={paragraphStyle}>Enhances Communication Skills: Regular reading improves vocabulary, grammar, and writing skills, 
            making individuals more articulate and confident communicators. This proficiency in language is essential in both personal and professional settings, promoting effective and impactful interactions.</li>
        </ul>
      </section>
      <section>
        <h2 style={sectionHeadingStyle}>Get Involved: Celebrating the Joy of Reading</h2>
        <h2 style={sectionHeadingStyle}>Media Contacts</h2>
        <ul style={listStyle}>
          <li style={paragraphStyle}>Host a Book Club: Bring together friends, family, or colleagues to discuss books and share insights.</li>
          <li style={paragraphStyle}>Volunteer as a Reading Tutor: Help others improve their reading skills, fostering a love for literature.</li>
          <li style={paragraphStyle}>Donate Books: Support local libraries and schools by donating books and resources.</li>
          <li style={paragraphStyle}>Sign up to this platform and you get good and interesting books.</li>
        </ul>
        <p style={paragraphStyle}>
          For media inquiries, please contact:
        </p>
        <p style={paragraphStyle}>
          AA<br />
          PR Manager<br />
          Email: Ddindusties@gmail.com<br />
          Phone: (123) 456-7890
        </p>
      </section>
      <Link to="/" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4A90E2'}>
        Back to Home
      </Link>
    </div>
  );
};

export default PressKit;