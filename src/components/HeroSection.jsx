import React from 'react';
import './HeroSection.css';

const HeroSection = () => (
  <section className="hero-section-with-img">
    <img src="/images/bg1.jpg" alt="Hero" className="hero-img" />
    <div className="hero-content">
      <h1 className="display-2 fw-bold text-light mb-4">
        Your Journey From Debt to Prosperity Starts Here
      </h1>
      <p className="lead fs-4 text-light mb-5">
        Helping South Africans restore their credit, remove debt review and build a better financial future guided by integrity, godliness and real results.
      </p>

      <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/27872553598"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-lg px-5 py-3"
        >
          Get Help Now
        </a>

        {/* Contact Form Scroll Button */}
        <a
          href="#contact"
          className="btn btn-outline-light btn-lg px-5 py-3"
        >
          Book Free Consultation
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
