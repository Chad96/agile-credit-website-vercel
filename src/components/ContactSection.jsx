import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import './ContactSection.css';

const ContactSection = () => (
  <section id="contact" className="contact-section">
    <div className="container">
      <div className="section-header">
        <h2>Contact Us</h2>
        <p>Service Area: Nationwide (Remote Support)</p>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <Phone size={32} />
          <h3>Phone</h3>
          <p>Mobile: 075 154 0808</p>
          <p>Tel: 087 255 3598</p>
        </div>

        <div className="contact-card">
          <Mail size={32} />
          <h3>Email</h3>
          <p>agilecredits@workmail.com</p>
        </div>

        <div className="contact-card">
          <MessageCircle size={32} />
          <h3>WhatsApp</h3>
          <a
            href="https://wa.me/27751540808"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            Click to Chat
          </a>
        </div>
      </div>

      <form
        className="contact-form"
        action="https://formspree.io/f/{your_form_id}" 
        method="POST"
      >
        <h3>Send a Message</h3>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="_replyto" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  </section>
);

export default ContactSection;
