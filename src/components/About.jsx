import './About.css';
import { Terminal, Users, Target } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="about section-padding">
            <div className="container">
                <h2 className="section-title">
                    Sobre <span className="gradient-text">Mí</span>
                </h2>

                <div className="about-content">
                    <div className="about-text-content">
                        <p className="about-text">
                            Cuento con más de 18 años de trayectoria en IT liderando equipos, coordinando iniciativas tecnológicas y gestionando la entrega de proyectos en entornos de alta demanda operativa.
                        </p>
                        <p className="about-text">
                            Mi foco actual está en roles de Team Leader, Project Manager y Scrum Master: facilitación de ceremonias ágiles, alineación con stakeholders, priorización de backlog, gestión de riesgos y mejora continua orientada a resultados.
                        </p>
                    </div>

                    <div className="about-cards">
                        <div className="about-card">
                            <div className="card-icon"><Users size={32} /></div>
                            <h3>Liderazgo Ágil</h3>
                            <p>Facilitación de Scrum/Kanban, coaching de equipos y gestión de impedimentos.</p>
                        </div>

                        <div className="about-card">
                            <div className="card-icon"><Terminal size={32} /></div>
                            <h3>Base Técnica</h3>
                            <p>Background en desarrollo y soporte IT para decidir con criterio técnico y de negocio.</p>
                        </div>

                        <div className="about-card">
                            <div className="card-icon"><Target size={32} /></div>
                            <h3>Gestión de Proyectos</h3>
                            <p>Planificación, seguimiento de entregables, coordinación de stakeholders y foco en valor.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
