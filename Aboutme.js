// Importation des modules nécessaires depuis la bibliothèque React
import React from 'react';

// Importation des styles définis dans le fichier App.css
import './App.css';

// Importation du logo de l'entreprise AM
import am from "./assets/img/logoam2.png";

// Importation de l'image du petit robot
import bot4 from "./assets/img/bot4.png";

// Importation du composant AboutMe depuis le fichier Aboutme.js
import AboutMe from './Aboutme.js';

// Définition du composant principal, App
function AboutMe() {
  // Rendu du composant AboutMe
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
            <li><a href={AboutMe}>About me</a></li>
            <li><a href="#thesis">Final thesis</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#fr">FR</a></li>
          </ul>
        </nav>
      </header>

      {/* Section principale avec mise en page flexbox */}
      <div className="left-flex">
        {/* Section "About Me" à gauche */}
        <div className="left-text">
          <span>About me</span>
          <p className="about-description">
          Welcome to my portfolio ! I am Alice Massé, a Data Scientist passionate about data exploration and analysis.
          {/* Texte de description */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* Image à droite */}
        <div className="botimage">
          <img src={bot4} alt="Petit robot avec des étoiles" />
        </div>
      </div>

      {/* Section vidéo incorporée */}
      <div className="video-container">
        {/* Cadre pour intégrer la vidéo YouTube */}
        <iframe
          src="https://www.youtube.com/embed/FGMAFvrg5Qw?si=zsewTx1GvnKQBpal"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      {/* Je n'ai pas réussi à faire la base de donnée supabase dans mon code, c'est pour cela que cette partie est commenté */}
      {/*
        export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]
        export interface Database {
          public: {
            Tables: {
              movies: {
                Row: {               // the data expected from .select()
                  id: number
                  name: string
                  data: Json | null
                }
                Insert: {            // the data to be passed to .insert()
                  id?: never         // generated columns must not be supplied
                  name: string       // `not null` columns with no default must be supplied
                  data?: Json | null // nullable columns can be omitted
                }
                Update: {            // the data to be passed to .update()
                  id?: never
                  name?: string      // `not null` columns are optional on .update()
                  data?: Json | null
                }
              }
            }
          }
        }
      */}
    </div>
  );
}

// Exportation du composant App comme composant par défaut
export default AboutMe;
