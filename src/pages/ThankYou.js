import HeaderSection from '../components/Header';
import Footer from '../components/footer';
// import ThankYouSection from "../components/ThankYouSection";
import aboutusbc from '../images/aboutus.png';
import BreadcrumbSection from '../components/BreadCrumb';

const ThankYouPage = () => {
    return (
        <>
            <HeaderSection />
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
