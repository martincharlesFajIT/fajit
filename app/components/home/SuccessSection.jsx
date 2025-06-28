"use client"
import React, { useState, useEffect } from 'react';

const SuccessSection = () => {
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

    const section = document.querySelector('.success-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="success-section">
      <div className="success-video-background">
        <video 
          className="success-background-video" 
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="https://cdn.pixabay.com/video/2022/12/11/143369-781071078_large.mp4" type="video/mp4" />

        </video>
        <div className="success-video-overlay"></div>
      </div>


      <div className="success-grid-pattern"></div>
      
      <div className="success-particles">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="success-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="success-container">
        <div className={`content-left ${isVisible ? 'animate-in' : ''}`}>
          <div className="success-badge">
            <div className="purple-dot"></div>
            <span>Catch The Success</span>
          </div>
          
          <h1 className="main-heading">
            Our 200+ Tech Nerds are here to Help
          </h1>
        </div>

        {/* Center Astronaut Image */}
        <div className={`astronaut-container ${isVisible ? 'animate-in' : ''}`}>
          <div className="astronaut-wrapper">
            {/* You can replace this with your actual astronaut image */}
            <div className="astronaut-placeholder">
              <div className="helmet">
                <div className="helmet-reflection"></div>
                <div className="helmet-visor"></div>
              </div>
              <div className="body">
                <div className="chest-panel"></div>
                <div className="arm left-arm"></div>
                <div className="arm right-arm"></div>
              </div>
              <div className="planet">
                <div className="planet-ring"></div>
                <div className="planet-surface"></div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="floating-elements">
              <div className="element element-1">+</div>
              <div className="element element-2">◆</div>
              <div className="element element-3">●</div>
              <div className="element element-4">▲</div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className={`content-right ${isVisible ? 'animate-in' : ''}`}>
          <div className="stats-card">
            <p className="description">
              Client satisfaction is one of our top priorities. At Digital Gravity, our consistency, dedication towards work, and constant innovation have won us several accolades in the last decade.
            </p>
            <p className="description">
              Hire web designers and web developers in Dubai from Digital Gravity to build highly responsive, scalable, and robust web applications with a touch of finesse.
            </p>
            <button className="cta-button">
              <span>Start A Project</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;