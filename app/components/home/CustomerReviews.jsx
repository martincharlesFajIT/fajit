"use client"
import React, { useState, useEffect } from 'react';

const CustomerReviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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

    const section = document.querySelector('.reviews-section');
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

  // Auto-rotate reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CTO, TechStart Inc.",
      company: "TechStart",
      rating: 5,
      review: "The team delivered an exceptional web application that exceeded our expectations. Their expertise in React and Node.js helped us scale our platform to handle millions of users.",
      image: "SJ",
      project: "SaaS Platform Development",
      tags: ["React", "Node.js", "AWS"]
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Founder & CEO, DataFlow",
      company: "DataFlow",
      rating: 5,
      review: "Outstanding mobile app development! They transformed our vision into a seamless cross-platform application. The UI/UX design is intuitive and our users love it.",
      image: "MC",
      project: "Mobile App Development",
      tags: ["Flutter", "Firebase", "UI/UX"]
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Director of IT, GlobalRetail",
      company: "GlobalRetail",
      rating: 5,
      review: "Their e-commerce solution revolutionized our online presence. Sales increased by 150% within the first quarter. The integration with our existing systems was flawless.",
      image: "ER",
      project: "E-commerce Platform",
      tags: ["Shopify", "Integration", "Analytics"]
    },
    {
      id: 4,
      name: "David Kim",
      position: "VP Engineering, CloudTech",
      company: "CloudTech",
      rating: 5,
      review: "Incredible DevOps expertise! They modernized our infrastructure, implemented CI/CD pipelines, and reduced our deployment time by 80%. True professionals.",
      image: "DK",
      project: "Cloud Infrastructure",
      tags: ["DevOps", "Kubernetes", "CI/CD"]
    },
    {
      id: 5,
      name: "Lisa Thompson",
      position: "Product Manager, FinanceHub",
      company: "FinanceHub",
      rating: 5,
      review: "The blockchain solution they developed is secure, scalable, and innovative. They guided us through the entire process and delivered on time and within budget.",
      image: "LT",
      project: "Blockchain Development",
      tags: ["Blockchain", "Smart Contracts", "Security"]
    },
    {
      id: 6,
      name: "Ahmed Hassan",
      position: "CEO, SmartHome Solutions",
      company: "SmartHome",
      rating: 5,
      review: "Their IoT expertise is unmatched. They developed a complete smart home ecosystem that seamlessly connects all our devices. Customer satisfaction has skyrocketed!",
      image: "AH",
      project: "IoT Platform",
      tags: ["IoT", "Real-time", "Mobile"]
    }
  ];

  return (
    <section className="reviews-section" style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #0a0a0a 0%, #1a0f1f 50%, #0a0a0a 100%)',
      padding: isMobile ? '60px 0' : '100px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="bg-elements">
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>

        <div style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          top: '-250px',
          left: '-250px',
          filter: 'blur(100px)'
        }}></div>

        <div style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          bottom: '-200px',
          right: '-200px',
          filter: 'blur(100px)'
        }}></div>
      </div>

      <div className="reviews-container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: isMobile ? '0 20px' : '0 60px',
        position: 'relative',
        zIndex: 10
      }}>
        <div className={`section-header ${isVisible ? 'animate-in' : ''}`} style={{
          textAlign: 'center',
          marginBottom: isMobile ? '40px' : '60px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease'
        }}>
          <div className="what-we-do-badge text-white">
            <span className="purple-dot"></span>
            Client Success Stories
          </div>

          <h2 style={{
            fontSize: isMobile ? 'clamp(28px, 6vw, 36px)' : 'clamp(36px, 5vw, 56px)',
            fontWeight: '700',
            marginBottom: '20px',
            background: 'linear-gradient(135deg, #ffffff 0%,rgb(255, 255, 255) 50%, #06b6d4 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Trusted by Leading Companies Worldwide
          </h2>

          <p style={{
            fontSize: isMobile ? '16px' : '18px',
            color: '#9ca3af',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            See what our clients say about their transformation journey with us
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: '20px',
          marginBottom: isMobile ? '40px' : '60px'
        }}>
          {[
            { number: '500+', label: 'Projects Delivered' },
            { number: '98%', label: 'Client Satisfaction' },
            { number: '50+', label: 'Tech Experts' },
            { number: '15+', label: 'Years Experience' }
          ].map((stat, index) => (
            <div
              key={index}
              className={`stat-item ${isVisible ? 'animate-in' : ''}`}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                borderRadius: '15px',
                padding: isMobile ? '20px' : '30px',
                textAlign: 'center',
                backdropFilter: 'blur(10px)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.8s ease ${index * 0.1}s`
              }}
            >
              <h3 style={{
                fontSize: isMobile ? '28px' : '36px',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '10px'
              }}>
                {stat.number}
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#9ca3af',
                margin: 0
              }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div style={{
          position: 'relative',
          marginBottom: '40px'
        }}>

          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(139, 92, 246, 0.2)',
            borderRadius: '20px',
            padding: isMobile ? '30px 20px' : '50px',
            backdropFilter: 'blur(20px)',
            position: 'relative',
            overflow: 'hidden',
            minHeight: isMobile ? '400px' : '350px'
          }}>
            {/* Background Pattern */}
            <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 70%)',
              borderRadius: '50%',
              transform: 'translate(50%, -50%)'
            }}></div>

            {reviews.map((review, index) => (
              <div
                key={review.id}
                style={{
                  display: activeIndex === index ? 'block' : 'none',
                  animation: activeIndex === index ? 'fadeIn 0.5s ease' : 'none'
                }}
              >
                <div style={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  gap: isMobile ? '20px' : '40px',
                  alignItems: isMobile ? 'center' : 'flex-start'
                }}>
                  {/* Client Info */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    minWidth: isMobile ? 'auto' : '200px'
                  }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '24px',
                      fontWeight: '700',
                      color: '#ffffff',
                      marginBottom: '20px',
                      boxShadow: '0 10px 30px rgba(139, 92, 246, 0.3)'
                    }}>
                      {review.image}
                    </div>

                    <h4 style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: '#ffffff',
                      marginBottom: '5px',
                      textAlign: 'center'
                    }}>
                      {review.name}
                    </h4>

                    <p style={{
                      fontSize: '14px',
                      color: '#8b5cf6',
                      marginBottom: '5px',
                      textAlign: 'center'
                    }}>
                      {review.position}
                    </p>

                    <p style={{
                      fontSize: '14px',
                      color: '#9ca3af',
                      textAlign: 'center'
                    }}>
                      {review.company}
                    </p>
                  </div>


                  <div style={{ flex: 1 }}>
                    {/* Rating Stars */}
                    <div style={{ marginBottom: '20px' }}>
                      {[...Array(5)].map((_, i) => (
                        <span key={i} style={{ color: '#f59e0b', fontSize: '20px' }}>★</span>
                      ))}
                    </div>


                    <p style={{
                      fontSize: isMobile ? '16px' : '18px',
                      lineHeight: '1.8',
                      color: '#d1d5db',
                      marginBottom: '20px',
                      fontStyle: 'italic'
                    }}>
                      "{review.review}"
                    </p>


                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '15px',
                      marginBottom: '20px'
                    }}>
                      <span style={{
                        fontSize: '14px',
                        color: '#9ca3af'
                      }}>
                        Project:
                      </span>
                      <span style={{
                        fontSize: '14px',
                        color: '#8b5cf6',
                        fontWeight: '600'
                      }}>
                        {review.project}
                      </span>
                    </div>


                    <div style={{
                      display: 'flex',
                      gap: '10px',
                      flexWrap: 'wrap'
                    }}>
                      {review.tags.map((tag, i) => (
                        <span
                          key={i}
                          style={{
                            background: 'rgba(139, 92, 246, 0.1)',
                            border: '1px solid rgba(139, 92, 246, 0.3)',
                            borderRadius: '20px',
                            padding: '5px 15px',
                            fontSize: '12px',
                            color: '#ffffff'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>


          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            marginTop: '30px'
          }}>
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                style={{
                  width: activeIndex === index ? '30px' : '10px',
                  height: '10px',
                  borderRadius: '5px',
                  background: activeIndex === index
                    ? 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)'
                    : 'rgba(255, 255, 255, 0.2)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        </div>


        <div style={{
          textAlign: 'center',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.8s ease 0.5s'
        }}>
          <p style={{
            fontSize: '14px',
            color: '#9ca3af',
            marginBottom: '30px'
          }}>
            Trusted by industry leaders
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: isMobile ? '30px' : '50px',
            flexWrap: 'wrap',
            opacity: 0.6
          }}>
            {['TechStart', 'DataFlow', 'GlobalRetail', 'CloudTech', 'FinanceHub', 'SmartHome'].map((company, i) => (
              <div
                key={i}
                style={{
                  fontSize: isMobile ? '16px' : '20px',
                  fontWeight: '600',
                  color: '#ffffff',
                  letterSpacing: '2px'
                }}
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
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

export default CustomerReviews;