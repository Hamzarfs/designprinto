// Import necessary modules and components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';

import '../SpecialServices.css';
import Special1 from '../images/SpecialStunning.png'; 
import Special2 from '../images/SpecialStunning1.png'; 
import Special3 from '../images/SpecialStunning2.png'; 

// Define slide data including image and title
const slides = [
  {
    img: Special1,
    title: 'Promotional Products',
  },
  {
    img: Special1,
    title: 'Stationery Products',
  },
  {
    img: Special2,
    title: 'Large Format Products',
  },
  {
    img: Special3,
    title: 'Large Format Products',
  },
];

const SpecialServices = () => {
  return (
    <section className="special-services-section position-relative">
  <div className="container">
    <div className="text-center">
    <h3 className="special-services-subheading">About Printing Services</h3> {/* Subheading */}
      <h2 className="special-services-section-title">
      Special Stunning <span className="highlight-text">Services <br/>For Your </span>Business
      </h2>
      
      <p className="special-services-description">
      We have all the equipment, know-how and every thing you will need to receive fast, reliable printing<br/> 
      services with high quality results. Chat live with us today to get things moving.
      </p> {/* Description */}
    </div>
    <div className="mx-3">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 5 },
          768: { slidesPerView: 3, spaceBetween: 10 },
          1024: { slidesPerView: 3, spaceBetween: 10 },
        }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="special-services-slide-item">
              <img
                src={slide.img}
                alt={slide.title}
                className="special-services-slide-image img-fluid"
              />
              <h3 className="special-services-slide-title mt-3">{slide.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
</section>

  );
};

export default SpecialServices;
