import React from "react";
import "./Footer.css";
import { FaWhatsapp, FaEnvelope, FaReact } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Section - Website Info */}
        <div className="footer-left">
          <div className="website-info">
            <span className="website-text">www.haseebaslam.dev</span>
            <div className="icon-overlay">💻</div>
          </div>
        </div>

        {/* Middle Section - Made with */}
        <div className="footer-middle">
          <span className="made-with-text">This Website was made with</span>
          <div className="tech-icons">
            <div className="tech-icon react-icon">
              <FaReact />
            </div>
            
          </div>
        </div>

        {/* Right Section - Social Links */}
        <div className="footer-right">
          <div className="social-links">
            <a
              href="https://wa.me/923184625930"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link whatsapp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=haseebquotex1021@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
