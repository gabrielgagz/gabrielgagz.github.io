import './Navbar.css';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navText = {
    en: {
        about: 'About',
        experience: 'Experience',
        skills: 'Skills',
        languageAria: 'Language selector',
    },
    es: {
        about: 'Sobre Mí',
        experience: 'Experiencia',
        skills: 'Habilidades',
        languageAria: 'Selector de idioma',
    },
};

const Navbar = ({ language, onLanguageChange }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const t = navText[language] ?? navText.en;

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container container">
                <div className="navbar-logo">
                    <a href="#home" className="gradient-text">&lt;Gabriel /&gt;</a>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-links">
                    <a href="#about" className="nav-link">{t.about}</a>
                    <a href="#experience" className="nav-link">{t.experience}</a>
                    <a href="#skills" className="nav-link">{t.skills}</a>
                </div>

                <div className="navbar-social">
                    <div className="language-switch" role="group" aria-label={t.languageAria}>
                        <button
                            type="button"
                            className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                            onClick={() => onLanguageChange('en')}
                        >
                            EN
                        </button>
                        <button
                            type="button"
                            className={`lang-btn ${language === 'es' ? 'active' : ''}`}
                            onClick={() => onLanguageChange('es')}
                        >
                            ES
                        </button>
                    </div>
                    <a href="https://github.com/gabrielgagz" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github size={20} />
                    </a>
                    <a href="https://linkedin.com/in/gabrielgagz" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:g.a.gomez@gmail.com" aria-label="Email">
                        <Mail size={20} />
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div className="navbar-toggle" onClick={toggleMenu}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="mobile-menu">
                    <a href="#about" className="mobile-link" onClick={toggleMenu}>{t.about}</a>
                    <a href="#experience" className="mobile-link" onClick={toggleMenu}>{t.experience}</a>
                    <a href="#skills" className="mobile-link" onClick={toggleMenu}>{t.skills}</a>
                    <div className="mobile-language-switch" role="group" aria-label={t.languageAria}>
                        <button
                            type="button"
                            className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                            onClick={() => onLanguageChange('en')}
                        >
                            EN
                        </button>
                        <button
                            type="button"
                            className={`lang-btn ${language === 'es' ? 'active' : ''}`}
                            onClick={() => onLanguageChange('es')}
                        >
                            ES
                        </button>
                    </div>
                    <div className="mobile-social">
                        <a href="https://github.com/gabrielgagz" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
                        <a href="https://linkedin.com/in/gabrielgagz" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
                        <a href="mailto:g.a.gomez@gmail.com"><Mail size={20} /></a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
