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
                            Cuento con más de 18 años de trayectoria en IT, liderando equipos técnicos, coordinando iniciativas de software y sosteniendo operaciones críticas en entornos de alta demanda.
                        </p>
                        <p className="about-text">
                            Mi foco actual está en roles de Technical Team Leader, Project Manager y Scrum Master: facilitación de ceremonias ágiles, priorización por impacto, alineación con stakeholders y mejora continua orientada a resultados de negocio.
                        </p>
                    </div>

                    <div className="about-cards">
                        <div className="about-card">
                            <div className="card-icon"><Users size={32} /></div>
                            <h3>Liderazgo Ágil</h3>
                            <p>Facilitación Scrum/Kanban, coaching de equipos y remoción de impedimentos.</p>
                        </div>

                        <div className="about-card">
                            <div className="card-icon"><Terminal size={32} /></div>
                            <h3>Base Técnica</h3>
                            <p>Experiencia en desarrollo y soporte IT para liderar decisiones técnicas con visión de producto.</p>
                        </div>

                        <div className="about-card">
                            <div className="card-icon"><Target size={32} /></div>
                            <h3>Gestión de Proyectos</h3>
                            <p>Planificación, gestión de riesgos, seguimiento de entregables y foco en valor medible.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
