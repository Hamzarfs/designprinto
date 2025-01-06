import React from 'react';
import { Link } from 'react-router-dom';
import HeaderSection from '../components/Header';
import BreadcrumbSection from '../components/BreadCrumb';
import aboutusbc from '../images/aboutus.png';
import Footer from '../components/footer';
import PrivacyPolicy from '../components/PrivacyPolicySec';
import '../privacy.css';
import { Helmet } from 'react-helmet-async';


const About = () => {
    return (
        <>
        <HeaderSection/>

        <Helmet>
            <title>Privacy Policy - Design Printo</title>
            <meta name="description" content="Design Printo is committed to protecting the personal data of the users of our services that are available through our Website." />
            <link rel="canonical" href="https://designprinto.com/privacy-policy" />
        </Helmet>
            <div>
                <BreadcrumbSection
                    heading="Design Printo - Privacy Policy"
                    // description="Top-rated mobile app development company.Let's create a mobile app <br/>that your clients will enjoy and will move your business forward."
                    buttonText="Get Started"
                    backgroundImage={aboutusbc}
                />
            </div>
            <PrivacyPolicy/>

            <Footer/>
        </>
    );
};

export default About;
