import HeaderSection from '../components/Header';
import Footer from '../components/footer';
// import ThankYouSection from "../components/ThankYouSection";
import aboutusbc from '../images/aboutus.png';
import BreadcrumbSection from '../components/BreadCrumb';
import { Helmet } from 'react-helmet-async';

const ThankYouPage = () => {
    return (
        <>
            <HeaderSection />
              <Helmet>
                               <title>Thank you - Design Printo</title>
                               <meta name="description" content="Welcome to Design Printo Terms, which contains Design Printo standard agreements, transaction documents, and other related documents." />
                               <link rel="canonical" href="https://designprinto.com/thank-you" />
                              
                             </Helmet>
            <div>
                <BreadcrumbSection
                    heading="Thank You!"
                    description="We appreciate your response. Your submission has been received successfully."
                    buttonText="Return to Home"
                    backgroundImage={aboutusbc}
                />
            </div>
            {/* <ThankYouSection /> */}
            <Footer />
        </>
    );
};

export default ThankYouPage;
