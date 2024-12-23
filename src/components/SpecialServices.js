// Import necessary modules and components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';

import '../SpecialServices.css';
import Special1 from '../images/Promotional Products.png'; 
import Special2 from '../images/Stationery Products.png'; 
import Special3 from '../images/Large Formats.png'; 

// Define slide data including image and title
const slides = [
  {
    img: Special1,
    title: 'Promotional Products',
  },
  {
    img: Special2,
    title: 'Stationery Products',
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
      <h2 className="special-services-section-title">
      Our<span className="highlight-text"> Printing </span>Services </h2>
      
      <p className="special-services-description">
      Simplify your printing needs with our online services. Upload your designs, select your options, 
      and let us handle the rest. Our printing service includes:Booklets, Promotional Products, Merchandise, 
      Brochures, Business Cards, Catalogs, Display Signage, Flyers, Manuals, Marketing Folders, Newsletters, 
      Postcards, Posters and Banners, Presentations, Proposals, Book Cover 
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
