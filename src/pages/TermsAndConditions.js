import React from 'react';
import { Link } from 'react-router-dom';
import HeaderSection from '../components/Header';
import BreadcrumbSection from '../components/BreadCrumb';
import aboutusbc from '../images/aboutus.png';
import Footer from '../components/footer';
import TermsOfSec from '../components/TermsOfUse';






const Process = () => {



    return (
      <>
         <HeaderSection/>
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
