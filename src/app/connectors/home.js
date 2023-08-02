import React,{ useEffect, useState } from 'react';
//import './home.scss';
import '../../App.scss';
import { HomeComponent } from '../components/homeComponent';

export const HomeConnectors = () => {
    const [scrolledToHome, setScrolledToHome] = useState(false);

    useEffect(() => {
        const scrollToHomeSection = () => {
            const homeSection = document.getElementById('home-section');
            homeSection.scrollIntoView({ behavior: 'smooth' });
            setScrolledToHome(true); // Marcar como desplazado después de hacerlo
        };

        // Desplazarse solo si aún no se ha realizado
        scrollToHomeSection();
    }, [scrolledToHome]);
    const handleAboutClick = () => {
        const aboutSection = document.getElementById('about-section');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    };
    
    const handlePortafolioClick = () => {
        const portfolioSection = document.getElementById('portafolio-section');
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div id="home-section">
            <div className="d-flex align-items-center justify-content-center">
                <div className="container-fluid row">
                    <HomeComponent/>
                    <div className="col">
                        <button className="btn from-left" onClick={handleAboutClick}>ABOUT ME</button>
                        <button className="btn from-right" onClick={handlePortafolioClick}>MY WORKS</button>
                    </div>
                </div>
            </div>
        </div>
    )
}