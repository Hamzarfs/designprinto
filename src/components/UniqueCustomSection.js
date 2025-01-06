import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../UniqueCustomSection.css';
import imag376 from '../images/image 3765.png';

const UniqueCustomSection = () => {
    return (
        <section className="unique-custom-section">
            <div className="unique-container">
                <div className="unique-row align-items-center">
                    <div className="unique-col-md-6">
                        <img src={imag376} alt="Placeholder" className="unique-img-fluid" />
                    </div>
                    <div className="unique-col-md-6 content-wrapper">
                        <h4 className="left-section-subtitle">
                            CUSTOM PRINTING
                        </h4>
                        <h2 className="unique-content-heading-v2">
                        Why Choose <span style={{ color: '#DD1D8F' }}><br/>Design Printo?</span> 
                        </h2>
                        <p
                            className="unique-content-desc"
                            style={{ maxWidth: "600px" }}
                            >
                            Design Printo brings expert design and wonderfully advanced and personalized services to
                            deliver highly customized, high-quality, cost-effective, and time-saving printing solutions.
                            </p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default UniqueCustomSection;
