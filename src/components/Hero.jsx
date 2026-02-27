import './Hero.css';
import { ChevronRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="hero container">
            <div className="hero-content">
                <h2 className="hero-subtitle">Hola, soy</h2>
                <h1 className="hero-title">Gabriel Gomez</h1>
                <h3 className="hero-role gradient-text">Agile / IT Project Coordinator | Software Developer</h3>

                <p className="hero-description">
                    Coordinador de proyectos y desarrollador de software con experiencia en metodologías ágiles
                    y resolución de problemas. Me apasiona crear soluciones eficientes y guiar equipos
                    hacia el éxito técnico y organizativo.
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
                <div className="hero-image-placeholder">
                    <span className="gradient-text">&lt;G/&gt;</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
