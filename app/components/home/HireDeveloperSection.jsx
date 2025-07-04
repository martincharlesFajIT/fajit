"use client"
import React, { useState, useEffect } from 'react';

const HireDeveloperSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSkill, setActiveSkill] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.hire-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-rotate skills
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % skills.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const skills = [
    { name: "React Developers", color: "#61dafb" },
    { name: "Node.js Experts", color: "#43853d" },
    { name: "Full-Stack Engineers", color: "#8b5cf6" },
    { name: "Mobile App Developers", color: "#06b6d4" },
    { name: "DevOps Specialists", color: "#ff6b6b" },
    { name: "AI/ML Engineers", color: "#10b981" }
  ];

  return (
    <section className="hire-section" style={{
      minHeight: isMobile ? '80vh' : '100vh',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0f1f 25%, #0f0a1a 50%, #0a0a0a 100%)',
      padding: isMobile ? '60px 0' : '100px 0',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center'
    }}>
      {/* Animated Background */}
      <div className="animated-bg">
        {/* Code Rain Effect */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.03,
          pointerEvents: 'none'
        }}>
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: `${i * 7}%`,
                top: '-100px',
                fontSize: '14px',
                color: '#8b5cf6',
                fontFamily: 'monospace',
                animation: `codeRain ${10 + Math.random() * 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            >
              {`{code}
              </>`}
              <br />
              {`function()
              {}`}
              <br />
              {`=>{}
              const`}
              <br />
              {`[...]
              async`}
            </div>
          ))}
        </div>

        {/* Gradient Orbs */}
        <div style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 60%)',
          borderRadius: '50%',
          top: '-300px',
          right: '-300px',
          filter: 'blur(100px)',
          animation: 'float 20s ease-in-out infinite'
        }}></div>
      </div>

      <div className="hire-container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: isMobile ? '0 20px' : '0 60px',
        position: 'relative',
        zIndex: 10,
        width: '100%'
      }}>
        {/* Hero Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: '60px',
          alignItems: 'center'
        }}>
          {/* Left Content */}
          <div className={`hire-content ${isVisible ? 'animate-in' : ''}`} style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
            transition: 'all 0.8s ease'
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'rgba(139, 92, 246, 0.1)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              padding: '10px 20px',
              borderRadius: '30px',
              marginBottom: '30px'
            }}>
              <span style={{
                width: '8px',
                height: '8px',
                background: '#8b5cf6',
                borderRadius: '50%',
                animation: 'pulse 2s infinite'
              }}></span>
              <span style={{ color: '#ffffff', fontSize: '14px' }}>Hire Top Talent</span>
            </div>

            <h1 style={{
              fontSize: isMobile ? 'clamp(32px, 6vw, 48px)' : 'clamp(40px, 5vw, 56px)',
              fontWeight: '700',
              marginBottom: '30px',
              lineHeight: '1.2'
            }}>
              <span style={{ color: '#ffffff' }}>Hire Expert</span>
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
                minHeight: '60px'
              }}>
                {skills[activeSkill].name}
              </span>
              <br />
              <span style={{ color: '#ffffff' }}>for Your Next Project</span>
            </h1>

            <p style={{
              fontSize: '18px',
              color: '#9ca3af',
              lineHeight: '1.8',
              marginBottom: '40px'
            }}>
              Access our pool of pre-vetted developers who can transform your ideas into reality. 
              From startups to enterprises, we provide the perfect talent match for your needs.
            </p>

            <div style={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap',
              marginBottom: '40px'
            }}>
              <button style={{
                background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
                border: 'none',
                borderRadius: '12px',
                padding: '15px 30px',
                color: '#ffffff',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 5px 20px rgba(139, 92, 246, 0.4)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(139, 92, 246, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 20px rgba(139, 92, 246, 0.4)';
              }}
              >
                Hire Developers →
              </button>

              <button style={{
                background: 'transparent',
                border: '1px solid rgba(139, 92, 246, 0.5)',
                borderRadius: '12px',
                padding: '15px 30px',
                color: '#ffffff',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.8)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)';
              }}
              >
                View Portfolio
              </button>
            </div>

            {/* Quick Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px'
            }}>
              {[
                { number: '200+', label: 'Expert Developers' },
                { number: '95%', label: 'Client Retention' },
                { number: '24hr', label: 'Avg Response Time' }
              ].map((stat, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <h3 style={{
                    fontSize: '28px',
                    fontWeight: '700',
                    color: '#8b5cf6',
                    marginBottom: '5px'
                  }}>
                    {stat.number}
                  </h3>
                  <p style={{
                    fontSize: '12px',
                    color: '#9ca3af'
                  }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Developer Image */}
          <div className={`developer-image ${isVisible ? 'animate-in' : ''}`} style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
            transition: 'all 0.8s ease 0.2s',
            position: 'relative',
            height: isMobile ? '400px' : '500px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(139, 92, 246, 0.3)'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=600&fit=crop"
                alt="Expert Developer"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(20%)'
                }}
              />
              {/* Gradient Overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)',
                pointerEvents: 'none'
              }}></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes codeRain {
          to {
            transform: translateY(100vh);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(5deg);
          }
          66% {
            transform: translateY(10px) rotate(-5deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  );
};

export default HireDeveloperSection;