import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../img/altilogo.png';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            let scrollLimit = 100;
            
            
            // Utiliser setTimeout pour introduire un délai avant la mise à jour de l'état isScrolled
            setTimeout(() => {
                setIsScrolled(scrollTop >= scrollLimit);
                console.log(scrollTop,'scroll')
                console.log(scrollLimit)
                scrollLimit = scrollLimit = 150 ? 10 : 100;
            }, 700); // Délai de 500 millisecondes avant la mise à jour de l'état
        };

        // Ajouter un écouteur d'événements de scroll lorsque le composant est monté
        window.addEventListener('scroll', handleScroll);

        // Retirer l'écouteur d'événements de scroll lors du démontage du composant
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Le tableau vide en tant que deuxième argument signifie que useEffect s'exécute une seule fois après le montage initial

    return (
        <nav className={`header ${isScrolled ? 'scrolled' : ''}`} style={{ position: 'sticky', top: 0, zIndex: 1 }}>
            {!isScrolled && (
                <div className='contact-container'>
                    <p>06 30 47 93 75</p>
                    <p>alticime@alticime-elagage.fr</p>
                </div>
            )}
            <div className={`header-center ${isScrolled ? 'scrolled' : ''}`}>
                <div className="logo-container">
                    <img src={logo} alt="Logo de l'entreprise" className="logo" style={{ width: isScrolled ? '70px' : '115px' }} />
                </div>
                <ul className="nav-links">
                    <li><Link to="/research-collections-others">ACCUEIL</Link></li>
                    <li><Link to="/research-collections-others">NOS PRESTATIONS</Link></li>
                    <li><Link to="/research-collections-others">DEMANDER UN DEVIS</Link></li>
                    <li><Link to="/research-collections-others">CONTACT</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
