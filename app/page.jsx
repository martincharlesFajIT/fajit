"use client"
import React, { useState, useEffect } from 'react'

import '../app/globals.css'
import WebDevelopmentProcess from './components/home/WebDevelopmentProcess'
import Brandstack from './components/home/Brandstack'
import StickyocialBar from './components/home/StickyocialBar'
import Footer from './Footer'
import FAQSection from './components/home/FAQSection'
import SuccessSection from './components/home/SuccessSection'



const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const scrollToNextSection = () => {
    const brandsSection = document.querySelector('.brands-section')
    if (brandsSection) {
      brandsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

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
          <source src="/home-section.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Bootstrap Navigation */}
      <nav className={`navbar navbar-expand-lg navbar-dark fixed-top custom-navbar mt-3 p-3 ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container-fluid">
          {/* Brand/Logo */}
          <a className="navbar-brand custom-logo" href="#">
            FAJ
          </a>

          {/* Bootstrap Mobile Toggler */}
          <button
            className="custom-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleMobileMenu}
          >
            <span className="custom-toggler-icon">
              <svg width="24" height="24" fill="none" stroke="currentColor">
                <path strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </span>
          </button>

          {/* Bootstrap Collapsible Content */}
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            {/* Navigation Links - Centered */}
            <ul className="navbar-nav custom-nav-links">
              <li className="nav-item">
                <a className="nav-link custom-nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-nav-link" href="#work">Our Work</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-nav-link" href="#blog">Blog</a>
              </li>
            </ul>
          </div>

          {/* CTA Buttons - Hide on mobile, show on desktop */}
          <div className="d-none d-lg-flex custom-cta-buttons">
            <button className="exprtbtn me-3">
              Speak to an expert
            </button>

            {/* Show these icons only when NOT scrolled */}
            {!isScrolled && (
              <>
                <button className="icon-btn me-2">
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
        </div>
      </nav>

      {/* Custom Mobile Menu Sidebar */}
      <div className={`mobile-menu-sidebar d-lg-none ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-menu-header d-flex justify-content-between align-items-center mb-5">
            <div className="custom-logo">FAJ</div>
            <button className="mobile-menu-close" onClick={toggleMobileMenu}>
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mobile-menu-links">
            <a href="#services" className="mobile-nav-link" onClick={toggleMobileMenu}>
              <span>Services</span>
              <svg className="mobile-nav-arrow" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#work" className="mobile-nav-link" onClick={toggleMobileMenu}>
              <span>Our Work</span>
              <svg className="mobile-nav-arrow" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#about" className="mobile-nav-link" onClick={toggleMobileMenu}>
              <span>About</span>
              <svg className="mobile-nav-arrow" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#blog" className="mobile-nav-link" onClick={toggleMobileMenu}>
              <span>Blog</span>
              <svg className="mobile-nav-arrow" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="mobile-menu-cta">
            <button className="mobile-speak-expert-btn" onClick={toggleMobileMenu}>
              Speak to an expert
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay d-lg-none" onClick={toggleMobileMenu}></div>
      )}

      {/* Main Content */}
      <div className="main-content">
        {/* Central Glow Effect */}
        <div className="glow-effect glow-large"></div>
        <div className="glow-effect glow-medium"></div>
        <div className="glow-effect glow-small"></div>

        {/* Scroll Indicator - Only on video section */}
        <div className="scroll-indicator" onClick={scrollToNextSection}>
          <p className="scroll-text">SCROLL</p>
          <div className="scroll-line"></div>
          <svg className="scroll-arrow" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
      <StickyocialBar />
      

      {/* Brands Section 2*/}
      <section>
        <Brandstack />
       
      </section>
      
      {/* Web Development Process section 3 */}
      <section>
        <WebDevelopmentProcess />
      </section>

      <section>
        <FAQSection />
      </section>

      <section>
        <SuccessSection />
      </section>

      <section><Footer /></section>
      
    </div>
  )
}

export default HeroSection