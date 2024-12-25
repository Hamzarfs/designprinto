import React, { useState, useEffect } from "react";
import "../BreadCrumb.css";

const BreadcrumbSection = ({ heading, description, buttonText, buttonLink, backgroundImage }) => {
    const [showButton, setShowButton] = useState(true);
    const [showDescription, setShowDescription] = useState(true);
    const [buttonRedirect, setButtonRedirect] = useState(buttonLink); // Default button link
    const [isModalTrigger, setIsModalTrigger] = useState(true); // Track whether the button should open a modal

    useEffect(() => {
        // Define paths where the button should be hidden
        const buttonHiddenPaths = [
            '/about-us',
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

        // Special case for Thank You page
        if (currentPath === '/thank-you') {
            setButtonRedirect('/'); // Redirect to home page
            setIsModalTrigger(false); // Disable modal behavior
        } else {
            setButtonRedirect(buttonLink); // Default button link
            setIsModalTrigger(true); // Enable modal behavior
        }

        // Always show description
        setShowDescription(true);
    }, [buttonLink]); // Re-run effect if buttonLink prop changes

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
                <a
                    href={buttonRedirect}
                    className="btn btn-primary"
                    {...(isModalTrigger && { "data-bs-toggle": "modal", "data-bs-target": "#popupForm" })} // Conditionally add modal attributes
                >
                    {buttonText}
                </a>
            )}
        </div>
    );
};

export default BreadcrumbSection;
