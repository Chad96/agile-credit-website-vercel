import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/images/logo.jpeg'; // ✅ Update this path if needed

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="custom-navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-brand">
          <img src={logo} alt="Logo" className="navbar-logo" />
          <span className="navbar-brand-text">Agile Credit Solutions</span>
        </a>
        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span className="toggle-icon">&#9776;</span> {/* ← black menu icon */}
        </button>
        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
