import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">Vamanjoor Convent</div>

        {/* Navigation */}
        <nav className="nav">
          <a href="about-us">About</a>
          <a href="our-team">Our Team</a>
          <a href="program">Programs</a>
          <a href="news-event">News & Events</a>
          <a href="#">Donation</a>
          <a href="#">Gallery</a>
          <a href="#">E Magazine</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
