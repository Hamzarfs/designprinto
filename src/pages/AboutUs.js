import React from 'react';
import { Link } from 'react-router-dom';
import HeaderSection from '../components/Header';
import BreadcrumbSection from '../components/BreadCrumb';
import aboutusbc from '../images/aboutus.png';
import { Helmet } from 'react-helmet-async';
import ClientReviews from '../components/testimonial';
import CtaSec from '../components/CtaSection';
import Footer from '../components/footer';
import PopupForm1 from '../components/PopupForm';
import WhatWeDoSec from '../components/WhatWeDoSection';
import LeftImageSec from '../components/LeftImgSection';
import UniqueCustomSec from '../components/UniqueCustomSection';
import CreativeMindsSec from '../components/CreativeMinds';





const About = () => {
    return (
        <>
        <HeaderSection/>

         <Helmet>
                  <title>About Us | Design Printo</title>
                  <meta name="description" content="Learn about our journey in delivering design and printing assistance. Discover our commitment to quality, creativity, and customer satisfaction" />
                  <link rel="canonical" href="https://designprinto.com/about-us" />
        </Helmet>

            <div>
                <BreadcrumbSection
                    heading="About Design Printo"
                    description="Precision Printing, Creative Designs"
                    buttonText="Get Started"
                    backgroundImage={aboutusbc}
                />
            </div>
            <WhatWeDoSec/>
            <LeftImageSec/>
            <UniqueCustomSec/>
            <CreativeMindsSec/>
            <ClientReviews/>
            <CtaSec/>
            <Footer/>
            <PopupForm1/>
        </>
    );
};

export default About;
