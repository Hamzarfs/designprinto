import React, { useState } from "react";
import "../leftsec.css";
import missiontb from '../images/mission.png';

const TabSection = () => {
  const [activeTab, setActiveTab] = useState("quality");

  const renderContent = () => {
    if (activeTab === "quality") {
      return (
        <>
          <h3>Unmatched Quality</h3>
          <p>
          Reverberate your brand voice with the unparalleled quality of print. 
          Brand new up-to-date equipment and superior material ensure that your 
          product from business cards to banners is of higher quality. Whether 
          you need a few copies or a bulk number of copies, our amazing on demand 
          printing services always deliver quality. 
          </p>
        </>
      );
    }
    if (activeTab === "affordable") {
      return (
        <>
          <h3>Affordable Solutions</h3>
          <p>
          Printing high-quality is not always expensive. Our affordable prices and regular 
          promotional deals will give you excellent value for money. Our online printing 
          services allow you to place orders, track your shipments, and enjoy high savings 
          while using our printing services.
          </p>
        </>
      );
    }
    if (activeTab === "reliable") {
      return (
        <>
          <h3>Fast & Reliable</h3>
          <p>
          Time is of the essence. Our efficient processes and reliable delivery services ensure 
          your orders are fulfilled promptly. From design to delivery, we prioritize speed and 
          accuracy. Experience the convenience of our streamlined workflow and receive your 
          high-quality prints in record time.
          </p>
        </>
      );
    }
  };

  return (
    <section className="tab-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-md-6">
            <div className="image-container">
              <img
                src={missiontb} // Replace with your image URL
                alt="E-Book Services"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="col-md-6">
            <div className="content-container">
              <h2> Get Started With Us </h2> 
              
              <div className="tabs">
                {/* Unmatched Quality Tab */}
                <button 
                  className={`tab ${activeTab === "quality" ? "active" : ""}`}
                  onClick={() => setActiveTab("quality")}
                >
                  <i
                    className={`icon fa ${
                      activeTab === "quality"
                        ? "fa-star active-icon"
                        : "fa-star"
                    }`}
                  ></i>{" "}
                  Unmatched Quality
                </button>

                {/* Affordable Solutions Tab */}
                <button 
                  className={`tab ${activeTab === "affordable" ? "active" : ""}`}
                  onClick={() => setActiveTab("affordable")}
                >
                  <i
                    className={`icon fa ${
                      activeTab === "affordable"
                        ? "fa-dollar-sign active-icon"
                        : "fa-dollar-sign"
                    }`}
                  ></i>{" "}
                  Affordable Solutions
                </button>

                {/* Fast & Reliable Tab */}
                <button
                  className={`tab ${activeTab === "reliable" ? "active" : ""}`}
                  onClick={() => setActiveTab("reliable")}
                >
                  <i
                    className={`icon fa ${
                      activeTab === "reliable"
                        ? "fa-clock active-icon"
                        : "fa-clock"
                    }`}
                  ></i>{" "}
                  Fast & Reliable
                </button>
              </div>
              <div className="tab-content">{renderContent()}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabSection;
