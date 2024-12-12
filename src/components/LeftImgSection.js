// LeftImageSection.js
import React from 'react';
import "../LeftImageSec.css";
import leftimg01 from '../images/image 3754.png'; // Adjust based on your file's format

const LeftImageSection = () => {
  return (
    <section className="left-left-image-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left side: Image */}
          <div className="col-md-6">
          <h4 className="left-section-subtitle">Expert Solutions for Your Brand</h4>
            <h2 className="left-section-heading">
              Your Trusted <span style={{ color: '#DD1D8F' }}>Partner for Online</span> Printing Services
            </h2>
            <p className="left-section-description">
              We base our business on quality and customer satisfaction. Simplifying online printing services 
              allows you to concentrate on growing your business. Our range of products, design templates, and
              resource materials makes it easy for you to create beautiful marketing materials. Youngblood 
              experience meets passion experience, all at Design Printo.
            </p>
            <button data-bs-toggle='modal' data-bs-target='#popupForm' className="btn-3d-glow-button">Start Your Project</button>
          </div>
          {/* Right side: Heading and Description */}
          <div className="col-md-6">
          <img src={leftimg01} alt="Left Image" className="left-img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftImageSection;
