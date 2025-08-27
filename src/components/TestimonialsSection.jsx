import React from 'react';
import './TestimonialsSection.css'; // ✅ Custom CSS

const testimonials = [
  {
    text: "Agile credit solutions helped me clear my debt review. Now I can finally apply for a bond. May God bless this team",
    author: "Thando M"
  },
  {
    text: "I was blacklisted and didn't know where to go. They helped me clear my name",
    author: "Sipho D."
  }
];

const TestimonialsSection = () => (
  <section id="testimonials" className="testimonials-section">
    <div className="testimonials-wrapper">
      <div className="testimonials-header">
        <h2>What Our Clients Say</h2>
        <p>Real stories from real people</p>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-text">"{testimonial.text}"</p>
            <div className="testimonial-footer">
              <div className="testimonial-avatar">{testimonial.author.charAt(0)}</div>
              <span className="testimonial-author">– {testimonial.author}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
