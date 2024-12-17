import React from 'react';
import { Link } from 'react-router-dom';
import HeaderSection from '../components/Header';
import BreadcrumbSection from '../components/BreadCrumb';
import aboutusbc from '../images/aboutus.png';
import CtaSec from '../components/CtaSection';
import SpecialServices from '../components/SpecialServices';
import UniquePrintingSec from '../components/UniquePrintingSection';
import PrintSec from '../components/PrintSection';

import Footer from '../components/footer';
import PopupForm1 from '../components/PopupForm';




const Home = () => {
    return (
        <>
        <HeaderSection/>
        <div>
        <BreadcrumbSection
            heading=" Crafting Solutions,<br/> Delivering Excellence"
            description="Top-rated mobile app development company.Let's create a mobile app <br/>that your clients will enjoy and will move your business forward."
            buttonText="Get Started"
            backgroundImage={aboutusbc}
        />
        </div>
        <SpecialServices/>
        <UniquePrintingSec/>
        <PrintSec/>
        <CtaSec/>
        <Footer/>
        <PopupForm1/>



        </>
    );
};

export default Home;
