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
                            Cuento con más de 15 años de trayectoria en el mundo IT, abarcando áreas clave como el desarrollo web, seguridad informática, Cloud y Data.
                        </p>
                        <p className="about-text">
                            Actualmente, mi enfoque principal está centrado en el liderazgo de equipos técnicos a través de metodologías ágiles (Scrum y Kanban), guiando a los profesionales hacia la autogestión, la eficiencia óptima y la consecución de objetivos estratégicos.
                        </p>
                    </div>

                    <div className="about-cards">
                        <div className="about-card">
                            <div className="card-icon"><Users size={32} /></div>
                            <h3>Liderazgo Ágil</h3>
                            <p>Experiencia en Scrum/Kanban y coordinación de equipos eficientes.</p>
                        </div>

                        <div className="about-card">
                            <div className="card-icon"><Terminal size={32} /></div>
                            <h3>Desarrollo</h3>
                            <p>Creación de software enfocado en resolución de problemas reales.</p>
                        </div>

                        <div className="about-card">
                            <div className="card-icon"><Target size={32} /></div>
                            <h3>Gestión de Proyectos</h3>
                            <p>Planificación, seguimiento QA y cumplimiento de objetivos orientados al negocio.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
