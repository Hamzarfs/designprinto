import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
// import "bootstrap-icons/font/bootstrap-icons.css"; // Bootstrap Icons
import logoimage from "../images/Design Printo-Logo White2-02.svg";
import "../App.css"; // Include your custom CSS
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Detect scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 35) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container d-flex justify-content-between align-items-center">
        {/* Logo Section */}
        <div className="logo">
        <Link to="/">
          <img src={logoimage} alt="Company Logo" />
          </Link>
        </div>

        {/* Menu Toggle for Mobile */}
        <div className="menu-toggle d-lg-none" onClick={toggleMenu}>
          <i className="bi bi-list"></i>
        </div>

        {/* Navigation Menu */}
        <nav className={`menu ${isMenuOpen ? "open" : ""}`}>
          <ul className="d-flex flex-column flex-lg-row align-items-center">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/our-process">Our Process</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            
          </ul>
        </nav>

        {/* Header Button */}
        {/* <div className="header-button d-none d-lg-block">
          <button data-bs-toggle='modal' data-bs-target='#popupForm' className="btn btn-primary-gradient rounded-pill py-2 px-4">
          Get App Quote
          </button>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
