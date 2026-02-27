import './Hero.css';
import { ChevronRight, Download } from 'lucide-react';

import profilePic from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section id="home" className="hero container">
            <div className="hero-content">
                <h2 className="hero-subtitle">Hola, soy</h2>
                <h1 className="hero-title">Gabriel Gomez</h1>
                <h3 className="hero-role gradient-text">Agile / IT Project Coordinator | Software Developer</h3>

                <p className="hero-description">
                    Profesional IT con más de 15 años de experiencia técnica integral.
                    Actualmente enfocado en el liderazgo de equipos a través de metodologías ágiles,
                    transformando necesidades complejas en soluciones eficientes y escalables.
                </p>

                <div className="hero-cta">
                    <a href="#about" className="cta-button primary">
                        Conoce mi trabajo <ChevronRight size={20} />
                    </a>
                    <a href="#contact" className="cta-button secondary">
                        Contactar
                    </a>
                </div>
            </div>

            <div className="hero-visual">
                <div className="glow-orb"></div>
                <div className="hero-image-container">
                    <img src={profilePic} alt="Gabriel Gomez" className="hero-profile-pic" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
