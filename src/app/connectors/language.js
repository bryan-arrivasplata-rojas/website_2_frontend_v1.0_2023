import React from 'react';
import { LanguageComponet } from '../components/languageComponent';
//import './language.scss';
export const LanguageConnectors = () => {
    return (
        <div id="language-section">
            <div className="container-fluid">
                <div className="card text-center">
                    <div className="card-header">
                        <h1>LANGUAGE</h1>
                    </div>
                    <div className="card-body">
                        <LanguageComponet/>
                    </div>
                </div>
            </div>
        </div>
    )
}