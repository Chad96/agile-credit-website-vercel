import React from 'react';
import { MessageCircle } from 'lucide-react';
import './CTASection.css'; // 👈 Import custom styles

const CTASection = () => (
  <section className="cta-section section-padding">
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h2 className="display-4 fw-bold mb-3">Ready to Take Control of Your Credit Life?</h2>
          <p className="lead mb-5">Let's talk. We're here to help you every step of the way.</p>
         <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
  <a href="#contact" className="btn btn-light btn-lg px-5 py-3">
    Book Free Consultation
  </a>
  <a
    href="https://wa.me/+27751540808" // Replace with your WhatsApp number, e.g., 2348012345678
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-outline-light btn-lg px-5 py-3"
  >
    <MessageCircle size={20} className="me-2" /> WhatsApp Us Now
  </a>
</div>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
