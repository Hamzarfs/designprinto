import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import '../PrintSection.css';
import Intuitive from '../images/Intuitive design tools.png';
import Intuitive1 from '../images/Printing Services.png';
import Intuitive2 from '../images/Reliable quality.png';
import Intuitive3 from '../images/Smooth automation.png';
import Intuitive4 from '../images/Custom branding tools.png';
import Intuitive5 from '../images/tools.png';

const PrintSection = () => {
  return (
    <Container className="print-section">
      <Row className="mb-5">
        <Col className="text-center">
          <h2 className="title">
           Experience the Future of<span className="highlight"> Printing</span>
          </h2>
          <p>
           The world-class printing solutions at Design Printo make printing seamless and highly efficient over the Internet. 
           Our most up-to-date equipment and sophisticated software render the highest quality prints and fastest turnaround times. 
           Through our very own user-friendly interface, you can do your designing and ordering - whether business cards or banners. 
           Our intense commitment to the customer and innovation constantly influences our thinking towards the end and the best printing 
           solutions possible. A mix of print services can be included in this from digital printing to offset printing, wide-format printing
           to on-demand printing. Whether you are the owner of a small shop or a managing giant corporation, Design Printo has the required 
           expertise and resources to take care of all your printing needs.
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={4} sm={12} className="mb-3">
          <div className="box-container">
            <div className="box text-center">
              <img src={Intuitive} alt="icon2" width={80} height={80} />
              <h5>Reliable Quality</h5>
              <p>Top-of-the-line equipment, high-grade raw materials, and a rigorous fine quality control process- from every print, now guaranteed to be of the highest quality. </p>
            </div>
            <div className="box mt-3 text-center">
              <img src={Intuitive1} alt="icon3" width={80} height={80} />
              <h5>Smooth Automation</h5>
              <p>A simple online platform and automated workflow assigned with an entire conceiving-from-order-to-delivery that will keep you in touch through real-time tracking.</p>
            </div>
          </div>
        </Col>

        <Col md={4} sm={12} className="mb-3">
          <div className="box-container">
            <div className="box text-center">
              <img src={Intuitive2} alt="icon2" width={80} height={80} />
              <h5>Branding Customization Tools</h5>
              <p>Branded designs can easily be made with the help of customizable templates, brand kits, and customized brand options.</p>
            </div>
            <div className="box mt-3 text-center">
              <img src={Intuitive3} alt="icon3" width={80} height={80} />
              <h5>Fast Turnaround Times</h5>
              <p>It's needless to say. Our production capacity is as efficient as they come; this brings about speedy turnaround times for all printing requests. </p>
            </div>
          </div>
        </Col>

        <Col md={4} sm={12} className="mb-3">
          <div className="box-container">
            <div className="box text-center">
              <img src={Intuitive4} alt="icon4" width={80} height={80} />
              <h5>Intuitive design tools</h5>
              <p>Get speed and consistency—our global in-house & partner facilities offer competitive shipping rates and consistent quality.</p>
            </div>
            <div className="box mt-3 text-center">
              <img src={Intuitive5} alt="icon5" width={80} height={80} />
              <h5>Excellent Customer Service </h5>
              <p>All your questions and clarifications may be answered precisely by a professional customer support agent.</p>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col className="text-center">
        <button data-bs-toggle='modal' data-bs-target='#popupForm' className="meet-button">Meet With Us</button>
        </Col>
      </Row>
    </Container>
  );
};

export default PrintSection;
