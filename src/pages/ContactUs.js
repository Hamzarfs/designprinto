import React from 'react';
import { Link } from 'react-router-dom';
import HeaderSection from '../components/Header';
import BreadcrumbSection from '../components/BreadCrumb';
import contactbc from '../images/contact.png';
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
            heading=" Get in touch and let us <br/>know how we can help"
            buttonText="Get Started"
            backgroundImage={contactbc}
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
