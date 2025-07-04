"use client"
import React, { useState, useEffect } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // First question open by default
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.faq-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      question: "I need web design services for my enterprise website. Can you help?",
      answer: "Whether you are an enterprise or a start-up, we would love to contribute to your growth with our web design and development services in Dubai. We have designed several enterprise websites before. Head over to our portfolio section to see our capabilities in enterprise web development."
    },
    {
      question: "What will be the turnaround time for my project?",
      answer: "Project timelines vary depending on complexity and scope. Typically, a standard website takes 4-6 weeks, while complex enterprise solutions may take 8-12 weeks. We'll provide you with a detailed timeline during our initial consultation based on your specific requirements."
    },
    {
      question: "How much will a web design agency in Dubai charge me?",
      answer: "Our pricing is tailored to each project's unique requirements. Factors include design complexity, functionality, integrations, and timeline. We offer competitive rates in the Dubai market and provide detailed quotes after understanding your needs. Contact us for a personalized estimate."
    },
    {
      question: "Is responsive web design important?",
      answer: "Absolutely! Responsive design is crucial in today's mobile-first world. Over 60% of web traffic comes from mobile devices. Our responsive designs ensure your website looks perfect and functions seamlessly across all devices - smartphones, tablets, and desktops."
    },
    {
      question: "How many years have you served in the UAE market?",
      answer: "We have been proudly serving the UAE market for over 8 years, working with businesses across Dubai, Abu Dhabi, and other emirates. Our deep understanding of the local market, cultural nuances, and business practices helps us deliver solutions that resonate with your target audience."
    },
    {
      question: "How can I compare different web design services?",
      answer: "When comparing web design services, consider factors like portfolio quality, client testimonials, technical expertise, post-launch support, pricing transparency, and communication. Look for agencies that understand your industry, offer scalable solutions, and provide ongoing maintenance and support."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section">
      <div className="grid-pattern"></div>
      
      <div className="faq-container">
        {/* Left Content Panel */}
        <div className={`faq-content ${isVisible ? 'animate-in' : ''}`}>
           <div className="what-we-do-badge text-white">
          <span className="purple-dot"></span>
          FAQs
        </div>
          
          <h2 className="faq-title">
            Transformation with Smart UX & Scalable Tech
          </h2>
          
          <p className="faq-description">
            You have the vision—we engineer for the future. At Digital Gravity, we embrace the modern technology with creativity to provide AI-powered multilingual support, no-code AI website construction solutions, predictive UX and intelligent UI/UX design. No, Matter is you are looking for AI-powered hosting to autonomous maintenance bots and AI-driven A/B testing, our team of 200+ team have expertise to build scalable digital products that think, adapt, and grow with your audience.
          </p>
        </div>

        {/* Right FAQ Panel */}
        <div className={`faq-panel ${isVisible ? 'animate-in' : ''}`}>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${openIndex === index ? 'active' : ''} ${isVisible ? 'animate-item' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button 
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span>{faq.question}</span>
                  <div className="faq-icon">
                    {openIndex === index ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    )}
                  </div>
                </button>
                
                <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                  <div className="faq-answer-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;