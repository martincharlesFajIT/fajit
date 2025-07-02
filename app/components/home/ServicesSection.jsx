"use client"
import React, { useState, useEffect } from 'react';

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState('development');
  const [selectedService, setSelectedService] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.services-section');
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

  const servicesData = {
    development: {
      title: "Development",
      services: [
        {
          name: "Web Development",
          id: "web-dev",
          details: {
            technologies: ["Sitecore Development", "Laravel Development", "CMS Development", "PHP Development", "Python Development", "Website Maintenance", "Enterprise Development"],
            description: "Build powerful, scalable web applications with cutting-edge technologies."
          }
        },
        {
          name: "Mobile App Development",
          id: "mobile-dev",
          details: {
            technologies: ["iOS Development", "Android Development", "React Native", "Flutter", "Cross-Platform Apps"],
            description: "Create seamless mobile experiences for iOS and Android platforms."
          }
        },
        {
          name: "E-commerce Websites",
          id: "ecommerce",
          details: {
            technologies: ["Shopify", "WooCommerce", "Magento", "Custom E-commerce Solutions"],
            description: "Launch your online store with secure payment gateways and inventory management."
          }
        },
        {
          name: "UI/UX Design",
          id: "uiux",
          details: {
            technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research"],
            description: "Design intuitive interfaces that delight users and drive engagement."
          }
        },
        {
          name: "ERP Software",
          id: "erp",
          details: {
            technologies: ["SAP", "Oracle", "Microsoft Dynamics", "Custom ERP Solutions"],
            description: "Streamline your business operations with integrated enterprise solutions."
          }
        },
        {
          name: "IT Resource Outsourcing",
          id: "outsourcing",
          details: {
            technologies: ["Dedicated Teams", "Staff Augmentation", "Project-Based Outsourcing"],
            description: "Scale your team with skilled professionals for your technology needs."
          }
        }
      ]
    },
    marketing: {
      title: "Digital Marketing",
      services: [
        {
          name: "SEO Optimization",
          id: "seo",
          details: {
            technologies: ["On-Page SEO", "Off-Page SEO", "Technical SEO", "Local SEO", "E-commerce SEO"],
            description: "Boost your online visibility and drive organic traffic with proven SEO strategies."
          }
        },
        {
          name: "Social Media Marketing",
          id: "social",
          details: {
            technologies: ["Facebook Marketing", "Instagram Marketing", "LinkedIn Marketing", "Twitter Marketing", "TikTok Marketing"],
            description: "Engage your audience and build brand loyalty across social platforms."
          }
        },
        {
          name: "Content Marketing",
          id: "content",
          details: {
            technologies: ["Blog Writing", "Video Content", "Infographics", "Email Newsletters", "Case Studies"],
            description: "Create compelling content that attracts, engages, and converts your audience."
          }
        },
        {
          name: "PPC Advertising",
          id: "ppc",
          details: {
            technologies: ["Google Ads", "Facebook Ads", "LinkedIn Ads", "Display Advertising", "Retargeting"],
            description: "Drive immediate results with targeted pay-per-click advertising campaigns."
          }
        }
      ]
    },
    emerging: {
      title: "Emerging Tech",
      services: [
        {
          name: "Artificial Intelligence",
          id: "ai",
          details: {
            technologies: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
            description: "Harness the power of AI to automate processes and gain intelligent insights."
          }
        },
        {
          name: "Blockchain Development",
          id: "blockchain",
          details: {
            technologies: ["Smart Contracts", "DeFi Solutions", "NFT Platforms", "Cryptocurrency Development"],
            description: "Build secure, decentralized applications with blockchain technology."
          }
        },
        {
          name: "IoT Solutions",
          id: "iot",
          details: {
            technologies: ["Smart Home", "Industrial IoT", "Wearables", "Connected Vehicles", "IoT Security"],
            description: "Connect and control devices intelligently with Internet of Things solutions."
          }
        },
        {
          name: "AR/VR Development",
          id: "arvr",
          details: {
            technologies: ["Augmented Reality", "Virtual Reality", "Mixed Reality", "3D Modeling", "Interactive Experiences"],
            description: "Create immersive experiences that blur the line between digital and physical worlds."
          }
        }
      ]
    },
    creative: {
      title: "Advertising & Creative",
      services: [
        {
          name: "Brand Identity",
          id: "brand",
          details: {
            technologies: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy", "Rebranding"],
            description: "Establish a strong, memorable brand identity that resonates with your audience."
          }
        },
        {
          name: "Video Production",
          id: "video",
          details: {
            technologies: ["Corporate Videos", "Product Demos", "Animations", "Social Media Videos", "Video Editing"],
            description: "Tell your story through compelling video content that captivates viewers."
          }
        },
        {
          name: "Motion Graphics",
          id: "motion",
          details: {
            technologies: ["2D Animation", "3D Animation", "Explainer Videos", "Title Sequences", "Visual Effects"],
            description: "Bring your ideas to life with dynamic motion graphics and animations."
          }
        },
        {
          name: "Creative Campaigns",
          id: "campaigns",
          details: {
            technologies: ["Campaign Strategy", "Creative Concepts", "Multi-channel Campaigns", "Performance Tracking"],
            description: "Launch impactful creative campaigns that drive results and engagement."
          }
        }
      ]
    }
  };

  return (
    <section className="services-section" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0f1f 50%, #0f0a1a 100%)',
      color: '#ffffff',
      padding: '80px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Elements */}
      <div className="animated-bg-elements">
        {/* Grid Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          zIndex: 1
        }}></div>

        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '2px',
              height: '2px',
              background: '#8b5cf6',
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `particleFloat ${20 + Math.random() * 10}s linear infinite`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          ></div>
        ))}
      </div>

      <div className="services-container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: isMobile ? '0 20px' : '0 60px',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Section Header */}
        <div className={`section-header ${isVisible ? 'animate-in' : ''}`} style={{
          textAlign: 'center',
          marginBottom: '60px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease'
        }}>
           <div className="what-we-do-badge">
              <span className="purple-dot"></span>
                  Our Servcies
             </div>

          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: '700',
            marginBottom: '20px',
            background: 'linear-gradient(135deg, #ffffff 0%,rgb(24, 230, 116) 50%, rgba(255, 255, 255, 0.32) 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Innovative Solutions for Digital Success
          </h2>
        </div>

        {/* Main Services Container */}
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '20px' : '40px',
          minHeight: isMobile ? 'auto' : '500px'
        }}>
          {/* Left Panel - Categories (Vertical on Desktop, Horizontal on Mobile) */}
          <div style={{
            width: isMobile ? '100%' : '220px',
            flexShrink: 0,
            marginLeft: isMobile ? '0' : '20px'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : '1fr',
              gap: isMobile ? '10px' : '15px',
              marginBottom: isMobile ? '20px' : '0'
            }}>
              {Object.entries(servicesData).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => {
                    setActiveCategory(key);
                    setSelectedService(null);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: isMobile ? '10px' : '15px',
                    padding: isMobile ? '15px' : '20px',
                    background: activeCategory === key
                      ? 'linear-gradient(135deg, rgba(92, 246, 151, 0.2) 0%, rgba(6, 212, 51, 0.2) 100%)'
                      : 'rgba(255, 255, 255, 0.02)',
                    border: activeCategory === key
                      ? '1px solid rgba(92, 246, 161, 0.5)'
                      : '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '15px',
                    color: '#ffffff',
                    fontSize: isMobile ? '14px' : '18px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textAlign: 'left',
                    width: isMobile ? 'auto' : '100%',
                    minWidth: isMobile ? 'max-content' : 'auto',
                    position: 'relative',
                    overflow: 'hidden',
                    whiteSpace: isMobile ? 'nowrap' : 'normal'
                  }}
                  onMouseEnter={(e) => {
                    if (activeCategory !== key) {
                      e.currentTarget.style.background = 'rgba(92, 246, 156, 0.1)';
                      e.currentTarget.style.borderColor = 'rgba(92, 246, 182, 0.3)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeCategory !== key) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    }
                  }}
                >
                  <span style={{ fontSize: isMobile ? '20px' : '28px' }}>{category.icon}</span>
                  <span>{category.title}</span>
                  {activeCategory === key && !isMobile && (
                    <div style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: '4px',
                      background: 'linear-gradient(180deg,rgb(92, 246, 143) 0%,rgb(6, 212, 109) 100%)',
                      borderRadius: '4px 0 0 4px'
                    }}></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right Panel - Services (Horizontal) or Details */}
          <div style={{
            flex: 1,
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(143, 243, 168, 0.2)',
            borderRadius: '20px',
            padding: isMobile ? '20px' : '40px',
            backdropFilter: 'blur(10px)',
            position: 'relative',
            overflow: 'hidden',
            marginRight: isMobile ? '0' : '20px'
          }}>
            {/* Background Gradient */}
            <div style={{
              position: 'absolute',
              top: '-50%',
              right: '-50%',
              width: '100%',
              height: '100%',
              background: 'radial-gradient(circle, rgba(92, 246, 156, 0.1) 0%, transparent 70%)',
              pointerEvents: 'none'
            }}></div>

            {!selectedService ? (
              // Services Grid
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{
                  fontSize: isMobile ? '22px' : '28px',
                  fontWeight: '700',
                  marginBottom: isMobile ? '20px' : '30px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  flexWrap: 'wrap'
                }}>
                  <span style={{ fontSize: isMobile ? '24px' : '32px' }}>{servicesData[activeCategory].icon}</span>
                  {servicesData[activeCategory].title} Services
                </h3>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: isMobile ? '15px' : '20px'
                }}>
                  {servicesData[activeCategory].services.map((service, index) => (
                    <div
                      key={service.id}
                      style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(92, 246, 151, 0.2)',
                        borderRadius: '15px',
                        padding: '25px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                        transitionDelay: `${index * 0.1}s`,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '15px'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)';
                        e.currentTarget.style.borderColor = 'rgba(92, 246, 174, 0.4)';
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(92, 246, 169, 0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                        e.currentTarget.style.borderColor = 'rgba(92, 246, 182, 0.2)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <h4 style={{
                        fontSize: isMobile ? '18px' : '20px',
                        fontWeight: '600',
                        color: '#ffffff'
                      }}>
                        {service.name}
                      </h4>

                      <button
                        onClick={() => setSelectedService(service)}
                        style={{
                          background: 'linear-gradient(135deg,rgb(6, 185, 75) 0%,rgb(129, 129, 129) 100%)',
                          border: 'none',
                          borderRadius: '25px',
                          padding: '10px 25px',
                          color: '#ffffff',
                          fontSize: '14px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          alignSelf: 'flex-start'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.05)';
                          e.currentTarget.style.boxShadow = '0 5px 20px rgba(92, 246, 169, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        Explore →
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              // Service Details
              <div style={{ position: 'relative', zIndex: 1, animation: 'slideIn 0.5s ease' }}>
                <button
                  onClick={() => setSelectedService(null)}
                  style={{
                    background: 'rgba(139, 92, 246, 0.1)',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    borderRadius: '10px',
                    padding: '10px 20px',
                    color: '#ffffff',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    marginBottom: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(139, 92, 246, 0.2)';
                    e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.3)';
                  }}
                >
                  ← Back to {servicesData[activeCategory].title}
                </button>

                <h3 style={{
                  fontSize: isMobile ? '28px' : '36px',
                  fontWeight: '700',
                  marginBottom: '20px',
                  background: 'linear-gradient(135deg, #ffffff 0%, #8b5cf6 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  {selectedService.name}
                </h3>

                <p style={{
                  fontSize: isMobile ? '16px' : '18px',
                  lineHeight: '1.8',
                  color: '#d1d5db',
                  marginBottom: isMobile ? '30px' : '40px'
                }}>
                  {selectedService.details.description}
                </p>

                <div style={{ marginBottom: '40px' }}>
                  <h4 style={{
                    fontSize: isMobile ? '20px' : '22px',
                    fontWeight: '600',
                    marginBottom: isMobile ? '20px' : '25px',
                    color: '#8b5cf6'
                  }}>
                    Technologies & Frameworks
                  </h4>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '15px'
                  }}>
                    {selectedService.details.technologies.map((tech, i) => (
                      <div
                        key={i}
                        style={{
                          background: 'rgba(139, 92, 246, 0.1)',
                          border: '1px solid rgba(139, 92, 246, 0.3)',
                          borderRadius: '12px',
                          padding: isMobile ? '12px 16px' : '15px 20px',
                          transition: 'all 0.3s ease',
                          cursor: 'default',
                          animation: `fadeInUp 0.5s ease ${i * 0.1}s both`,
                          textAlign: 'center',
                          fontWeight: '500',
                          fontSize: isMobile ? '14px' : '16px'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(139, 92, 246, 0.2)';
                          e.currentTarget.style.transform = 'translateY(-5px)';
                          e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)';
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.3)';
                        }}
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>

                <button style={{
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
                  border: 'none',
                  borderRadius: '12px',
                  padding: isMobile ? '15px 30px' : '18px 40px',
                  color: '#ffffff',
                  fontSize: isMobile ? '16px' : '18px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 5px 20px rgba(139, 92, 246, 0.4)',
                  width: isMobile ? '100%' : 'auto'
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
                  Get Started with {selectedService.name} →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes particleFloat {
          0% {
            transform: translateY(100vh) translateX(0);
          }
          100% {
            transform: translateY(-100px) translateX(100px);
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

        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;