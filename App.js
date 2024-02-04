// Importation des modules nécessaires depuis la bibliothèque React
import React, { useState } from 'react';

// Importation des styles définis dans le fichier App.css
import './App.css';

// Importation des images nécessaires pour les éléments visuels du site
import bot3 from "./assets/img/bot3.png";
import bot6 from "./assets/img/bot6.png";
import avion from "./assets/img/avion.png";
import am from "./assets/img/logoam2.png";

// Importation du composant AboutMe depuis le fichier Aboutme.js
import AboutMe from './Aboutme.js';

// Importation du CV en tant que fichier local
import cv from "file:///C:/Users/alice/OneDrive/HEXAGONE/DevMultiplatformes/tpportfolio/portfolio/src/doc/cv_alice_masse.pdf";

// Définition du composant principal, App
function App() {
  // Fonction pour gérer le téléchargement du CV (la partie téléchargement du CV a été faite avec chatGPT)
  const handleDownloadCV = () => {
    // Création d'un élément ancre pour le téléchargement du fichier
    const anchor = document.createElement('a');
    // Attribution du lien du CV à l'attribut href de l'ancre
    anchor.href = cv;
    // Attribution du nom du fichier pour le téléchargement
    anchor.download = 'cv_alice_masse.pdf';
    // Simuler le clic sur l'ancre pour déclencher le téléchargement
    anchor.click();
  };

  // Rendu du composant App
  return (
    <div>
      {/* En-tête du site */}
      <header>
        <div className="name">
          <span>Alice Massé</span>
        </div>

        {/* Logo AM */}
        <div className="logo-image">
          <img src={am} alt="Logo AM" />
        </div>

        {/* Navigation du site */}
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            {/* Lien vers la page AboutMe mais je 'ai pas réussi à le faire fonctionner */}
            <li><a href={AboutMe}>About me</a></li>
            <li><a href="#thesis">Final thesis</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#fr">FR</a></li>
          </ul>
        </nav>
      </header>

      {/* Section principale avec mise en page flexbox */}
      <div className="left-flex">
        {/* Texte "Data Scientist" à gauche */}
        <div className="left-text">
          <span>Data</span>
          <br />
          <span>Scientist</span>

          {/* Boutons sous le texte "Data Scientist" */}
          <div className="left-buttons">
            {/* Bouton pour rediriger vers la section de contact */}
            <button onClick={() => window.location.href = "#contact"}>Hire Me</button>
            {/* Bouton pour déclencher le téléchargement du CV */}
            <button onClick={handleDownloadCV} download>Download CV</button>
          </div>
        </div>

        {/* Image à droite (petit robot) */}
        <div className="right-image">
          <img src={bot3} alt="Petit robot qui dit Hello" />
        </div>
      </div>

      {/* Section de contact */}
      <div id="contact" className="contact-section">
        <div className="contact-container">
          {/* Informations de contact à droite */}
          <div className="contact-info">
            <h2 className="contact-title"></h2>
            <span className="contact-text">Contact</span> 
            <span className="me-text"> Me</span>
            <span className="ponctuation-text">  !</span>

            {/* Image d'un petit robot avec un téléphone dans la main */}
            <img src={bot6} alt="Petit robot avec un téléphone dans la main" />
          </div>

          {/* Formulaire de contact à droite */}
          <div className="contact-form">
            <form>
              <label htmlFor="name">Votre Nom</label>
              {/* Champ de saisie pour le prénom + nom */}
              <input type="text" id="name" name="name" />

              <label htmlFor="email">Votre Email</label>
              {/* Champ de saisie pour l'email */}
              <input type="email" id="email" name="email" />

              <label htmlFor="message">Votre Message</label>
              {/* Zone de texte pour le message */}
              <textarea id="message" name="message"></textarea>

              {/* Bouton d'envoi du formulaire avec une icône d'avion en papier */}
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

// Exportation du composant App comme composant par défaut
export default App;
