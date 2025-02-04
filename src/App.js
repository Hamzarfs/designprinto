import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import About from './pages/AboutUs';
import Services from './pages/Services';
import Contact from './pages/ContactUs';
import BlogsPage from './pages/Blogs';
import BlogPage from './pages/Blog';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"; // Bootstrap Icons
import "bootstrap/dist/js/bootstrap.bundle.js"
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import ThankYou from './pages/ThankYou';



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
                    <Route path="/thank-you" element={<ThankYou />} />
                    <Route path="/blogs" element={<BlogsPage />} />
                    <Route path="/:slug" element={<BlogPage />} />
                    <Route path="/terms-and-conditions" element={<TermsAndConditions />}/>
                </Routes>
            </Router>
        </HelmetProvider>
    );
};

export default App;
