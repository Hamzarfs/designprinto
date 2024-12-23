import React from "react";
import "../WhatWeDoSection.css";
import aboutusimg1 from '../images/abouts.png';

function WhatWeDoSection() {
  return (
    <div className="unique-section-container">
      <div className="container">
      <div className="row align-items-center">
        {/* Left Images */}
        <div className="col-md-6">
          <div className="unique-image-group">
            <img
              src={aboutusimg1}
              alt="Design Mockup 1"
              className="unique-image-1 img-fluid mb-3"
            />
          </div>
        </div>
        {/* Right Content */}
        <div className="col-md-6">
          <h6 className="unique-section-subtitle text-uppercase mb-2">
            What We Do
          </h6>
          <h2 className="section-heading-hy">
          Our <span style={{ color: '#DD1D8F' }}>Story </span> 
          </h2>
          <p className="unique-section-description mb-4">
          Design Printo's mission is to provide unrivaled quality design and print services. 
          The journey started long ago in a humble workshop with a single object in mind: 
          designing beauty, functionality, and impact for its users. Over the years, we've 
          expanded, developed, and changed, but we kept intact values at our core.
          </p>
          <ul className="unique-list list-unstyled">
            <li className="unique-list-item mb-2">
              <i className="bi bi-check-circle-fill unique-icon"></i>
              Innovation 
              </li>
            <li className="unique-list-item mb-2">
              <i className="bi bi-check-circle-fill unique-icon"></i>
              Quality 
            </li>
            <li className="unique-list-item mb-2">
              <i className="bi bi-check-circle-fill unique-icon"></i>
              Customer Satisfaction 
            </li>
            <li className="unique-list-item mb-2">
              <i className="bi bi-check-circle-fill unique-icon"></i>
              Adaptability
            </li>
            <li className="unique-list-item">
              <i className="bi bi-check-circle-fill unique-icon"></i>
              Environmental Responsibility
            </li>
          </ul>
        </div>
      </div>
     </div>
    </div>
  );
}

export default WhatWeDoSection;
