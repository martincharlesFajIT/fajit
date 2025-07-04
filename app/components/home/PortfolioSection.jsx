"use client"
import React, { useState, useEffect } from 'react';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('web');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.portfolio-section');
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

  const categories = [
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'ai', name: 'AI/ML' }
  ];

  const projects = [
    {
      id: 1,
      title: "FinTech Dashboard Pro",
      category: "web",
      description: "Real-time financial analytics dashboard with AI-powered insights",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      technologies: ["Next.js", "MongoDB", "Express.js", "Node.js"],
      features: ["Real-time Data", "AI Analytics", "Multi-currency", "Dark Mode"],
      metrics: { users: "50K+", performance: "99.9%", rating: "4.9" },
      link: "/projects/fintech-dashboard"
    },
    {
      id: 2,
      title: "HealthTrack Mobile",
      category: "mobile",
      description: "Cross-platform health monitoring app with wearable integration",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      technologies: ["React Native", "Firebase", "HealthKit", "TensorFlow Lite"],
      features: ["Wearable Sync", "Health AI", "Telemedicine", "Offline Mode"],
      metrics: { downloads: "100K+", activeUsers: "75K", rating: "4.8" },
      link: "/projects/healthtrack"
    },
    {
      id: 3,
      title: "ShopHub Marketplace",
      category: "ecommerce",
      description: "Multi-vendor e-commerce platform with AR product preview",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      technologies: ["Next.js", "Stripe", "AWS", "PostgreSQL", "Redis"],
      features: ["AR Preview", "Multi-vendor", "AI Recommendations", "Global Shipping"],
      metrics: { gmv: "$5M+", vendors: "500+", products: "50K+" },
      link: "/projects/shophub"
    },
    {
      id: 4,
      title: "CloudSync Storage",
      category: "web",
      description: "Enterprise cloud storage solution with advanced collaboration",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
      color: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      technologies: ["Vue.js"],
      features: ["End-to-end Encryption", "Real-time Sync", "Team Collaboration", "API Access"],
      metrics: { storage: "10PB+", enterprises: "200+", uptime: "99.99%" },
      link: "/projects/cloudsync"
    },
    {
      id: 5,
      title: "SmartCity IoT Platform",
      category: "web",
      description: "IoT management platform for smart city infrastructure",
      image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=600&h=400&fit=crop",
      color: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
      technologies: ["Angular", "Python", "MQTT", "TimescaleDB", "Docker"],
      features: ["Real-time Monitoring", "Predictive Maintenance", "Energy Optimization", "Citizen App"],
      metrics: { devices: "100K+", cities: "15", efficiency: "+35%" },
      link: "/projects/smartcity"
    },
    {
      id: 6,
      title: "AI Content Creator",
      category: "ai",
      description: "AI-powered content generation platform for marketing teams",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      color: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
      technologies: ["Python", "GPT-4", "FastAPI", "React", "Elasticsearch"],
      features: ["Multi-language", "Brand Voice AI", "SEO Optimization", "Plagiarism Check"],
      metrics: { content: "1M+", languages: "25+", accuracy: "95%" },
      link: "/projects/ai-content"
    },
    {
      id: 7,
      title: "CryptoWallet Pro",
      category: "mobile",
      description: "Secure cryptocurrency wallet with DeFi integration",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
      color: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      technologies: ["Flutter", "Web3.js", "Solidity", "Node.js", "PostgreSQL"],
      features: ["Multi-chain", "DeFi Integration", "Hardware Wallet", "Staking"],
      metrics: { assets: "$100M+", chains: "15+", users: "25K+" },
      link: "/projects/cryptowallet"
    },
  ];

  const filteredProjects = projects.filter(p => p.category === activeFilter);

  return (
    <section className="portfolio-section" style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #0a0a0a 0%, #1a0f1f 50%, #0a0a0a 100%)',
      padding: isMobile ? '60px 0' : '100px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Elements */}
      <div className="bg-elements">
        {/* Animated Dots */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '4px',
              height: '4px',
              background: '#8b5cf6',
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5,
              animation: `float ${10 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}

        {/* Tech Grid */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.01) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.01) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          opacity: 0.5
        }}></div>
      </div>

      <div className="portfolio-container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: isMobile ? '0 20px' : '0 60px',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Section Header */}
        <div className={`section-header ${isVisible ? 'animate-in' : ''}`} style={{
          textAlign: 'center',
          marginBottom: isMobile ? '40px' : '60px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
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
            <span style={{ color: '#ffffff' }}>Our Portfolio</span>
          </div>
          
          <h2 style={{
            fontSize: isMobile ? 'clamp(28px, 6vw, 36px)' : 'clamp(36px, 5vw, 56px)',
            fontWeight: '700',
            marginBottom: '20px',
            background: 'linear-gradient(135deg, #ffffff 0%, #8b5cf6 50%, #06b6d4 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Transforming Ideas into Digital Reality
          </h2>
        </div>

        {/* Filter Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: isMobile ? '10px' : '20px',
          marginBottom: isMobile ? '40px' : '60px',
          flexWrap: 'wrap'
        }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              style={{
                padding: isMobile ? '10px 20px' : '12px 30px',
                background: activeFilter === cat.id
                  ? 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)'
                  : 'rgba(255, 255, 255, 0.05)',
                border: '1px solid',
                borderColor: activeFilter === cat.id
                  ? 'transparent'
                  : 'rgba(255, 255, 255, 0.1)',
                borderRadius: '30px',
                color: '#ffffff',
                fontSize: isMobile ? '14px' : '16px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: activeFilter === cat.id ? 'scale(1.05)' : 'scale(1)'
              }}
              onMouseEnter={(e) => {
                if (activeFilter !== cat.id) {
                  e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== cat.id) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: '25px',
          marginBottom: '60px',
          padding: isMobile ? '0' : '0 20px'
        }}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${isVisible ? 'animate-in' : ''}`}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                borderRadius: '20px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.5s ease',
                opacity: isVisible ? 1 : 0,
                transform: isVisible 
                  ? 'translateY(0) scale(1)' 
                  : 'translateY(30px) scale(0.95)',
                transitionDelay: `${index * 0.1}s`,
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                setHoveredProject(project.id);
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(139, 92, 246, 0.3)';
              }}
              onMouseLeave={(e) => {
                setHoveredProject(null);
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Header with Image */}
              <div style={{
                height: '200px',
                background: project.color,
                position: 'relative',
                overflow: 'hidden'
              }}>
                <img 
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: hoveredProject === project.id ? 1 : 0.8,
                    transition: 'all 0.3s ease',
                    transform: hoveredProject === project.id ? 'scale(1.1)' : 'scale(1)'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.7) 100%)',
                  opacity: hoveredProject === project.id ? 0.8 : 1,
                  transition: 'opacity 0.3s ease'
                }}></div>
              </div>

              {/* Project Info */}
              <div style={{ padding: '30px' }}>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  color: '#ffffff',
                  marginBottom: '15px'
                }}>
                  {project.title}
                </h3>
                
                <p style={{
                  fontSize: '16px',
                  color: '#9ca3af',
                  marginBottom: '20px',
                  lineHeight: '1.6'
                }}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div style={{
                  display: 'flex',
                  gap: '8px',
                  flexWrap: 'wrap',
                  marginBottom: '20px'
                }}>
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      style={{
                        background: 'rgba(139, 92, 246, 0.1)',
                        border: '1px solid rgba(139, 92, 246, 0.3)',
                        borderRadius: '15px',
                        padding: '5px 12px',
                        fontSize: '12px',
                        color: '#ffffff'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span style={{
                      background: 'rgba(6, 182, 212, 0.1)',
                      border: '1px solid rgba(6, 182, 212, 0.3)',
                      borderRadius: '15px',
                      padding: '5px 12px',
                      fontSize: '12px',
                      color: '#06b6d4'
                    }}>
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* View Case Study Button */}
                <button style={{
                  width: '100%',
                  padding: '12px',
                  background: hoveredProject === project.id 
                    ? 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)'
                    : 'rgba(139, 92, 246, 0.1)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  borderRadius: '10px',
                  color: '#ffffff',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px'
                }}>
                  View Case Study
                  <span style={{ 
                    transform: hoveredProject === project.id ? 'translateX(5px)' : 'translateX(0)',
                    transition: 'transform 0.3s ease'
                  }}>
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Read More Button - Single button at bottom */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '60px'
        }}>
          <button
            onClick={() => window.location.href = '/portfolio'}
            style={{
              background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
              border: 'none',
              borderRadius: '12px',
              padding: '18px 40px',
              color: '#ffffff',
              fontSize: '18px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 5px 20px rgba(139, 92, 246, 0.4)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
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
            View All Projects
            <span>→</span>
          </button>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.9)',
          backdropFilter: 'blur(10px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          animation: 'fadeIn 0.3s ease'
        }}
        onClick={() => setSelectedProject(null)}
        >
          <div 
            style={{
              background: 'linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              borderRadius: '20px',
              maxWidth: '800px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative',
              animation: 'slideUp 0.3s ease'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontSize: '20px',
                cursor: 'pointer',
                zIndex: 10,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(139, 92, 246, 0.2)';
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              }}
            >
              ✕
            </button>

            {/* Modal Header with Image */}
            <div style={{
              height: '300px',
              background: selectedProject.color,
              position: 'relative',
              overflow: 'hidden'
            }}>
              <img 
                src={selectedProject.image}
                alt={selectedProject.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '150px',
                background: 'linear-gradient(to top, #0a0a0a, transparent)'
              }}></div>
            </div>

            {/* Modal Content */}
            <div style={{ padding: '40px' }}>
              <h2 style={{
                fontSize: '36px',
                fontWeight: '700',
                color: '#ffffff',
                marginBottom: '20px'
              }}>
                {selectedProject.title}
              </h2>

              <p style={{
                fontSize: '18px',
                color: '#9ca3af',
                marginBottom: '30px',
                lineHeight: '1.8'
              }}>
                {selectedProject.description}
              </p>

              {/* Key Metrics */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px',
                marginBottom: '40px'
              }}>
                {Object.entries(selectedProject.metrics).map(([key, value]) => (
                  <div
                    key={key}
                    style={{
                      background: 'rgba(139, 92, 246, 0.1)',
                      border: '1px solid rgba(139, 92, 246, 0.3)',
                      borderRadius: '15px',
                      padding: '20px',
                      textAlign: 'center'
                    }}
                  >
                    <h4 style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      color: '#8b5cf6',
                      marginBottom: '5px'
                    }}>
                      {value}
                    </h4>
                    <p style={{
                      fontSize: '14px',
                      color: '#9ca3af',
                      textTransform: 'capitalize'
                    }}>
                      {key}
                    </p>
                  </div>
                ))}
              </div>

              {/* Features */}
              <h3 style={{
                fontSize: '24px',
                fontWeight: '600',
                color: '#ffffff',
                marginBottom: '20px'
              }}>
                Key Features
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                gap: '15px',
                marginBottom: '40px'
              }}>
                {selectedProject.features.map((feature, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '15px'
                    }}
                  >
                    <span style={{
                      width: '30px',
                      height: '30px',
                      background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      fontSize: '16px',
                      flexShrink: 0
                    }}>
                      ✓
                    </span>
                    <span style={{
                      fontSize: '16px',
                      color: '#d1d5db'
                    }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <h3 style={{
                fontSize: '24px',
                fontWeight: '600',
                color: '#ffffff',
                marginBottom: '20px'
              }}>
                Technology Stack
              </h3>
              <div style={{
                display: 'flex',
                gap: '10px',
                flexWrap: 'wrap'
              }}>
                {selectedProject.technologies.map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      background: 'rgba(6, 182, 212, 0.1)',
                      border: '1px solid rgba(6, 182, 212, 0.3)',
                      borderRadius: '20px',
                      padding: '8px 20px',
                      fontSize: '14px',
                      color: '#06b6d4',
                      fontWeight: '500'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(10px) translateX(-10px);
          }
          75% {
            transform: translateY(-10px) translateX(20px);
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

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default PortfolioSection;