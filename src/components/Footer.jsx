import './Footer.css';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const footerText = {
    en: {
        slogan: 'Leading agile teams and building high-impact IT solutions.',
        quickLinks: 'Quick Links',
        home: 'Home',
        about: 'About',
        experience: 'Experience',
        skills: 'Skills',
        connect: 'Connect',
        rights: 'All rights reserved.',
        madeWith: 'Built with',
        ending: 'for technology.',
    },
    es: {
        slogan: 'Liderando equipos ágiles y construyendo soluciones IT de alto impacto.',
        quickLinks: 'Enlaces Rápidos',
        home: 'Inicio',
        about: 'Sobre Mí',
        experience: 'Experiencia',
        skills: 'Habilidades',
        connect: 'Conéctate',
        rights: 'Todos los derechos reservados.',
        madeWith: 'Desarrollado con',
        ending: 'hacia la tecnología',
    },
};

const Footer = ({ language }) => {
    const t = footerText[language] ?? footerText.en;

    return (
        <footer id="contact" className="footer">
            <div className="container footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <h2 className="footer-logo gradient-text">Gabriel Gomez</h2>
                        <p className="footer-slogan">
                            {t.slogan}
                        </p>
                    </div>

                    <div className="footer-links">
                        <h3>{t.quickLinks}</h3>
                        <div className="footer-nav">
                            <a href="#home">{t.home}</a>
                            <a href="#about">{t.about}</a>
                            <a href="#experience">{t.experience}</a>
                            <a href="#skills">{t.skills}</a>
                        </div>
                    </div>

                    <div className="footer-contact">
                        <h3>{t.connect}</h3>
                        <div className="footer-social">
                            <a href="https://github.com/gabrielgagz" target="_blank" rel="noopener noreferrer" className="social-link">
                                <Github size={20} />
                                <span>GitHub</span>
                            </a>
                            <a href="https://linkedin.com/in/gabrielgagz" target="_blank" rel="noopener noreferrer" className="social-link">
                                <Linkedin size={20} />
                                <span>LinkedIn</span>
                            </a>
                            <a href="mailto:g.a.gomez@gmail.com" className="social-link">
                                <Mail size={20} />
                                <span>g.a.gomez@gmail.com</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>
                        &copy; {new Date().getFullYear()} Gabriel Gomez. {t.rights}
                    </p>
                    <p className="footer-made-with">
                        {t.madeWith} <Heart size={14} className="heart-icon" /> {t.ending}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
