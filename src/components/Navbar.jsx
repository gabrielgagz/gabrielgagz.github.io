import './Navbar.css';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                    <a href="#about" className="nav-link">Sobre Mí</a>
                    <a href="#experience" className="nav-link">Experiencia</a>
                    <a href="#skills" className="nav-link">Habilidades</a>
                </div>

                <div className="navbar-social">
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
                    <a href="#about" className="mobile-link" onClick={toggleMenu}>Sobre Mí</a>
                    <a href="#experience" className="mobile-link" onClick={toggleMenu}>Experiencia</a>
                    <a href="#skills" className="mobile-link" onClick={toggleMenu}>Habilidades</a>
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
