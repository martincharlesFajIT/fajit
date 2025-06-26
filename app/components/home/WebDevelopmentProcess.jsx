"use client"

import React, { useState, useEffect } from 'react';

const WebDevelopmentProcess = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Don't render anything until client-side hydration is complete
  if (!isClient) {
    return (
      <section className="process-section">
        <div className="what-we-do-badge text-white">
          <span className="purple-dot"></span>
          Our Work Flow
        </div>
        <div className="process-title">
          <h2 className='mb-3'>Our Web Development Process</h2>
        </div>
        <div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ color: 'white', opacity: 0.7 }}>Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="process-section">
      <div className="what-we-do-badge text-white">
        <span className="purple-dot"></span>
        Our Work Flow
      </div>
      
      {/* Section Title */}
      <div className="process-title">
        <h2 className='mb-3'>Our Web Development Process</h2>
      </div>

      {/* Desktop Process Flow Container */}
      {!isMobile && (
        <div className="process-container">
          {/* Circular Flow Path */}
          <div className="process-flow">
            <svg className="flow-path" viewBox="0 0 800 500" fill="none">
              {/* Main flow path */}
              <path
                d="M100 250 Q100 100 250 100 L550 100 Q700 100 700 250 Q700 400 550 400 L250 400 Q100 400 100 250"
                stroke="url(#flowGradient)"
                strokeWidth="12"
                fill="none"
                className="animated-path"
              />
              
              {/* Gradient definition */}
              <defs>
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1e3a8a" />
                  <stop offset="25%" stopColor="#0ea5e9" />
                  <stop offset="50%" stopColor="#06b6d4" />
                  <stop offset="75%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
              </defs>
            </svg>

            {/* Desktop Steps */}
            <div className="process-step step-1">
              <div className="step-circle">
                <span className="step-number">1</span>
              </div>
              <div className="step-content">
                <h3>Discovery & Planning</h3>
                <p>We begin by understanding your business, goals, and target audience. Through collaborative discussions, we define project requirements, timelines, and resources to create a roadmap for success.</p>
              </div>
            </div>

            <div className="process-step step-2">
              <div className="step-circle">
                <span className="step-number">2</span>
              </div>
              <div className="step-content">
                <h3>Design & Prototyping</h3>
                <p>Our design team creates wireframes and prototypes that reflect the user journey and interface flow. We focus on ensuring intuitive navigation and visually appealing design to engage users from the first interaction.</p>
              </div>
            </div>

            <div className="process-step step-3">
              <div className="step-circle">
                <span className="step-number">3</span>
              </div>
              <div className="step-content">
                <h3>Development & Coding</h3>
                <p>Once designs are approved, we start building the website using the latest technologies and frameworks like React, Node.js, and Laravel. We ensure the website is responsive, secure, and high-performance.</p>
              </div>
            </div>

            <div className="process-step step-4">
              <div className="step-circle">
                <span className="step-number">4</span>
              </div>
              <div className="step-content">
                <h3>Testing & Quality Assurance</h3>
                <p>Our team rigorously tests the website across multiple devices and browsers to ensure functionality, performance, and user experience meet our high standards.</p>
              </div>
            </div>

            <div className="process-step step-5">
              <div className="step-circle">
                <span className="step-number">5</span>
              </div>
              <div className="step-content">
                <h3>Launch & Deployment</h3>
                <p>After final approvals, we deploy the website to the live environment. Our team ensures smooth migration and scaling for minimal downtime and a successful launch.</p>
              </div>
            </div>

            <div className="process-step step-6">
              <div className="step-circle">
                <span className="step-number">6</span>
              </div>
              <div className="step-content">
                <h3>Post-Launch Support & Maintenance</h3>
                <p>After launch, we offer ongoing maintenance and support services to keep your website updated, secure, and running efficiently. We regularly monitor performance and provide enhancements as needed.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Process Flow Container */}
      {isMobile && (
        <div className="mobile-process-container">
          <div className="mobile-steps">
            {/* Mobile Step 1 */}
            <div className="mobile-step">
              <div className="mobile-step-line">
                <div className="step-circle">
                  <span className="step-number">1</span>
                </div>
                <div className="connecting-line"></div>
              </div>
              <div className="mobile-step-content">
                <h3>Discovery & Planning</h3>
                <p>We begin by understanding your business, goals, and target audience. Through collaborative discussions, we define project requirements, timelines, and resources to create a roadmap for success.</p>
              </div>
            </div>

            {/* Mobile Step 2 */}
            <div className="mobile-step">
              <div className="mobile-step-line">
                <div className="step-circle">
                  <span className="step-number">2</span>
                </div>
                <div className="connecting-line"></div>
              </div>
              <div className="mobile-step-content">
                <h3>Design & Prototyping</h3>
                <p>Our design team creates wireframes and prototypes that reflect the user journey and interface flow. We focus on ensuring intuitive navigation and visually appealing design to engage users from the first interaction.</p>
              </div>
            </div>

            {/* Mobile Step 3 */}
            <div className="mobile-step">
              <div className="mobile-step-line">
                <div className="step-circle">
                  <span className="step-number">3</span>
                </div>
                <div className="connecting-line"></div>
              </div>
              <div className="mobile-step-content">
                <h3>Development & Coding</h3>
                <p>Once designs are approved, we start building the website using the latest technologies and frameworks like React, Node.js, and Laravel. We ensure the website is responsive, secure, and high-performance.</p>
              </div>
            </div>

            {/* Mobile Step 4 */}
            <div className="mobile-step">
              <div className="mobile-step-line">
                <div className="step-circle">
                  <span className="step-number">4</span>
                </div>
                <div className="connecting-line"></div>
              </div>
              <div className="mobile-step-content">
                <h3>Testing & Quality Assurance</h3>
                <p>Our team rigorously tests the website across multiple devices and browsers to ensure functionality, performance, and user experience meet our high standards.</p>
              </div>
            </div>

            {/* Mobile Step 5 */}
            <div className="mobile-step">
              <div className="mobile-step-line">
                <div className="step-circle">
                  <span className="step-number">5</span>
                </div>
                <div className="connecting-line"></div>
              </div>
              <div className="mobile-step-content">
                <h3>Launch & Deployment</h3>
                <p>After final approvals, we deploy the website to the live environment. Our team ensures smooth migration and scaling for minimal downtime and a successful launch.</p>
              </div>
            </div>

            {/* Mobile Step 6 */}
            <div className="mobile-step">
              <div className="mobile-step-line">
                <div className="step-circle">
                  <span className="step-number">6</span>
                </div>
              </div>
              <div className="mobile-step-content">
                <h3>Post-Launch Support & Maintenance</h3>
                <p>After launch, we offer ongoing maintenance and support services to keep your website updated, secure, and running efficiently. We regularly monitor performance and provide enhancements as needed.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WebDevelopmentProcess;