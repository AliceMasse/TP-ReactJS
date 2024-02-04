import React, { useState } from 'react';
import './App.css';
import bot3 from "./assets/img/bot3.png";
import bot6 from "./assets/img/bot6.png";
import avion from "./assets/img/avion.png";
import am from "./assets/img/logoam2.png";
import AboutMe from './Aboutme.js';
//import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import cv from "file:///C:/Users/alice/OneDrive/HEXAGONE/DevMultiplatformes/tpportfolio/portfolio/src/doc/cv_alice_masse.pdf";

// Définition du composant App
function App() {

  const handleDownloadCV = () => {
    const anchor = document.createElement('a');
    anchor.href = cv;
    anchor.download = 'cv_alice_masse.pdf';
    anchor.click();
  };

  return (
    <div>
      <header>
        <div className="name">
          <span>Alice Massé</span>
        </div>

        {/* LOGO AM */}
        <div className="logo-image">
          <img src={am} alt="Logo AM" />
        </div>

        {/* NAVIGATION */}
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href={AboutMe}>About me</a></li>
            <li><a href="#thesis">Final thesis</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#fr">FR</a></li>
          </ul>
        </nav>
      </header>

      {/* FLEXBOX */}
      <div className="left-flex">
        {/* DATA SCIENTIST */}
        <div className="left-text">
          <span>Data</span>
          <br />
          <span>Scientist</span>

          {/* Boutons sous le texte "Scientist" */}
          <div className="left-buttons">
            <button onClick={() => window.location.href = "#contact"}>Hire Me</button>
            <button onClick={handleDownloadCV} download>Download CV</button>
          </div>
        </div>

        {/* Image à droite */}
        <div className="right-image">
          <img src={bot3} alt="Petit robot dit Hello" />
        </div>
      </div>

      {/* CONTACT */}
      <div id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2 className="contact-title"></h2>
            <span className="contact-text">Contact</span> 
              <span className="me-text"> Me</span>
                <span className="ponctuation-text">  !</span>

            <img src={bot6} alt="Petit robot avec un téléphone dans la main" />
          </div>
          <div className="contact-form">
            <form>
              <label htmlFor="name">Votre Nom</label>
              <input type="text" id="name" name="name" />

              <label htmlFor="email">Votre Email</label>
              <input type="email" id="email" name="email" />

              <label htmlFor="message">Votre Message</label>
              <textarea id="message" name="message"></textarea>

              <button type="submit">
                Send it 
                <img src={avion} alt="Avion en papier" />
              </button>
            </form>
          </div>
        </div>
      </div>

        </div>
  );
}

export default App;
