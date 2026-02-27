import './Footer.css';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <h2 className="footer-logo gradient-text">Gabriel Gomez</h2>
                        <p className="footer-slogan">
                            Liderando equipos ágiles y construyendo soluciones IT de alto impacto.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h3>Enlaces Rápidos</h3>
                        <div className="footer-nav">
                            <a href="#home">Inicio</a>
                            <a href="#about">Sobre Mí</a>
                            <a href="#experience">Experiencia</a>
                            <a href="#skills">Habilidades</a>
                        </div>
                    </div>

                    <div className="footer-contact">
                        <h3>Conéctate</h3>
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
                        &copy; {new Date().getFullYear()} Gabriel Gomez. Todos los derechos reservados.
                    </p>
                    <p className="footer-made-with">
                        Desarrollado con <Heart size={14} className="heart-icon" /> hacia la tecnología
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
