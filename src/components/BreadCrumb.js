import React, { useState, useEffect } from "react";
import "../BreadCrumb.css";

const BreadcrumbSection = ({ heading, description, buttonText, buttonLink, backgroundImage }) => {
    const [showButton, setShowButton] = useState(true);
    const [showDescription, setShowDescription] = useState(true);

    useEffect(() => {
        // Hide the button and description if the current path is '/contact-us' or '/terms-and-conditions'
        if (window.location.pathname === '/contact-us' || window.location.pathname === '/terms-and-conditions' || window.location.pathname === '/privacy-policy' || window.location.pathname === '/about-us') {
            setShowButton(false);
            setShowDescription(false);
        } else {
            setShowButton(true);
            setShowDescription(true);
        }
    }, []);  // Empty array means this effect runs only once, on component mount

    return (
        <div
        className="breadcrumb-section"
        style={{ backgroundImage: `url(${backgroundImage})` }}
    >
        <h1
            className="breadcrumb-heading"
            dangerouslySetInnerHTML={{
                __html: heading,
            }}
        ></h1>
    
        {/* Conditionally render the description */}
        {showDescription && (
            <p
                dangerouslySetInnerHTML={{
                    __html: description,
                }}
            ></p>
        )}
    
        {/* Conditionally render the button */}
        {showButton && (
            <button data-bs-toggle="modal" data-bs-target="#popupForm" className="btn btn-primary">
                {buttonText}
            </button>
        )}
    </div>
    
    
    );
};

export default BreadcrumbSection;
