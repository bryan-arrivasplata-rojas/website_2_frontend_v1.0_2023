import React from 'react';
import { ContactComponent } from '../components/contact/contactComponent';
export const ContactConnectors = () => {
    return (
        <div id="contact-section">
            <div className="container-fluid">
                <div className="card text-center">
                    <div className="card-header">
                        <h1>CONTACTO</h1>
                    </div>
                    <div className="card-body">
                        <ContactComponent/>
                    </div>
                </div>
            </div>
        </div>
    )
}