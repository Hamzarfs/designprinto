import React from 'react';
import Slider from 'react-slick';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import "../Customprnt.css"; // For custom styles
import Mask1 from '../images/Mask group.png';
import Mask2 from '../images/Mask group-1.png';
import Mask3 from '../images/Mask group-2.png';
import Mask4 from '../images/Mask group-7.png';



const CustomPrintSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Default: Show 4 images at once
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // Tablet and below
        settings: {
          slidesToShow: 3, // Show 3 images on tablets
        },
      },
      {
        breakpoint: 576, // Mobile devices
        settings: {
          slidesToShow: 2, // Show 2 images on mobile
        },
      },
    ],
  };


  return (
    <section className="custom-print-section-unique">
      <Container>
        <h2 className="text-center custom-print-heading-unique">
         Custom<span className="highlight-text-unique"> Online<br/>Printing </span>Services
        </h2>
        <Row>
          <Col md={12}>
            <Tab.Container id="tabs-with-carousel-unique" defaultActiveKey="first">
              <Nav variant="pills" className="justify-content-center custom-nav-unique">
                <Nav.Item>
                  <Nav.Link eventKey="first" className="custom-nav-link-unique">Promotional Products</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" className="custom-nav-link-unique">Stationary Products</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" className="custom-nav-link-unique">Large Formats</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first" className="custom-tab-pane-unique">
                  <Slider {...settings} className="custom-slider-unique">
                    <div className="custom-slide-unique">
                      <img src={Mask1} alt="Booklets" className="img-fluid custom-image-unique" />
                      <p className="custom-image-title">Brochures</p> {/* Title for the image */}
                    </div>
                    <div className="custom-slide-unique">
                      <img src={Mask4} alt="Flyers" className="img-fluid custom-image-unique" />
                      <p className="custom-image-title">Flyers</p> {/* Title for the image */}
                    </div>
                    <div className="custom-slide-unique">
                      <img src={Mask1} alt="Catalogs" className="img-fluid custom-image-unique" />
                      <p className="custom-image-title">Postcards</p> {/* Title for the image */}
                    </div>
                    <div className="custom-slide-unique">
                      <img src={Mask1} alt="Stationary" className="img-fluid custom-image-unique" />
                      <p className="custom-image-title">Posters and Banners</p> {/* Title for the image */}
                    </div>
                  </Slider>
                </Tab.Pane>
                <Tab.Pane eventKey="second" className="custom-tab-pane-unique">
                  <Slider {...settings} className="custom-slider-unique">
                    <div className="custom-slide-unique">
                      <img src={Mask2} alt="Stationary" className="img-fluid custom-image-unique" />
                      <p className="custom-image-title">Business Cards</p> {/* Title for the image */}
                    </div>
                    <div className="custom-slide-unique">
                      <img src={Mask2} alt="Flyers" className="img-fluid custom-image-unique" />
                      <p className="custom-image-title">Marketing Folders</p> {/* Title for the image */}
                    </div>
                    <div className="custom-slide-unique">
                      <img src={Mask2} alt="Catalogs" className="img-fluid custom-image-unique" />
                      <p className="custom-image-title">Booklets</p> {/* Title for the image */}
                    </div>
                    <div className="custom-slide-unique">
                      <img src={Mask2} alt="Booklets" className="img-fluid custom-image-unique" />
                      <p className="custom-image-title">Manuals</p> {/* Title for the image */}
                    </div>
                  </Slider>
                </Tab.Pane>
                <Tab.Pane eventKey="third" className="custom-tab-pane-unique">
                  <Slider {...settings} className="custom-slider-unique">
                    <div className="custom-slide-unique">
                      <img src={Mask3} alt="Flyers" className="img-fluid custom-image-unique" />
                      <p className="custom-image-title">Catalogs</p> {/* Title for the image */}
                    </div>
                    <div className="custom-slide-unique">
                      <img src={Mask2} alt="Catalogs" className="img-fluid custom-image-unique" />
                      <p className="custom-image-title">Merchandise</p> {/* Title for the image */}
                    </div>
                    <div className="custom-slide-unique">
                      <img src={Mask1} alt="Booklets" className="img-fluid custom-image-unique" />
                      <p className="custom-image-title">Book Covers</p> {/* Title for the image */}
                    </div>
                    <div className="custom-slide-unique">
                      <img src={Mask3} alt="Stationary" className="img-fluid custom-image-unique" />
                      <p className="custom-image-title">Display Signage</p> {/* Title for the image */}
                    </div>
                  </Slider>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CustomPrintSection;
