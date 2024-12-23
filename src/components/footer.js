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
          <div className="col-md-5">
            <div className="d-flex align-items-center mb-3">
              <img
                src={footerlogo} // Replace with your logo URL
                alt="Logo"
                style={{ width: '50%', height: 'auto' }}
                className="me-2"
              />
            </div>
            <p style={{ paddingRight: '50px' }}>
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
          {/* Information */}
          <div className="col-md-3">
                <h5>Information</h5>
                <ul className="list-unstyled">
                  <li><a href="/" className="text-decoration-none">Home</a></li>
                  <li><a href="/services" className="text-decoration-none">Services</a></li>
                  <li><a href="/about-us" className="text-decoration-none">About Us</a></li>
                  <li><a href="/contact-us" className="text-decoration-none">Contact Us</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="col-md-4">
                <h5>Get In Touch</h5>
                <ul className="list-unstyled">
                  <li><a href="https://www.google.com/maps?q=43+3rd+Avenue+2nd+Floor,+Edison,+NJ+08837" className="text-decoration-none">43 3rd Ave 2nd Floor, Edison, NJ 08837</a></li>
                  <li><a href="mailto:support@designprinto.com" className="text-decoration-none">support@designprinto.com</a></li>
                  <li><a href="tel:+15515543283" className="text-decoration-none">+1 (551) 554-3283</a></li>
                </ul>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="row mt-4 footer-bottom">
              <div className="col-md-6">
                <p className="mb-0">&copy; Copyright 2024, <strong>DesignPrintO</strong>. Powered by <strong>RFS</strong>.</p>
              </div>
              <div className="col-md-6 text-md-end">
                <a href="/terms-and-conditions" className="text-decoration-none me-2">Terms & Conditions</a>|
                <a href="/privacy-policy" className="text-decoration-none ms-2">Privacy Policy</a>
              </div>
            </div>
          </div>
        </footer>
  );
};

export default Footer;
