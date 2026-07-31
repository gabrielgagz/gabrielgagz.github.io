import './Projects.css';
import { getPortfolioData } from '../data/portfolioData';
import { Briefcase, Code, Rocket } from 'lucide-react';

import hugoImg from '../assets/projects/hugo.png';
import chatlackImg from '../assets/projects/chatlack.png';
import gestorImg from '../assets/projects/gestor.png';

const imagesMap = {
    'hugo.png': hugoImg,
    'chatlack.png': chatlackImg,
    'gestor.png': gestorImg,
};

const Projects = ({ language }) => {
    const data = getPortfolioData(language);
    const projects = data.projectsInfo || [];

    if (projects.length === 0) return null;

    const sectionTitle = language === 'es' ? 'Proyectos' : 'Featured';
    const sectionTitleAccent = language === 'es' ? 'Destacados' : 'Work';

    return (
        <section id="projects" className="projects section-padding">
            <div className="container">
                <h2 className="section-title">
                    {sectionTitle} <span className="gradient-text">{sectionTitleAccent}</span>
                </h2>
                
                <div className="projects-grid">
                    {projects.map(project => (
                        <div key={project.id} className="project-card">
                            <div className="project-image-wrapper">
                                <img 
                                    src={imagesMap[project.image]} 
                                    alt={project.title} 
                                    className="project-image"
                                />
                            </div>
                            
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <div className="project-role">
                                    <Rocket size={16} />
                                    <span>{project.role}</span>
                                </div>
                                <p className="project-description">
                                    {project.description}
                                </p>
                                <div className="project-tech">
                                    {project.tech.map(t => (
                                        <span key={t} className="tech-tag">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
