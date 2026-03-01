import './About.css';
import { Terminal, Users, Target } from 'lucide-react';

const aboutText = {
    en: {
        title: 'About',
        titleAccent: 'Me',
        paragraph1: 'I have more than 18 years of IT experience leading technical teams, coordinating software initiatives, and sustaining critical operations in high-demand environments.',
        paragraph2: 'My current focus is on Technical Team Leader, Project Manager, and Scrum Master roles: facilitating agile ceremonies, prioritizing by impact, aligning stakeholders, and driving continuous improvement toward business outcomes.',
        card1Title: 'Agile Leadership',
        card1Body: 'I run Scrum and Kanban ceremonies end-to-end, align team commitments with sprint goals, and remove blockers fast. I coach teams on ownership, collaboration, and continuous improvement to keep delivery stable and predictable.',
        card2Title: 'Technical Foundation',
        card2Body: 'I combine hands-on software development and senior IT support experience to guide architecture and implementation decisions. This technical depth helps me bridge engineering details with product and business priorities.',
        card3Title: 'Project Management',
        card3Body: 'I manage project planning, risk control, priority setting, and stakeholder communication with clear execution follow-up. My focus is measurable outcomes, on-time delivery, and sustained process quality.',
    },
    es: {
        title: 'Sobre',
        titleAccent: 'Mí',
        paragraph1: 'Cuento con más de 18 años de trayectoria en IT, liderando equipos técnicos, coordinando iniciativas de software y sosteniendo operaciones críticas en entornos de alta demanda.',
        paragraph2: 'Mi foco actual está en roles de Technical Team Leader, Project Manager y Scrum Master: facilitación de ceremonias ágiles, priorización por impacto, alineación con stakeholders y mejora continua orientada a resultados de negocio.',
        card1Title: 'Liderazgo Ágil',
        card1Body: 'Lidero ceremonias Scrum y Kanban de punta a punta, alineando compromisos del equipo con objetivos de sprint y removiendo bloqueos con rapidez. Acompaño a los equipos en autogestión, colaboración y mejora continua para sostener entregas previsibles.',
        card2Title: 'Base Técnica',
        card2Body: 'Combino experiencia práctica en desarrollo de software y soporte IT senior para guiar decisiones de arquitectura e implementación. Esa base técnica me permite traducir necesidades de producto y negocio a soluciones viables.',
        card3Title: 'Gestión de Proyectos',
        card3Body: 'Gestiono planificación, riesgos, prioridades y comunicación con stakeholders mediante seguimiento claro de ejecución. Mi foco está en resultados medibles, cumplimiento de entregables y mejora sostenida del proceso.',
    },
};

const About = ({ language }) => {
    const t = aboutText[language] ?? aboutText.en;

    return (
        <section id="about" className="about section-padding">
            <div className="container">
                <h2 className="section-title">
                    {t.title} <span className="gradient-text">{t.titleAccent}</span>
                </h2>

                <div className="about-content">
                    <div className="about-text-content">
                        <p className="about-text">
                            {t.paragraph1}
                        </p>
                        <p className="about-text">
                            {t.paragraph2}
                        </p>
                    </div>

                    <div className="about-cards">
                        <div className="about-card">
                            <div className="card-icon"><Users size={32} /></div>
                            <h3>{t.card1Title}</h3>
                            <p>{t.card1Body}</p>
                        </div>

                        <div className="about-card">
                            <div className="card-icon"><Terminal size={32} /></div>
                            <h3>{t.card2Title}</h3>
                            <p>{t.card2Body}</p>
                        </div>

                        <div className="about-card">
                            <div className="card-icon"><Target size={32} /></div>
                            <h3>{t.card3Title}</h3>
                            <p>{t.card3Body}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
