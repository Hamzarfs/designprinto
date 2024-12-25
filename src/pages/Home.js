import React from 'react';
import { Link } from 'react-router-dom';
import HeaderSection from '../components/Header';
import BannerSec from '../components/BannerSection';
import StatsSec from '../components/StatsSection';
import RightImgSec from '../components/RightImgSection';
import RightImgSecondSec from '../components/RightImgSecondSection';
import ServicesSection from '../components/ServicesSecSwap';
import TabSection from '../components/LeftContent';
import ClientReviews from '../components/testimonial';
import CtaSec from '../components/CtaSection';
import CustomPrintSection from '../components/CustomPrintSection';
import Footer from '../components/footer';
import PopupForm1 from '../components/PopupForm';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <>
        <HeaderSection/>
        <Helmet>
          <title>Design And Printing Services - On-Demand Printing</title>
          <meta name="description" content="DesignPrinto offers online printing services for marketing materials, business cards, and promotional products. Create & order with ease today!" />
          <link rel="canonical" href="http://designprinto.com" />
         
        </Helmet>
        <BannerSec/>
        <StatsSec />
        <RightImgSec />
        <CustomPrintSection/>
        <RightImgSecondSec />
        <ServicesSection/>
        <TabSection/>
        <ClientReviews/>
        <CtaSec/>
        <Footer/>

        <PopupForm1/>



        </>
    );
};

export default Home;
