import './Hero.css';
import { ChevronRight } from 'lucide-react';

import profilePic from '../assets/profile.jpg';

const heroText = {
    en: {
        subtitle: 'Hi, I am',
        description: 'IT professional with more than 18 years leading development and operations teams, managing end-to-end projects and facilitating agile frameworks (Scrum/Kanban). I combine technical leadership with executive management to align stakeholders, improve predictability, and ensure value delivery.',
        primaryCta: 'See my work',
        secondaryCta: 'Contact',
    },
    es: {
        subtitle: 'Hola, soy',
        description: 'Profesional IT con más de 18 años liderando equipos de desarrollo y operaciones, gestionando proyectos end-to-end y facilitando marcos ágiles (Scrum/Kanban). Combino liderazgo técnico con gestión ejecutiva para alinear stakeholders, mejorar predictibilidad y asegurar entrega de valor.',
        primaryCta: 'Conoce mi trabajo',
        secondaryCta: 'Contactar',
    },
};

const Hero = ({ language }) => {
    const t = heroText[language] ?? heroText.en;

    return (
        <section id="home" className="hero container">
            <div className="hero-content">
                <h2 className="hero-subtitle">{t.subtitle}</h2>
                <h1 className="hero-title">Gabriel Gomez</h1>
                <h3 className="hero-role gradient-text">Technical Team Leader | Project Manager | Scrum Master</h3>

                <p className="hero-description">
                    {t.description}
                </p>

                <div className="hero-cta">
                    <a href="#about" className="cta-button primary">
                        {t.primaryCta} <ChevronRight size={20} />
                    </a>
                    <a href="#contact" className="cta-button secondary">
                        {t.secondaryCta}
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
