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
            <h5 className="creative-minds-title mt-3">Expert Design Team</h5>
            <p className="creative-minds-description"> The creative resources and technical expertise that the team of experienced designers brings to each project are extensive.</p>
          </Col>
          <Col md={3} className="creative-minds-col">
            <img src={Group442} alt="Digital Services" className="creative-minds-icon img-fluid" />
            <h5 className="creative-minds-title mt-3">Advanced Technology</h5>
            <p className="creative-minds-description">The adoption of modern technology enables efficient and high-quality production.</p>
          </Col>
          <Col md={3} className="creative-minds-col">
            <img src={Group443} alt="Innovative Thinking" className="creative-minds-icon img-fluid" />
            <h5 className="creative-minds-title mt-3">Competitive Pricing</h5>
            <p className="creative-minds-description">Our pricing is competitive but certainly without affecting the quality.</p>
          </Col>
          <Col md={3} className="creative-minds-col">
            <img src={Group444} alt="Innovative Thinking" className="creative-minds-icon img-fluid" />
            <h5 className="creative-minds-title mt-3">On-time Delivery</h5>
            <p className="creative-minds-description">The deadlines have been kept most important; your projects are delivered promptly each time.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CreativeMindsComponent;
