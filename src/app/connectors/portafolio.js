import React from 'react';
import { PortafolioComponet } from '../components/portafolioComponent';
//import './portafolio.scss';
export const PortafolioConnectors = () => {
    return (
        <div id="portafolio-section">
            <div className="container-fluid">
                <div className="card text-center">
                    <div className="card-header">
                        <h1>PORTAFOLIO</h1>
                    </div>
                    <div className="card-body">
                        <PortafolioComponet/>
                    </div>
                </div>
            </div>
        </div>
    )
}