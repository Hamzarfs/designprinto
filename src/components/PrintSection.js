import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import '../PrintSection.css';
import Ellipse1 from '../images/Group44.png'; // Adjust based on your file's format

const PrintSection = () => {
  return (
    <Container className="print-section">
      <Row className="mb-5">
        <Col className="text-center">
          <h2 className="title">
            Always ready to <span className="highlight">print</span>
          </h2>
          <p>
            Being one of the leading online printing services in Canada, we
            offer one of Canada’s largest assortments<br/> of Print Products and we’re
            always testing new, unique products to add to our catalog.
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={4} sm={12} className="mb-3">
          <div className="box-container">
            <div className="box text-center">
              <img src={Ellipse1} alt="icon2" width={70} height={70} />
              <h5>Printing Services</h5>
              <p>Get speed and consistency—our global in-house & partner facilities offer competitive shipping rates and consistent quality.</p>
            </div>
            <div className="box mt-3 text-center">
              <img src={Ellipse1} alt="icon3" width={70} height={70} />
              <h5>Reliable quality</h5>
              <p>Get speed and consistency—our global in-house & partner facilities offer competitive shipping rates and consistent quality.</p>
            </div>
          </div>
        </Col>

        <Col md={4} sm={12} className="mb-3">
          <div className="box-container">
            <div className="box text-center">
              <img src={Ellipse1} alt="icon2" width={70} height={70} />
              <h5>Smooth automation</h5>
              <p>Get speed and consistency—our global in-house & partner facilities offer competitive shipping rates and consistent quality.</p>
            </div>
            <div className="box mt-3 text-center">
              <img src={Ellipse1} alt="icon3" width={70} height={70} />
              <h5>Custom branding tools</h5>
              <p>Get speed and consistency—our global in-house & partner facilities offer competitive shipping rates and consistent quality.</p>
            </div>
          </div>
        </Col>

        <Col md={4} sm={12} className="mb-3">
          <div className="box-container">
            <div className="box text-center">
              <img src={Ellipse1} alt="icon4" width={70} height={70} />
              <h5>Intuitive design tools</h5>
              <p>Get speed and consistency—our global in-house & partner facilities offer competitive shipping rates and consistent quality.</p>
            </div>
            <div className="box mt-3 text-center">
              <img src={Ellipse1} alt="icon5" width={70} height={70} />
              <h5>Intuitive design tools</h5>
              <p>Get speed and consistency—our global in-house & partner facilities offer competitive shipping rates and consistent quality.</p>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col className="text-center">
          <Button variant="primary" className="meet-button">Meet With Us</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PrintSection;
