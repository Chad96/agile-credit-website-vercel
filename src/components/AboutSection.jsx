import React from 'react';
import { CheckCircle, Shield, Users, TrendingUp } from 'lucide-react';
import './AboutSection.css'; // link to custom CSS file
import aboutImage from '../assets/images/logo.jpeg'; // adjust path as needed

const values = [
  { title: "Trust and Integrity", icon: <Shield size={24} className="icon" /> },
  { title: "Godliness", icon: <CheckCircle size={24} className="icon" /> },
  { title: "Professionalism", icon: <Users size={24} className="icon" /> },
  { title: "Financial Growth", icon: <TrendingUp size={24} className="icon" /> }
];

const AboutSection = () => (
  <section id="about" className="about-section">
    <div className="about-container">
      <div className="about-image">
        <img src={aboutImage} alt="About Agile Credit" />
      </div>
      <div className="about-content">
        <h2>About Us</h2>

        <br></br>
        <br></br>
        <p>
          At Agile Credit Solutions, we believe everyone deserves a second chance.
        </p>
        <h3>Our Values</h3>
        <ul className="value-list">
          {values.map((value, index) => (
            <li key={index}>
              {value.icon}
              <span>{value.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default AboutSection;
