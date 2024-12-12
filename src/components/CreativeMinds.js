import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../CreativeMinds.css';


// Import your icons here
import Group441 from '../images/Group44.png';
import Group442 from '../images/Group45.png';
import Group443 from '../images/Group46.png';
import Group444 from '../images/Group47.png';


const CreativeMindsComponent = () => {
  return (
    <section className="creative-minds-container">
      <Container>
        {/* <div className="creative-minds-heading text-center mb-5">
          <h2>The App Design Guarantees</h2>
        </div> */}
        <Row className="creative-minds-row text-center">
          <Col md={3} className="creative-minds-col ">
            <img src={Group441} alt="Product Design" className="creative-minds-icon img-fluid" />
            <h5 className="creative-minds-title mt-3">Convey Your Idea</h5>
            <p className="creative-minds-description">Connect your store to Printes, add your products, & set your own retail prices</p>
          </Col>
          <Col md={3} className="creative-minds-col">
            <img src={Group442} alt="Digital Services" className="creative-minds-icon img-fluid" />
            <h5 className="creative-minds-title mt-3">Printing Process</h5>
            <p className="creative-minds-description">Connect your store to Printes, add your products, & set your own retail prices</p>
          </Col>
          <Col md={3} className="creative-minds-col">
            <img src={Group443} alt="Innovative Thinking" className="creative-minds-icon img-fluid" />
            <h5 className="creative-minds-title mt-3">Printes Fulfills order</h5>
            <p className="creative-minds-description">Connect your store to Printes, add your products, & set your own retail prices</p>
          </Col>
          <Col md={3} className="creative-minds-col">
            <img src={Group444} alt="Innovative Thinking" className="creative-minds-icon img-fluid" />
            <h5 className="creative-minds-title mt-3">Print Ready Designs</h5>
            <p className="creative-minds-description">Connect your store to Printes, add your products, & set your own retail prices</p>
          </Col>
          
        </Row>
      </Container>
    </section>
  );
};

export default CreativeMindsComponent;
