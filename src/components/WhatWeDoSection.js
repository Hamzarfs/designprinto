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
            Create ready-for-<span style={{ color: '#DD1D8F' }}>print designs </span> 
            with hundreds of free assets
          </h2>
          <p className="unique-section-description mb-4">
            The easiest way to create professional designs for free! Choose
            from our ever-changing library of free mockups, designs, videos, and
            logos.
          </p>
          <ul className="unique-list list-unstyled">
            <li className="unique-list-item mb-2">
              <i className="bi bi-check-circle-fill unique-icon"></i>
              Professional & Experienced
            </li>
            <li className="unique-list-item mb-2">
              <i className="bi bi-check-circle-fill unique-icon"></i>
              Low cost & digital printing agency
            </li>
            <li className="unique-list-item mb-2">
              <i className="bi bi-check-circle-fill unique-icon"></i>
              Pixel perfect and accurate printing
            </li>
            <li className="unique-list-item mb-2">
              <i className="bi bi-check-circle-fill unique-icon"></i>
              Transport & low transportation cost
            </li>
            <li className="unique-list-item">
              <i className="bi bi-check-circle-fill unique-icon"></i>
              Exclusive team members
            </li>
          </ul>
        </div>
      </div>
     </div>
    </div>
  );
}

export default WhatWeDoSection;
