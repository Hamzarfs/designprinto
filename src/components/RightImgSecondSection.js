// RightImageSection.js
import React from 'react';
import "../RightImgSecondSection.css";
import rightimg02 from '../images/rightimgsec.png'; // Adjust based on your file's format

const RightImgSecondSec = () => {
  return (
    <section className="right-image-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left side: Image */}
          <div className="col-md-6 col-12">
            <img src={rightimg02} alt="Right Image" className="img-fluid" />
          </div>

          {/* Right side: Heading and Description */}
          <div className="col-md-6 col-12 mt-4 mt-md-0">
            <h2 className="section-heading-h">
              On-<span style={{ color: '#DD1D8F' }}>Time, Every</span> Time
            </h2>
            <p className="section-description-left">
              For all your printing needs, Design Printo is your trusted partner.
              We simplify the entire online experience - from placing your orders
              to tracking shipments. Our Print on-Demand service is suitable for
              both single-copy or bulk orders. It aims to provide our customers
              with maximum flexibility and convenience. Quality, durability, and
              time delivery standards with which we operate while using premium
              materials and advanced techniques to make your designs a reality.
              Whether business cards, banners, or custom products, our team works
              hard to exceed your expectations.
            </p>
            <button data-bs-toggle="modal" data-bs-target="#popupForm" className="btn-3d-glow-button">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightImgSecondSec;
