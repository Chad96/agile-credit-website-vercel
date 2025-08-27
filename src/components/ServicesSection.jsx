import React from 'react';
import { CheckCircle, Shield, TrendingUp, Users } from 'lucide-react';
import './ServicesSection.css'; // 👈 Import your custom styles

const services = [
  {
    title: "Debt Review Removal",
    description: "We help you remove your name from debt review the legal way - so you can qualify for credit again.",
    icon: <CheckCircle size={48} />
  },
  {
    title: "Blacklisted Assistance",
    description: "If you've been blacklisted, we will guide you in clearing your name and starting fresh.",
    icon: <Shield size={48} />
  },
  {
    title: "Adverse & Judgment Removal",
    description: "We assist in removing negative listings, adverse accounts, and court judgments from your credit profile.",
    icon: <TrendingUp size={48} />
  },
  {
    title: "Prescribed Debt Removal",
    description: "Some debts expire after a certain period. We check and help you legally remove any prescribed debts you're no longer responsible for.",
    icon: <CheckCircle size={48} />
  },
  {
    title: "Credit Score Education",
    description: "Learn how credit works, how to fix your credit score, and how to maintain a strong financial profile.",
    icon: <Users size={48} />
  },
  {
    title: "One-on-One Support",
    description: "You don't have to do this alone. We provide personal guidance every step of the way with care and confidentiality.",
    icon: <Users size={48} />
  }
];

const ServicesSection = () => (
  <section id="services" className="services-section">
    <div className="services-wrapper">
      <div className="services-header">
        <h2>Our Services</h2>
        <p>From Debt to Prosperity</p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
