"use client"
import React, { useState, useEffect } from 'react';

const SuccessSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorTrails, setCursorTrails] = useState([]);

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

  // Simple cursor trail effect
  useEffect(() => {
    let trailId = 0;
    
    const handleMouseMove = (e) => {
      const section = e.currentTarget;
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const newTrail = {
        id: trailId++,
        x: x,
        y: y,
        timestamp: Date.now()
      };
      
      setCursorTrails(prev => [...prev, newTrail].slice(-30)); // Keep only last 30 trails for bigger effect
    };

    const section = document.querySelector('.success-section');
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
    }

    // Clean old trails
    const interval = setInterval(() => {
      setCursorTrails(prev => prev.filter(trail => Date.now() - trail.timestamp < 1500)); // Increased from 1000ms to 1500ms
    }, 100);

    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
      }
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="success-section" style={{
      position: 'relative',
      width: '100vw',
      minHeight: '100vh',
      background: 'radial-gradient(ellipse at top left, #0f0c29 0%, #000000 25%, #000000 50%, #0f0c29 100%)',
      overflow: 'hidden',
      margin: '0',
      padding: '0',
      left: '50%',
      right: '50%',
      marginLeft: '-50vw',
      marginRight: '-50vw'
    }}>
      {/* Animated Tech Background */}
      <div className="tech-background-wrapper" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.3,
        zIndex: 1
      }}>
        {/* Circuit Board Pattern */}
        <svg width="100%" height="100%" style={{ position: 'absolute' }}>
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M10 10 L90 10 M50 10 L50 90 M10 50 L90 50 M10 90 L90 90" 
                    stroke="#8b5cf6" strokeWidth="0.5" fill="none" opacity="0.3"/>
              <circle cx="10" cy="10" r="2" fill="#8b5cf6" opacity="0.6"/>
              <circle cx="50" cy="10" r="2" fill="#8b5cf6" opacity="0.6"/>
              <circle cx="90" cy="10" r="2" fill="#8b5cf6" opacity="0.6"/>
              <circle cx="10" cy="50" r="2" fill="#8b5cf6" opacity="0.6"/>
              <circle cx="50" cy="50" r="3" fill="#06b6d4" opacity="0.8"/>
              <circle cx="90" cy="50" r="2" fill="#8b5cf6" opacity="0.6"/>
              <circle cx="10" cy="90" r="2" fill="#8b5cf6" opacity="0.6"/>
              <circle cx="50" cy="90" r="2" fill="#8b5cf6" opacity="0.6"/>
              <circle cx="90" cy="90" r="2" fill="#8b5cf6" opacity="0.6"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>

        {/* Floating Tech Icons */}
        <div className="floating-tech-icons">
          {['</>', '{...}', '< />', '01', 'AI', '⚡', '🚀', '💻', '⚙️', '🔧'].map((icon, i) => (
            <div
              key={i}
              className="tech-icon-float"
              style={{
                position: 'absolute',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: '24px',
                color: '#8b5cf6',
                opacity: 0.2,
                animation: `floatTech ${10 + Math.random() * 20}s linear infinite`,
                animationDelay: `${Math.random() * 10}s`
              }}
            >
              {icon}
            </div>
          ))}
        </div>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="gradient-orb orb-1" style={{
        position: 'absolute',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
        top: '-300px',
        right: '-300px',
        filter: 'blur(60px)',
        animation: 'orbMove 20s ease-in-out infinite',
        zIndex: 2
      }}></div>
      
      <div className="gradient-orb orb-2" style={{
        position: 'absolute',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%)',
        bottom: '-200px',
        left: '-200px',
        filter: 'blur(60px)',
        animation: 'orbMove 15s ease-in-out infinite reverse',
        zIndex: 2
      }}></div>

      {/* Cursor Trail Elements */}
      {cursorTrails.map((trail, index) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            position: 'absolute',
            left: trail.x + 'px',
            top: trail.y + 'px',
            width: '80px',
            height: '80px',  
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, rgba(139, 92, 246, 0.2) 40%, rgba(139, 92, 246, 0) 70%)',  // More visible gradient
            pointerEvents: 'none',
            transform: 'translate(-50%, -50%) scale(' + (1 + index * 0.05) + ')',  // Grows as it fades
            opacity: 1 - (Date.now() - trail.timestamp) / 1000,
            filter: `blur(${index * 1.5}px)`,  // More blur for smoke effect
            zIndex: 5
          }}
        />
      ))}

      {/* Matrix Rain Effect */}
      <div className="matrix-rain" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.05,
        zIndex: 1,
        pointerEvents: 'none'
      }}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${i * 5}%`,
              top: '-100px',
              fontSize: '20px',
              color: '#00ff00',
              animation: `matrixFall ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            {Array.from({ length: 20 }, () => Math.round(Math.random())).join('')}
          </div>
        ))}
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

      <div className="success-container" style={{ position: 'relative', zIndex: 10 }}>
        <div className={`content-left ${isVisible ? 'animate-in' : ''}`}>
          <div className="success-badge" style={{
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)',
            border: '1px solid rgba(139, 92, 246, 0.5)',
            backdropFilter: 'blur(10px)'
          }}>
            <div className="purple-dot" style={{
              animation: 'pulse 2s infinite',
              boxShadow: '0 0 20px rgba(139, 92, 246, 0.8)'
            }}></div>
            <span>Catch The Success</span>
          </div>
          
          <h1 className="main-heading" style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #8b5cf6 50%, #06b6d4 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 30px rgba(139, 92, 246, 0.5)'
          }}>
            Our 200+ Tech Nerds are here to Help
          </h1>
        </div>

        {/* Center Astronaut Image */}
        <div className={`astronaut-container ${isVisible ? 'animate-in' : ''}`}>
          <div className="astronaut-wrapper">
            <div className="astronaut-placeholder">
              <div className="helmet" style={{
                background: 'linear-gradient(135deg, #1e3a8a 0%, #06b6d4 50%, #8b5cf6 100%)',
                boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)'
              }}>
                <div className="helmet-reflection"></div>
                <div className="helmet-visor"></div>
              </div>
              <div className="body" style={{
                background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)',
                boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)'
              }}>
                <div className="chest-panel" style={{
                  background: 'rgba(139, 92, 246, 0.2)',
                  border: '2px solid #8b5cf6',
                  boxShadow: 'inset 0 0 20px rgba(139, 92, 246, 0.5)'
                }}></div>
                <div className="arm left-arm"></div>
                <div className="arm right-arm"></div>
              </div>
              <div className="planet" style={{
                background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 50%, #10b981 100%)',
                boxShadow: '0 0 40px rgba(139, 92, 246, 0.6)'
              }}>
                <div className="planet-ring"></div>
                <div className="planet-surface"></div>
              </div>
            </div>
            
            {/* Tech Floating Elements */}
            <div className="floating-elements">
              <div className="element element-1" style={{ color: '#8b5cf6', fontSize: '28px' }}>{'< />'}</div>
              <div className="element element-2" style={{ color: '#06b6d4', fontSize: '24px' }}>AI</div>
              <div className="element element-3" style={{ color: '#10b981', fontSize: '30px' }}>⚡</div>
              <div className="element element-4" style={{ color: '#f59e0b', fontSize: '26px' }}>{'{ }'}</div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className={`content-right ${isVisible ? 'animate-in' : ''}`}>
          <div className="stats-card" style={{
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 0 30px rgba(139, 92, 246, 0.2)'
          }}>
            <p className="description">
              Client satisfaction is one of our top priorities. At Digital Gravity, our consistency, dedication towards work, and constant innovation have won us several accolades in the last decade.
            </p>
            <p className="description">
              Hire web designers and web developers in Dubai from Digital Gravity to build highly responsive, scalable, and robust web applications with a touch of finesse.
            </p>
            <button className="cta-button" style={{
              background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
              boxShadow: '0 5px 20px rgba(139, 92, 246, 0.4)',
              transition: 'all 0.3s ease'
            }}>
              <span>Start A Project</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatTech {
          from {
            transform: translateY(100vh) rotate(0deg);
          }
          to {
            transform: translateY(-100px) rotate(360deg);
          }
        }

        @keyframes orbMove {
          0%, 100% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(-50px, 50px);
          }
          66% {
            transform: translate(50px, -30px);
          }
        }

        @keyframes matrixFall {
          to {
            transform: translateY(100vh);
          }
        }

        .cta-button:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 10px 30px rgba(139, 92, 246, 0.6) !important;
        }
      `}</style>
    </section>
  );
};

export default SuccessSection;