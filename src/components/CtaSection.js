import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CtaSection.css"; // For custom styles

const CtaSection = () => {
  return (
    <section className="cta-section-container">
      <div className="container text-center">
        <h3>SAMPLE PACKS</h3>
        <h2>Discover Our <br/>
        Bestselling Products</h2>
        <button data-bs-toggle="modal" data-bs-target="#popupForm" className="btn btn-primary btn-lg">Start Your Project</button>
      </div>
    </section>
  );
};

export default CtaSection;
