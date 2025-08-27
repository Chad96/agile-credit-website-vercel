import React, { useEffect } from 'react';

// Component Imports
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const AgileCreditSolutions = () => {
  useEffect(() => {
    // Add Bootstrap
    const link = document.createElement('link');
    link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
    link.rel = 'stylesheet';
    link.integrity = 'sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js';
    script.integrity = 'sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz';
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);

    // Add Custom Styles
    const style = document.createElement('style');
    style.textContent = `
      :root {
        --bs-primary: #0d6efd;
        --bs-primary-rgb: 13, 110, 253;
      }

      body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
      }

      .hero-section {
        background: linear-gradient(135deg, #f8f9ff 0%, #e3f2fd 100%);
        padding: 100px 0;
      }

      .service-card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        border: none;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      }

      .service-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0,0,0,0.15);
      }

      .testimonial-card {
        background: #f8f9ff;
        border: none;
        border-left: 4px solid var(--bs-primary);
      }

      .avatar {
        width: 50px;
        height: 50px;
        background: var(--bs-primary);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 1.2rem;
      }

      .cta-section {
        background: var(--bs-primary);
        color: white;
      }

      .contact-icon {
        width: 70px;
        height: 70px;
        background: rgba(13, 110, 253, 0.1);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1rem auto;
      }

      .navbar-brand {
        font-weight: 700;
        font-size: 1.5rem;
      }

      .btn-outline-light:hover {
        background-color: rgba(255,255,255,0.1);
        border-color: white;
      }

      .section-padding {
        padding: 80px 0;
      }

      .text-muted {
        color: #6c757d !important;
      }

      @media (min-width: 1200px) {
        .container,
        .container-fluid {
          max-width: 100%;
          padding-left: 2rem;
          padding-right: 2rem;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default AgileCreditSolutions;
