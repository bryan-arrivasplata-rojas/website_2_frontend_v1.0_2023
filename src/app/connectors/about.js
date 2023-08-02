import React from 'react';
import { AboutComponet } from '../components/aboutComponent';
//import './about.scss';
//import '../../../App.scss';

export const AboutConnectors = () => {
    return (
        <div id="about-section">
            <div className="container-fluid">
                <div className="card text-center">
                    <div className="card-header">
                        <h1>SOBRE MÍ</h1>
                    </div>
                    <div className="card-body">
                        <AboutComponet/>
                    </div>
                </div>
            </div>
        </div>
        
    )
}