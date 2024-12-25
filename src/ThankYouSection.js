import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../thanks.css'; // Include the CSS file for custom styling

const ThankYouPage = () => {
  return (
    <section className="thank-you-section d-flex justify-content-center align-items-center">
      <Container>
        <Row className="text-center">
          <Col>
            <h1 className="thank-you-heading">Thank You!</h1>
            <p className="thank-you-subtext lead">
              We appreciate your response. Your submission has been received successfully.
            </p>
            <Button variant="primary" href="/" className="return-home-btn mt-3">
              Return to Home
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ThankYouPage;
