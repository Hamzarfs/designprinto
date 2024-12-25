import React from 'react';
import { Link } from 'react-router-dom';
import HeaderSection from '../components/Header';
import BreadcrumbSection from '../components/BreadCrumb';
import aboutusbc from '../images/aboutus.png';
import Footer from '../components/footer';
import TermsOfSec from '../components/TermsOfUse';
import { Helmet } from 'react-helmet-async';






const Process = () => {



    return (
      <>
         <HeaderSection/>
                <Helmet>
                   <title>Terms and Conditions - Design Printo</title>
                   <meta name="description" content="Welcome to Design Printo Terms, which contains Design Printo standard agreements, transaction documents, and other related documents." />
                   <link rel="canonical" href="https://designprinto.com/terms-and-conditions" />
                  
                 </Helmet>
            <div>
                <BreadcrumbSection
                    heading="PLEASE READ THESE TERMS<br/>AND CONDITIONS CAREFULLY."
                    backgroundImage={aboutusbc}
                />
            </div>
            <TermsOfSec/>
            <Footer/>
        
      </>
    );
  };
  
  export default Process;
