import React, { useState } from 'react';
import '../UniquePrintingSection.css'; // CSS file for unique styling
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Special4 from '../images/SpecialStunning4.png'; 



const UniquePrintingSection = () => {
  // State to track the currently open description index
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle function to show/hide descriptions
  const toggleDescription = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="custom-printing-section">
      <Container>
        {/* Heading */}
        <Row className="text-center mb-4">
          <Col>
            <h2 className="custom-heading-ve fw-bold">
              <span className="custom-highlight-text">Quality Printing</span> & Outstanding<br/> Customer Service
            </h2>
            <p className="custom-description text-muted">
              We have all the equipment, know-how, and everything you need to receive fast, reliable printing services<br/>
              with high-quality results. Chat live with us today to get things moving.
            </p>
          </Col>
        </Row>

        {/* Content */}
        <Row className="align-items-center">
          {/* Left Side: Image */}
          <Col lg={7} md={12} className="mb-4">
            <img
              src={Special4} /* Replace with actual image path */
              alt="Printing Illustration"
              className="custom-image img-fluid"
            />
          </Col>

          {/* Right Side: Services */}
          <Col lg={5} md={12}>
            {[
              { title: 'Printing Services', description: 'Need some quality print products? We\'ve got a lot of things to offer-from business cards to banners; we provide a full range of printing services tailored to your needs. With our cutting-edge equipment and a team of highly knowledgeable individuals, rest assured that all our work will be excellent.' },
              { title: 'Banner Design & Printing', description: 'Let us print a banner that will impress you using our banner design and printing service. Whether you need a banner for a trade show, grand opening, or special event, we can create a stunning design and print it on high-quality materials.' },
              { title: 'Book Cover Printing', description: 'Every book should have a cover as attractive as its contents. Our book-cover printing ranges from soft covers to hardcovers, allowing your book to be displayed beautifully on the shelf. ' },
              { title: 'Design Services', description: 'Need assistance in materializing your ideas? Our super creative design team can help you craft beautiful visuals to represent your brand, be it logo design, brochure design, website design, or beyond.' },
            ].map((item, index) => (
              <Card key={index} className="custom-card mb-3 shadow-sm">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="custom-service-title">{item.title}</span>
                    <Button
                      variant="light"
                      className="custom-btn rounded-circle"
                      onClick={() => toggleDescription(index)}
                    >
                      {openIndex === index ? '-' : '+'}
                    </Button>
                  </div>
                  {/* Description Section */}
                  {openIndex === index && (
                      <div className={`custom-description-text mt-3 text-muted ${openIndex === index ? 'show' : ''}`}>
                        {item.description}
                      </div>
                    )}

                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default UniquePrintingSection;
