import './About.css';
import { Terminal, Users, Target, Languages } from 'lucide-react';

const aboutText = {
    en: {
        title: 'About',
        titleAccent: 'Me',
        paragraph1: 'I have over 18 years of IT experience, progressing from hands-on software development to leading technical teams and managing complex software initiatives in high-demand environments.',
        paragraph2: 'Currently, I focus on Technical Team Leadership and Project Management. I coordinate multidisciplinary teams to digitalize manual processes, define technical architectures, and oversee the execution of software projects to ensure they solve real business problems.',
        card1Title: 'Team Leadership',
        card1Body: 'I lead engineering teams by structuring daily workflows, establishing clear goals, and actively removing blockers. I focus on team autonomy, direct coordination, and ensuring stable release cycles.',
        card2Title: 'Technical Foundation',
        card2Body: 'With deep roots in software development and IT operations, I actively guide architecture, review implementations, and design system integrations. I translate complex business needs into robust technical solutions.',
        card3Title: 'Delivery Management',
        card3Body: 'I oversee the entire software lifecycle from scoping to deployment. I define clear roadmaps, manage execution risks, and coordinate cross-functional efforts to deliver projects on time.',
        languagesLabel: 'Languages',
        langNative: 'Spanish (Native)',
        langAdvanced: 'English (Advanced C1)'
    },
    es: {
        title: 'Sobre',
        titleAccent: 'Mí',
        paragraph1: 'Cuento con más de 18 años de trayectoria en IT, evolucionando desde el desarrollo de software hasta liderar equipos técnicos y gestionar iniciativas complejas en entornos de alta demanda.',
        paragraph2: 'Actualmente me desempeño como Technical Team Leader y Project Manager. Coordino equipos multidisciplinarios para digitalizar procesos manuales, definir arquitecturas técnicas y supervisar la ejecución de proyectos de software asegurando que resuelvan problemas reales de negocio.',
        card1Title: 'Liderazgo de Equipos',
        card1Body: 'Lidero equipos de ingeniería estructurando el trabajo diario, estableciendo objetivos claros y removiendo bloqueos operativos. Me enfoco en la autonomía del equipo, la coordinación directa y en asegurar ciclos de entrega estables.',
        card2Title: 'Base Técnica',
        card2Body: 'Con raíces profundas en desarrollo y operaciones IT, guío activamente decisiones de arquitectura, reviso implementaciones y diseño integraciones de sistemas. Traduzco necesidades de negocio complejas en soluciones técnicas robustas.',
        card3Title: 'Gestión de Entregas',
        card3Body: 'Superviso el ciclo de vida del software desde la concepción hasta el despliegue. Defino hojas de ruta (roadmaps), gestiono riesgos de ejecución y coordino esfuerzos técnicos para entregar proyectos en tiempo y forma.',
        languagesLabel: 'Idiomas',
        langNative: 'Español (Nativo)',
        langAdvanced: 'Inglés (Avanzado C1)'
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
                        
                        <div className="about-languages">
                            <h4 className="languages-title">
                                <Languages size={18} /> {t.languagesLabel}
                            </h4>
                            <div className="language-badges">
                                <span className="lang-badge native">{t.langNative}</span>
                                <span className="lang-badge advanced">{t.langAdvanced}</span>
                            </div>
                        </div>
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
