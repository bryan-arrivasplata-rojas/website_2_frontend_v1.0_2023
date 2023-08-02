import React, { useState, useEffect } from 'react';

export const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
        setIsVisible(true);
        } else {
        setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleHomeClick = () => {
        const homeSection = document.getElementById('home-section');
        homeSection.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <>
        {isVisible && (
            <button title="Subir a Inicio" className="scroll-to-top-button" onClick={handleHomeClick}>
                <i className="bi bi-arrow-up"></i>
            </button>
        )}
        </>
    );
};