import React, { useState, useEffect } from "react";
import "../BreadCrumb.css";

const BreadcrumbSection = ({ heading, description, buttonText, buttonLink, backgroundImage }) => {
    const [showButton, setShowButton] = useState(true);
    const [showDescription, setShowDescription] = useState(true);

    useEffect(() => {
        // Define paths where the button should be hidden
        const buttonHiddenPaths = [
            '/about-us', // Hide button on About Us
            '/contact-us',
            '/terms-and-conditions',
            '/privacy-policy',
            '/services'
        ];

        // Check current path
        const currentPath = window.location.pathname;

        if (buttonHiddenPaths.includes(currentPath)) {
            setShowButton(false);
        } else {
            setShowButton(true);
        }

        // Always show description
        setShowDescription(true);
    }, []); // Empty array means this effect runs only once, on component mount

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

            {/* Always render the description */}
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
