import React from 'react';

const Footer = () => (
  <footer className="bg-dark text-white py-5">
    <div className="container-fluid px-4 px-lg-5">
      <div className="row justify-content-center text-center">
        <div className="col-lg-8">
          <h3 className="h4 fw-bold mb-3">Agile Credit Solutions</h3>
          <p className="text-muted mb-4">From Debt to Prosperity</p>
          <div className="d-flex justify-content-center gap-4 mb-4">
            <a href="#services" className="text-muted text-decoration-none">Services</a>
            <a href="#about" className="text-muted text-decoration-none">About</a>
            <a href="#testimonials" className="text-muted text-decoration-none">Testimonials</a>
            <a href="#contact" className="text-muted text-decoration-none">Contact</a>
          </div>
          <hr className="border-secondary my-4" />
          <p className="text-muted mb-0">&copy; 2025 Agile Credit Solutions. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
