import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route,Navigate  } from 'react-router-dom';

import { HomeConnectors } from './app/connectors/home';
import { AboutConnectors } from './app/connectors/about';
import { ExperienceConnectors } from './app/connectors/experience';
import { PortafolioConnectors } from './app/connectors/portafolio';
import { LanguageConnectors } from './app/connectors/language';
import { ContactConnectors } from './app/connectors/contact';
import {ScrollToTopButton} from './app/components/scrollToTopButton';
import { OptionsComponent } from './app/components/optionsComponent';
function App() {
  
  return (
    <Router>
    <div className="App">
      <div className="App-header">
        <OptionsComponent/>
      </div>
      <div className="App-body">
        <Routes>
          <Route path="/" element={
            <>
              <HomeConnectors/>
              <AboutConnectors />
              <LanguageConnectors/>
              <PortafolioConnectors />
              <ExperienceConnectors />
            </>} />
          <Route path="/contact" element={<ContactConnectors />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <div className="App-footer">
        <ScrollToTopButton/>
      </div>
    </div>
    </Router>
  );
}

export default App;
