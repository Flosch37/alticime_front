import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h2>ALTICIME</h2>
          <p>29 Rue du Muguet<br/>37230 Luynes</p>
          <p>06 30 47 93 75</p>
          <p>alticime@alticime-elagage.fr</p>
        </div>
        <div className="footer-section">
          <h2>À PROPOS</h2>
          <ul>
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Contactez-nous</a></li>
            <li><a href="#">Mentions légales</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>SUIVEZ-NOUS</h2>
          <p>Inclure ici les icônes ou liens vers les réseaux sociaux</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
