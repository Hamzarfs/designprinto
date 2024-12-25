import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/AboutUs';
import Services from './pages/Services';
import Contact from './pages/ContactUs';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"; // Bootstrap Icons
import "bootstrap/dist/js/bootstrap.bundle.js"
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import { HelmetProvider } from 'react-helmet-async';


const App = () => {
    return (
        <HelmetProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact-us" element={<Contact />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-and-conditions" element={<TermsAndConditions />}/>
                </Routes>
            </Router>
        </HelmetProvider>
    );
};

export default App;
