import React from 'react';
import { ExperienceComponet } from '../components/experienceComponent';
//import './experience.scss';

export const ExperienceConnectors = () => {
    return (
        <div id="experience-section">
            <div className="container-fluid">
                <div className="card text-center">
                    <div className="card-header">
                        <h1>Experiencia</h1>
                    </div>
                    <div className="card-body">
                        <ExperienceComponet/>
                    </div>
                </div>
            </div>
        </div>
        
    )
}