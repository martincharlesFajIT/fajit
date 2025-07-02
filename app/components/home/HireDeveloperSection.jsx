"use client"
import React, { useState, useEffect } from 'react';

const HireDeveloperSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSkill, setActiveSkill] = useState(0);
  const [hoveredDev, setHoveredDev] = useState(null);

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
    { name: "React Developers", icon: "⚛️", color: "#61dafb" },
    { name: "Node.js Experts", icon: "🟢", color: "#43853d" },
    { name: "Full-Stack Engineers", icon: "🚀", color: "#8b5cf6" },
    { name: "Mobile App Developers", icon: "📱", color: "#06b6d4" },
    { name: "DevOps Specialists", icon: "⚙️", color: "#ff6b6b" },
    { name: "AI/ML Engineers", icon: "🤖", color: "#10b981" }
  ];

  const developers = [
    {
      id: 1,
      name: "Alex Thompson",
      role: "Senior Full-Stack Developer",
      expertise: ["React", "Node.js", "AWS", "MongoDB"],
      experience: "8+ years",
      availability: "Available",
      rate: "$120/hr",
      projects: 45,
      rating: 4.9,
      avatar: "👨‍💻"
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Frontend Architect",
      expertise: ["Vue.js", "TypeScript", "Tailwind", "Next.js"],
      experience: "6+ years",
      availability: "Available",
      rate: "$100/hr",
      projects: 38,
      rating: 5.0,
      avatar: "👩‍💻"
    },
    {
      id: 3,
      name: "Mike Rodriguez",
      role: "Mobile Development Lead",
      expertise: ["React Native", "Flutter", "iOS", "Android"],
      experience: "7+ years",
      availability: "Busy",
      rate: "$110/hr",
      projects: 52,
      rating: 4.8,
      avatar: "🧑‍💻"
    },
    {
      id: 4,
      name: "Emma Wilson",
      role: "Backend Engineer",
      expertise: ["Python", "Django", "PostgreSQL", "Redis"],
      experience: "5+ years",
      availability: "Available",
      rate: "$95/hr",
      projects: 33,
      rating: 4.9,
      avatar: "👩‍💻"
    },
    {
      id: 5,
      name: "David Kim",
      role: "DevOps Engineer",
      expertise: ["Kubernetes", "Docker", "CI/CD", "AWS"],
      experience: "7+ years",
      availability: "Available",
      rate: "$115/hr",
      projects: 41,
      rating: 4.8,
      avatar: "👨‍💻"
    },
    {
      id: 6,
      name: "Lisa Garcia",
      role: "AI/ML Engineer",
      expertise: ["TensorFlow", "Python", "NLP", "Computer Vision"],
      experience: "6+ years",
      availability: "Available",
      rate: "$130/hr",
      projects: 28,
      rating: 5.0,
      avatar: "👩‍💻"
    }
  ];

  const process = [
    { icon: "📝", title: "Share Requirements", desc: "Tell us about your project needs" },
    { icon: "🔍", title: "Get Matched", desc: "We match you with perfect developers" },
    { icon: "💬", title: "Interview & Select", desc: "Interview and choose your team" },
    { icon: "🚀", title: "Start Building", desc: "Begin development immediately" }
  ];

  return (
    <section className="hire-section" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0f1f 25%, #0f0a1a 50%, #0a0a0a 100%)',
      padding: isMobile ? '60px 0' : '100px 0',
      position: 'relative',
      overflow: 'hidden'
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
        zIndex: 10
      }}>
        {/* Hero Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
          marginBottom: '80px'
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

          {/* Right Content - Rotating Skills Visual */}
          <div className={`skills-visual ${isVisible ? 'animate-in' : ''}`} style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
            transition: 'all 0.8s ease 0.2s',
            position: 'relative',
            height: isMobile ? '300px' : '500px'
          }}>
            {/* Central Hub */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 20px 60px rgba(139, 92, 246, 0.4)',
              animation: 'pulse 3s ease-in-out infinite'
            }}>
              <span style={{ fontSize: '60px' }}>{skills[activeSkill].icon}</span>
            </div>

            {/* Orbiting Skills */}
            {skills.map((skill, index) => {
              const angle = (index * 360) / skills.length;
              const radius = isMobile ? 120 : 180;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <div
                  key={index}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: activeSkill === index 
                      ? skill.color 
                      : 'rgba(255, 255, 255, 0.05)',
                    border: `2px solid ${activeSkill === index ? skill.color : 'rgba(255, 255, 255, 0.1)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.5s ease',
                    animation: 'float 6s ease-in-out infinite',
                    animationDelay: `${index * 0.5}s`
                  }}
                  onClick={() => setActiveSkill(index)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1.2)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1)`;
                  }}
                >
                  <span style={{ fontSize: '30px' }}>{skill.icon}</span>
                </div>
              );
            })}
          </div>
        </div>


        {/* Hiring Process */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(139, 92, 246, 0.2)',
          borderRadius: '20px',
          padding: isMobile ? '40px 20px' : '60px',
          marginBottom: '80px'
        }}>
          <h2 style={{
            fontSize: isMobile ? '28px' : '36px',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '20px',
            color: '#ffffff'
          }}>
            Simple Hiring Process
          </h2>
          
          <p style={{
            fontSize: '16px',
            color: '#9ca3af',
            textAlign: 'center',
            marginBottom: '50px',
            maxWidth: '600px',
            margin: '0 auto 50px'
          }}>
            Get started with your perfect developer in just 4 easy steps
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
            gap: '30px'
          }}>
            {process.map((step, index) => (
              <div
                key={index}
                style={{
                  textAlign: 'center',
                  position: 'relative'
                }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)',
                  border: '2px solid rgba(139, 92, 246, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: '30px',
                  position: 'relative',
                  zIndex: 2
                }}>
                  {step.icon}
                </div>
                
                {!isMobile && index < process.length - 1 && (
                  <div style={{
                    position: 'absolute',
                    top: '40px',
                    left: '60%',
                    width: '100%',
                    height: '2px',
                    background: 'linear-gradient(90deg, rgba(139, 92, 246, 0.3) 0%, rgba(139, 92, 246, 0.1) 100%)',
                    zIndex: 1
                  }}></div>
                )}
                
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#ffffff',
                  marginBottom: '10px'
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#9ca3af'
                }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          textAlign: 'center',
          padding: '60px 20px',
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)',
          borderRadius: '20px',
          border: '1px solid rgba(139, 92, 246, 0.2)'
        }}>
          <h2 style={{
            fontSize: isMobile ? '28px' : '36px',
            fontWeight: '700',
            marginBottom: '20px',
            color: '#ffffff'
          }}>
            Ready to Build Your Dream Team?
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#9ca3af',
            marginBottom: '40px',
            maxWidth: '600px',
            margin: '0 auto 40px'
          }}>
            Join 500+ companies who've built successful products with our developers
          </p>
          <button style={{
            background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
            border: 'none',
            borderRadius: '12px',
            padding: '18px 40px',
            color: '#ffffff',
            fontSize: '18px',
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
            Start Hiring Today →
          </button>
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
            box-shadow: 0 20px 60px rgba(139, 92, 246, 0.4);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 25px 70px rgba(139, 92, 246, 0.6);
          }
        }
      `}</style>
    </section>
  );
};

export default HireDeveloperSection;