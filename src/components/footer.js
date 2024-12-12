import React from 'react';
import '../footer.css'; // Import the updated CSS
import 'bootstrap-icons/font/bootstrap-icons.css';  // Bootstrap Icons

import footerlogo from '../images/Design Printo-Logo Black2-02.svg';

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="container">
        <div className="row">
          {/* Logo and Description */}
          <div className="col-md-4">
            <div className="d-flex align-items-center mb-3">
              <img
                src={footerlogo} // Replace with your logo URL
                alt="Logo"
                style={{ width: '50%', height: 'auto' }}
                className="me-2"
              />
            </div>
            <p>
            Your trusted partner for high-quality printing solutions. From business cards to banners, 
            we deliver exceptional results. Experience the convenience of our online printing services
            and let us bring your vision to life.
            </p>
            <div className="social-icons d-flex gap-3">
              <a href="#" className="text-dark">
              <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-dark">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-dark">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-md-2">
            <h5>Get In Touch</h5>
            <ul className="list-unstyled">
              <li>2972 Westheimer Rd.</li>
              <li>Santa Ana, 85486</li>
              <li>support@example.com</li>
              <li>+ (406) 555-0120</li>
            </ul>
          </div>

          {/* Information */}
          <div className="col-md-2">
            <h5>Information</h5>
            <ul className="list-unstyled">
              <li>Printing Services</li>
              <li>Designing Services</li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="col-md-2">
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li>My Account</li>
              <li>Tracking</li>
              <li>All Products</li>
              <li>All Services</li>
            </ul>
          </div>

          {/* About Us */}
          <div className="col-md-2">
            <h5>About Us</h5>
            <ul className="list-unstyled">
              <li>Our Mission</li>
              <li>Our Vision</li>
              <li>Affiliates</li>
              <li>Referral</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="row mt-4 footer-bottom">
          <div className="col-md-6">
            <p className="mb-0">&copy; Copyright 2024, <strong>DesignPrintO</strong>. Powered by <strong>RFS</strong>.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <a href="#" className="me-3">Terms & conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
