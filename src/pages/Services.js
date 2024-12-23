import React from 'react';
import { Link } from 'react-router-dom';
import HeaderSection from '../components/Header';
import BreadcrumbSection from '../components/BreadCrumb';
import Servicesbc from '../images/Services.png';
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
            heading="Our Services"
            buttonText="Get Started"
            backgroundImage={Servicesbc}
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
