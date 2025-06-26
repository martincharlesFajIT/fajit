import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Logo and Contact Section */}
        <div className="footer-column">
          <div className="footer-logo">
            <h2>F A J Digital</h2>
          </div>
          <div className="contact-info">
            <h3>Contact Us</h3>
            <p>FAJ IT SOLUTIONS Sheikh Zayed Road, Dubai, UAE</p>
            <a href="mailto:demo@fajitsolutions.ae" className="email-link">
              demo@fajitsolutions.ae
            </a>
            <div className="phone-numbers">
              <p>+971 XXXXXX</p>
              <p>+971 XXXXXX</p>
            </div>
          </div>
          
          {/* Social Media Icons */}
          <div className="social-media">
            <a href="#" className="social-link" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="YouTube">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="Behance">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.498 1.19.906.26 1.576.72 2.022 1.37.448.66.67 1.43.67 2.34 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.76-.61.155-1.25.23-1.92.23H0V4.51h6.938v-.007zM3.495 8.915h2.91c.518 0 .954-.07 1.31-.26.353-.18.53-.49.53-.95 0-.26-.04-.48-.13-.65-.09-.17-.22-.31-.39-.42-.17-.11-.37-.19-.61-.24-.24-.05-.5-.07-.78-.07H3.495v2.59zm0 4.455h3.4c.26 0 .52-.02.78-.08.26-.06.49-.14.69-.26.2-.12.36-.28.48-.49.12-.21.18-.47.18-.78 0-.53-.17-.89-.53-1.1-.36-.22-.86-.33-1.5-.33H3.495v3.04zm15.375-3.855h-5.25v-1.54h5.25v1.54z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Overview Section */}
        <div className="footer-column">
          <h3>Overview</h3>
          <ul className="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Our Work</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Smart Technology Solutions */}
        <div className="footer-column">
          <h3>Smart Technology Solutions</h3>
          <ul className="footer-links">
            <li><a href="#">Web Development</a></li>
            <li><a href="#">UI/UX Design</a></li>
            <li><a href="#">Ecommerce Web Development</a></li>
            <li><a href="#">Mobile App Development</a></li>
            <li><a href="#">Artificial Intelligence</a></li>
            <li><a href="#">Chatbot Development</a></li>
            <li><a href="#">Virtual Reality Development</a></li>
            <li><a href="#">Augmented Reality Development</a></li>
          </ul>
        </div>

        {/* Digital Growth & Marketing */}
        <div className="footer-column">
          <h3>Digital Growth & Marketing</h3>
          <ul className="footer-links">
            <li><a href="#">Digital Marketing</a></li>
            <li><a href="#">Search Engine Optimization (SEO)</a></li>
            <li><a href="#">Content & Engine Optimization (CEO)</a></li>
            <li><a href="#">Pay-Per-Click Advertising (PPC)</a></li>
            <li><a href="#">Social Media Marketing</a></li>
            <li><a href="#">Influencer Marketing</a></li>
            <li><a href="#">Branding & Creative Design</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="footer-bottom">
        {/* Large Background Text */}
        <div className="background-text">
          <span>FAJ</span>
        </div>
        
        <div className="footer-bottom-container">
          <div className="copyright-section">
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <span className="separator">|</span>
              <a href="#">Terms & Conditions</a>
            </div>
            <p>&copy; 2025. FAJ IT HUB.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;