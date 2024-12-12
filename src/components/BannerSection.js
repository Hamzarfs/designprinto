import React from 'react';
import '../Banner Sec.css'; // Ensure to import the CSS file
import bannerimg from "../images/banner1.png";

const BannerSection = () => {
  return (
    <section className="how-it-works">
      <div className="container">
        <section className="banner-section row align-items-center">
          {/* Left side content */}
          <div className="col-lg-6 banner-content text-white">
            <h1>Highest Quality Design<br />and Printing Services</h1>
             
            <p>
            Transform your brand with our top-tier design and printing services. 
            With captivating visuals and flawless printing, we provide outstanding 
            results that will make a memorable impact.
            </p>
            <button data-bs-toggle="modal" data-bs-target="#popupForm" className="banner-button">Build Your Dream App</button>
          </div>

          {/* Right side image */}
          <div className="col-lg-6 banner-image">
            <img src={bannerimg} alt="App Design" className="img-fluid" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default BannerSection;
 