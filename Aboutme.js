import React from 'react';
import './App.css';
import am from "./assets/img/logoam2.png";
import bot4 from "./assets/img/bot4.png";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import AboutMe from './Aboutme.js';


function App() {
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
            {/* ABOUT ME */}
            <div className="left-text">
             <span>About</span>
              <br />
              <span>Me</span>
              <p className="about-description">
                Bienvenue sur mon portfolio ! Je suis Alice Massé, un Data Scientist passionné par l'exploration et l'analyse des données.</p>
            </div>
            {/* Image à droite */}
            <div className="right-image">
                <img src={bot4} alt="Petit robot dit Hello" />
                </div>
                
            <div className="video-container">
                <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/FGMAFvrg5Qw?si=zsewTx1GvnKQBpal"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
            </div>
        </div>
    </div>     
  );
}

export default App;
