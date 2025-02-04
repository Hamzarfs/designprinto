import { Link } from 'react-router-dom';
import '../footer.scss'
import paymentGatewaysImg from '../images/payment-gateways.png'
import lockImg from '../images/lock.png'
import footerBgImg from '../images/footer-bg.png'



const Footer = () => {
    return (
        <>
            {/* <section className="pre-footer-section my-4 my-md-5">
                <div className="container">
                    <div className="text-center">
                        <h2 className="ff-inter fw-semibold">Start your packaging journey with Design Packaging</h2>

                        <p className="ff-arial mt-3">Get in touch with our product specialist now</p>

                        <button data-bs-toggle="modal" data-bs-target="#popupForm" className="unique-section-button">Get Started</button>
                    </div>
                </div>
            </section> */}

            <footer className="footer-section">
                <div className="container">
                    <div className="first-row" style={{ backgroundImage: `url(${footerBgImg})` }}>
                        <h2 className='ff-inter text-white fw-semibold'>We collaborate with people and brands;
                            lets build something great together.</h2>

                        <div className="mt-5">
                            <div className="row justify-content-between">
                                <div className="col-md-5 col-lg-4">
                                    <p className="gray-font ff-arial">Connect with us!</p>
                                    <div className="social-links-container">
                                        <div className="d-flex gap-3">
                                        <div className="social-link social-link-linkedin">
                                                    <a
                                                        href="https://www.linkedin.com/company/dsgn-packaging/"
                                                        className="contactuspg-icon"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <i className="fa-brands fa-linkedin-in"></i>
                                                    </a>
                                                    </div>

                                                    <div className="social-link social-link-facebook">
                                                    <a
                                                        href="https://www.facebook.com/dsgnpackaging/"
                                                        className="contactuspg-icon"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <i className="fa-brands fa-facebook-f"></i>
                                                    </a>
                                                    </div>

                                                    <div className="social-link social-link-instagram">
                                                    <a
                                                        href="https://www.instagram.com/dsgnpackaging/"
                                                        className="contactuspg-icon"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <i className="fa-brands fa-instagram"></i>
                                                    </a>
                                                    </div>
  
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="col-md-7 col-lg-6 col-xl-5 mt-4 mt-md-0">
                                    <p className="gray-font ff-arial">Sign up for exclusive offers and updates!</p>

                                    <form method='POST'>
                                        <div className="row g-2">
                                            <div className="col-12 col-sm">
                                                <input type="text" name='name' className="form-control ff-inter focus-ring focus-ring-success" placeholder="Name" />
                                            </div>

                                            <div className="col-12 col-sm">
                                                <input type="email" name='email' className="form-control ff-inter focus-ring focus-ring-success" placeholder="Email" />
                                            </div>

                                            <div className="col-12 col-sm-3">
                                                <div className="d-flex h-100">
                                                    <button type="submit" className="btn btn-success w-100 ff-arial border-0">Subscribe</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    <div className="second-row">
                        <div className="row justify-content-centera">
                            {/* <div className="col-md-4 col-lg">
                                <h5 className='text-white ff-inter'>Solutions</h5>

                                <div className="ff-arial">
                                    <div className='mb-2'><Link className='gray-font text-decoration-none'>Products</Link></div>
                                    <div className='mb-2'><Link className='gray-font text-decoration-none'>Industries</Link></div>
                                    <div className='mb-2'><Link className='gray-font text-decoration-none'>Option Library</Link></div>
                                    <div className='mb-2'><Link className='gray-font text-decoration-none'>Inspiration Library</Link></div>
                                    <div className='mb-2'><Link className='gray-font text-decoration-none'>Turnkey Folding Carton</Link></div>
                                    <div className='mb-2'><Link className='gray-font text-decoration-none'>Digital Corrugated</Link></div>
                                </div>
                            </div> */}

<div className="col-md-4 col-lg-3 mt-3 mt-lg-0 align-self-start">
<h5 className='text-white ff-inter'>Company</h5>

                                <div className="ff-arial">
                                    <div className='mb-2'><Link to="/" className='gray-font text-decoration-none'>Home</Link></div>
                                    <div className='mb-2'><Link to="/services"  className='gray-font text-decoration-none'>Services</Link></div>
                                    <div className='mb-2'><Link to="/about-us" className='gray-font text-decoration-none'>About Us</Link></div>
                                    <div className='mb-2'><Link to="/contact-us" className='gray-font text-decoration-none'>Contact Us</Link></div>
                                    {/* <div className='mb-2'><Link className='gray-font text-decoration-none'>Hours & Locations</Link></div>
                                    <div className='mb-2'><Link className='gray-font text-decoration-none'>Careers</Link></div> */}
                                </div>
                            </div>

                            <div className="col-md-4 col-lg-3 mt-3 mt-lg-0 align-self-start">
                                <h5 className='text-white ff-inter'>Resources</h5>

                                <div className="ff-arial">
                                  <div className='mb-2'><Link to="/Blogs" className='gray-font text-decoration-none'>Blog</Link></div>
                                    {/* <div className='mb-2'><Link to="/faq" className='gray-font text-decoration-none'>Help Center & FAQ</Link></div> */}
                                    {/* <div className='mb-2'><Link className='gray-font text-decoration-none'>Artwork Guidelines</Link></div> */}
                                   
                                    <div className='mb-2'><Link to="/terms-and-conditions" className='gray-font text-decoration-none'>Terms & Conditions</Link></div>
                                    <div className='mb-2'><Link to="/privacy-policy" className='gray-font text-decoration-none'>Privacy Policy</Link></div>
                                    <div className='mb-2'><Link to="/contact-us" className='gray-font text-decoration-none'>Request a quote</Link></div>

                                    {/* <div className='mb-2'><Link className='gray-font text-decoration-none'>Sitemap</Link></div> */}
                                </div>
                            </div>

                            <div className="col-md-4 col-lg-3 mt-3 mt-lg-0 align-self-start">

                                <h5 className='text-white ff-inter'>Sustainability</h5>
                                

                                <p className="gray-font ff-arial m-0">When you choose Design Packaging, you're not just getting packaging; 
                                you're also contributing to a greener planet. For each order, they plant a tree through the National Forest Foundation.</p>
                            </div>

                            <div className="col-md-4 col-lg-3 mt-3 mt-lg-0 align-self-start">
                                <h5 className='text-white ff-inter'>Compliance</h5>

                                <p className="gray-font ff-arial m-0">Design Packaging meticulously adheres to all relevant regulations and industry standards. 
                                    This includes strict compliance with food safety regulations, ensuring accurate and informative labeling, and meeting all 
                                    environmental requirements.</p>
                            </div>
                        </div>
                    </div>

                    <div className="third-row">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-lg-auto col-md">
                                <div className="text-center text-md-end">
                                    <span className="gray-font ff-arial">© 2025 Design Packaging. All Rights Reserved</span>
                                </div>
                            </div>

                            <div className="col-lg-auto col-md">
                                <div className="row align-items-center">
                                    <div className="col-md">
                                        <div className="d-flex align-items-center gap-2 justify-content-center justify-content-md-end my-2 mt-md-0 mb-lg-0">
                                            <img src={lockImg} alt="Lock image" />
                                            <span className="gray-font ff-arial" style={{ width: 'max-content' }}>SSL 100% Secure Transactions</span>
                                        </div>
                                    </div>

                                    <div className="col-md">
                                        <div className="text-center text-md-end">
                                            <img src={paymentGatewaysImg} alt="Payment gateways image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
