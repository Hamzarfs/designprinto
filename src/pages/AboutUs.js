import React from 'react';
import { Link } from 'react-router-dom';
import HeaderSection from '../components/Header';
import BreadcrumbSection from '../components/BreadCrumb';
import aboutusbc from '../images/aboutus.png';

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
