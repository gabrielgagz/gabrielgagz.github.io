import './Experience.css';
import { Briefcase, Calendar } from 'lucide-react';

import { getPortfolioData } from '../data/portfolioData';

const experienceText = {
    en: {
        title: 'Professional',
        titleAccent: 'Experience',
    },
    es: {
        title: 'Trayectoria',
        titleAccent: 'Profesional',
    },
};

const Experience = ({ language }) => {
    const t = experienceText[language] ?? experienceText.en;
    const { experiencesInfo: experiences } = getPortfolioData(language);

    return (
        <section id="experience" className="experience section-padding">
            <div className="container">
                <h2 className="section-title">
                    {t.title} <span className="gradient-text">{t.titleAccent}</span>
                </h2>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div key={exp.id} className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content" data-index={index + 1}>
                                <div className="timeline-header">
                                    <h3 className="timeline-role">{exp.role}</h3>
                                    <div className="timeline-company">
                                        <Briefcase size={16} />
                                        <span>{exp.company}</span>
                                    </div>
                                    <div className="timeline-duration">
                                        <Calendar size={16} />
                                        <span>{exp.duration}</span>
                                    </div>
                                </div>

                                <p className="timeline-description">
                                    {exp.description}
                                </p>

                                <div className="timeline-tags">
                                    {exp.skills.map((skill, idx) => (
                                        <span key={idx} className="timeline-tag">{skill}</span>
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

export default Experience;
