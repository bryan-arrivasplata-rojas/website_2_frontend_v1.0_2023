import React from 'react';
import { useLocation } from 'react-router-dom';

export const OptionsComponent = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const isContactPage = location.pathname === '/contact';

    const handleHomeClick = () => {
        const homeSection = document.getElementById('home-section');
        homeSection.scrollIntoView({ behavior: 'smooth' });
    };
    
    const handleAboutClick = () => {
        const aboutSection = document.getElementById('about-section');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    };
    
    const handleLanguageClick = () => {
        const languageSection = document.getElementById('language-section');
        languageSection.scrollIntoView({ behavior: 'smooth' });
    };

    const handlePortafolioClick = () => {
        const portfolioSection = document.getElementById('portafolio-section');
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
    };

    const handleExperienceClick = () => {
        const experienceSection = document.getElementById('experience-section');
        experienceSection.scrollIntoView({ behavior: 'smooth' });
    };
    const homeElement = isHomePage ? (
        <button title="Inicio" className="icon-home bi bi-house-heart-fill" onClick={handleHomeClick}>
            <span className="tittle">Home</span>
        </button>
      ) : (
        <a href="/" title="Inicio" className="icon-home bi bi-house-heart-fill">
          <span className="tittle">Home</span>
        </a>
    );
    const aboutElement = isHomePage ? (
        <button title="Acerca de mi" className="icon-about bi-file-person-fill" onClick={handleAboutClick}>
            <span className="tittle">About</span>
        </button>
      ) : (
        []
    );
    const languageElement = isHomePage ? (
        <button title="Lenguajes" className="icon-language bi-code-slash" onClick={handleLanguageClick}>
            <span className="tittle">Language</span>
        </button>
      ) : (
        []
    );
    const portafolioElement = isHomePage ? (
        <button title="Portafolio de Desarrollos" className="icon-portafolio bi bi-journals" onClick={handlePortafolioClick}>
            <span className="tittle">Portafolio</span>
        </button>
      ) : (
        []
    );
    const experienceElement = isHomePage ? (
        <button title="Experiencia" className="icon-experience bi-star bi bi-journals" onClick={handleExperienceClick}>
            <span className="tittle">Experience</span>
        </button>
      ) : (
        []
    );
    const contactElement = isContactPage ? (
        <button title="Contacto" className="icon-contacto bi-person-lines-fill">
          <span className="tittle">Contact</span>
        </button>
      ) : (
        <a href="/contact" title="Contacto" className="icon-contacto bi-person-lines-fill">
          <span className="tittle">Contact</span>
        </a>
    );
    return (
        <div className="container-bar">
            <input type="checkbox" id="btn-social" title="Back" placeholder="Back"></input>
            <label htmlFor="btn-social" className="bi bi-arrow-right-circle-fill"></label>
            <div className="icon-social">
                {homeElement}
                {aboutElement}
                {languageElement}
                {portafolioElement}
                {experienceElement}
                {contactElement}
            </div>
        </div>
    );
};