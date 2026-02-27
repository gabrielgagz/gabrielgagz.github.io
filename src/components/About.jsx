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
                            Tengo más de 3 años de experiencia trabajando con metodologías ágiles
                            (Scrum y Kanban), enfocándome en la autogestión y el trabajo en equipo
                            para lograr una eficiencia óptima y alcanzar objetivos.
                        </p>
                        <p className="about-text">
                            Como desarrollador y coordinador de proyectos, disfruto crear soluciones de software
                            innovadoras. Poseo habilidades en el ingreso de datos asegurando siempre su calidad e
                            integridad. Mi enfoque principal es guiar equipos técnicos hacia el éxito.
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
