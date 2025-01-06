import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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
        <Helmet>
            <title>Contact Us | Get in Touch for Design & Printing Solutions</title>
            <meta name="description" content="Have questions or need help with design and printing services? Contact us today for expert support, solutions, and personalized assistance." />
            <link rel="canonical" href="https://designprinto.com/contact-us" />
            
        </Helmet>
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
