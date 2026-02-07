import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <section>
          <h2 className="footer-title">Quick Links</h2>
          <ul className="footer-links">
            <li>
              <a href="about-us">About Us</a>
            </li>

            <li>
              <a href="out-team">Our Team</a>
            </li>

            <li>
              <a href="news-event">News & Events</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="footer-title">Connect With Us</h2>
          <div className="social-links">
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              𝕏
            </a>
            <a href="https://wa.me/9999999999" target="_blank" rel="noreferrer">
              🟢
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              in
            </a>
            <a href="mailto:info@dharmajyothi.com">✉</a>
          </div>
        </section>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Dharma Jyothi School. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
