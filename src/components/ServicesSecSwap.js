// Import necessary modules and components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';

import '../ServicesSwap.css';
import ServicesSwap1 from '../images/Mask group-4.png'; 
import ServicesSwap2 from '../images/Group 1000009866.png'; 
import ServicesSwap3 from '../images/Mask group-5.png'; 

// Define slide data including image, title, description, and button text
const slides = [
  {
    img: ServicesSwap2,
    title: 'Promotional Products',
    description: 'These are products that carry the stamp of a company logo or message. They are given away as gifts to potential clients, employees, or customers.',
    buttonText: 'Start Your Project',
  },
  {
    img: ServicesSwap1,
    title: 'Stationery Products',
    description: 'Stationery products are the commodities that a person would use for writing, drawing, and organizing. They play an important role in both personal as well as business life.',
    buttonText: 'Start Your Project',
  },
  {
    img: ServicesSwap3,
    title: 'Large Format Products',
    description: 'Such prints are classified as larger than A4 or letter size. They can mostly be for advertisement, signage, or display purposes.',
    buttonText: 'Start Your Project',
  },
  // {
  //   img: ServicesSwap1,
  //   title: 'iOS & Android',
  //   description: 'We offer top-notch mobile app development services for both iOS and Android platforms.',
  //   buttonText: 'Start Your Project',
  // },
  // {
  //   img: ServicesSwap2,
  //   title: 'E-Commerce',
  //   description: 'Our e-commerce solutions are tailored to boost your online business.',
  //   buttonText: 'Start Your Project',
  // },
  // {
  //   img: ServicesSwap3,
  //   title: 'Web App',
  //   description: 'We design and develop custom web apps that are secure, scalable, and user-friendly.',
  //   buttonText: 'Start Your Project',
  // },
];

const ServicesWeDeliver = () => {
  return (
    <section className="services-we-deliver-section position-relative">
      <div className="container">
        <div className="text-center">
          <h2 className="services-section-title">Our<span className="highlight-text"> Best Sellers</span></h2>
        </div>
        <div className="mx-3">
          <Swiper
            // modules={[Navigation]}
            // navigation={{
            //   nextEl: ".slider-button-next",
            //   prevEl: ".slider-button-prev",
            // }}
            // loop
            slidesPerView={3}
            spaceBetween={30}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
          >
            {slides.map((slide, i) => (
              <SwiperSlide key={i}>
                <div className="services-slide-item">
                  <img src={slide.img} alt={slide.title} className="services-slide-image img-fluid" />
                  <h3 className="services-slide-title mt-3">{slide.title}</h3>
                  <p className="services-slide-description">{slide.description}</p>
                  <button data-bs-toggle="modal" data-bs-target="#popupForm" className="banner-button">{slide.buttonText}</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ServicesWeDeliver;
