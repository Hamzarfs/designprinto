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
          {/* <h4 className="left-section-subtitle">Expert Solutions for Your Brand</h4> */}
            <h2 className="left-section-heading">
            Our Vision<span style={{ color: '#DD1D8F' }}> for the Future</span> 
            </h2>
            <p className="left-section-description">
            We foresee Design Printo being the foremost innovative designer and printing provider. 
            We evolve and reinvent continuously by embracing new and forthcoming technologies to 
            create an outstanding value proposition for our clients.
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
