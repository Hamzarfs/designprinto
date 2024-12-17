import React from 'react';
import { Link } from 'react-router-dom';
import HeaderSection from '../components/Header';
import BreadcrumbSection from '../components/BreadCrumb';
import aboutusbc from '../images/aboutus.png';
import CtaSec from '../components/CtaSection';
import ContactUsSec from '../components/contactform';
import Footer from '../components/footer';
import PopupForm1 from '../components/PopupForm';




const Home = () => {
    return (
        <>
        <HeaderSection/>
        <div>
        <BreadcrumbSection
            heading=" We're Here to<br/>Make Things Happen!"
            description="Top-rated mobile app development company.Let's create a mobile app <br/>that your clients will enjoy and will move your business forward."
            buttonText="Get Started"
            backgroundImage={aboutusbc}
        />
        </div>
        <ContactUsSec/>

        <CtaSec/>
        <Footer/>
        <PopupForm1/>



        </>
    );
};

export default Home;
