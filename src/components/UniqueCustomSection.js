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
                            Expert Solutions for Your Brand
                        </h4>
                        <h2 className="unique-content-heading-v2">
                            4 reasons to get<span style={{ color: '#DD1D8F' }}> printing<br/>started</span> with us
                        </h2>
                        <p className="unique-content-desc">
                            We have all the equipment, know-how and everything you will need to receive fast,<br/>
                            reliable printing services with high-quality results. Chat live with us today to get things<br/> moving.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UniqueCustomSection;
