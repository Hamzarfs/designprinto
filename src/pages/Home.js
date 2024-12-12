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


const Home = () => {
    return (
        <>
        <HeaderSection/>
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
