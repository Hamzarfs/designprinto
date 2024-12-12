import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../testimonial.css'; // Custom CSS for additional styling
import client1 from '../images/client.png'; 
import client2 from '../images/client2.png'; 
import client3 from '../images/client3.png'; 
import client4 from '../images/client4.png'; 
import client5 from '../images/client5.png';


const testimonials = [
  {
    id: 1,
    text: "I was sick of the worst printing services. Design Printo restored me with fresh air. Its very easy, user-friendly online platform, outstanding customer service, and simply fantastic print quality ensure my work is very easy now. I am so satisfied with their work.",
    name: "David",
    role: "Marketing Manager",
    img: client4
  },
  {
    id: 2,
    text: "Design Printo has been a total game changer for my business. They have fantastic attention to detail and fast turnaround times, and the quality of their prints has really gone over and beyond my expectations. I recommend it to anybody looking for dependability and professionalism in printing services.",
    name: "Sarah",
    role: "Small Business Owner",
    img: client3
  },
  {
    id: 3,
    text: "I was completely blown away by the service and the quality that Design Printo provided. They really did go above and beyond to make sure that my project was absolutely perfect. I am grateful for their expertise and everything that they produced.",
    name: "Michael",
    role: "Entrepreneur",
    img: client5
  },
  {
    id: 4,
    text: "Design Printo is always impressive in terms of quality and efficiency. Their on-demand printing services are nothing short of a lifesaver when it comes to my last-minute projects. I have always been very impressed with their professionalism and customer satisfaction.",
    name: "Emily",
    role: "Event Planner",
    img: client2
  },
  {
    id: 5,
    text: "Design Printo works well for my business. It's always fast turnaround time and competitive pricing with excellent customer service. Therefore, they've become my printing solution of choice. I recommend them to any person above everything seeking only the best in printing services.",
    name: "Alex",
    role: "Designer",
    img: client1
  }
];

const ClientReviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="client-reviews py-5 text-center">
      <div className="container">
      <h2 className="fw-bold">
        What <span className="highlight-text">Our Clients</span>
        <br />
        Says About Us
      </h2>
        <Slider {...settings} className="mt-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial">
              <div className="stars my-3">
                {[...Array(5)].map((_, index) => (
                  <span key={index} className="text-warning fs-4">&#9733;</span>
                ))}
              </div>
              <p className="text-muted w-75 mx-auto">{`“${testimonial.text}”`}</p>
              <div className="mt-4 d-flex justify-content-center align-items-center">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="rounded-circle me-3"
                />
                <div className="text-start">
                  <h5 className="mb-0">{testimonial.name}</h5>
                  <p className="text-muted mb-0">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ClientReviews;
