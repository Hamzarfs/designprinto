// RightImageSection.js
import React from 'react';
import "../RightImageSec.css";
import rightimg01 from '../images/rightimg.png'; // Adjust based on your file's format


const RightImageSection = () => {
  return (
    <section className="right-image-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left side: Heading and Description */}
          <div className="col-md-6">
            <img src={rightimg01} alt="Right Image" className="img-fluid" />
          </div>

          {/* Right side: Image */}
          

          <div className="col-md-6">
          <h2 className="section-heading">
          Your Trusted <span style={{ color: '#DD1D8F' }}>Partner for Online</span> Printing Services</h2>
            <p className="section-description">
            We base our business on quality and customer satisfaction. Simplifying online printing services 
            allows you to concentrate on growing your business. Our range of products, design templates, and
            resource materials makes it easy for you to create beautiful marketing materials. Youngblood 
            experience meets passion experience, all at Design Printo.
            </p>
            <button data-bs-toggle='modal' data-bs-target='#popupForm' className= "btn-3d-glow-button">Start Your Project</button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default RightImageSection;
