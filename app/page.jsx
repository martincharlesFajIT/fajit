"use client"
import React, { useState, useEffect } from 'react'
import '../app/globals.css'

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="hero-container">
      {/* Video Background */}
      <div className="video-background">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="background-video"
        >
          <source src="/home-hero.mp4" type="video/mp4" />
        </video>
        
        {/* Remove gradient overlay - commented out */}
        {/* <div className="gradient-overlay"></div> */}
      </div>

      {/* Navigation */}
      <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
        {/* Logo */}
        <div className="logo">
          FAJ
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <a href="#services" className="nav-link">Services</a>
          <a href="#work" className="nav-link">Our Work</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#blog" className="nav-link">Blog</a>
        </div>

        {/* CTA Buttons */}
        <div className="cta-buttons">
          <button className="speak-expert-btn">
            Speak to an expert
          </button>
          
          {/* Show these icons only when NOT scrolled */}
          {!isScrolled && (
            <>
              <button className="icon-btn">
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
              <button className="icon-btn">
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </button>
            </>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        {/* Central Glow Effect */}
        <div className="glow-effect glow-large"></div>
        <div className="glow-effect glow-medium"></div>
        <div className="glow-effect glow-small"></div>
      </div>



      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <p className="scroll-text">SCROLL</p>
        <div className="scroll-line"></div>
        <svg className="scroll-arrow" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      {/* Mobile Menu Button */}
      <button className="mobile-menu-btn">
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  )
}

export default HeroSection