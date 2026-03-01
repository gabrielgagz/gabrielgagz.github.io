import './Skills.css';
import { Code2, Database, Layout, Server, Settings, CheckCircle } from 'lucide-react';

import { getPortfolioData } from '../data/portfolioData';

const skillsText = {
    en: {
        title: 'Core',
        titleAccent: 'Skills',
    },
    es: {
        title: 'Mis',
        titleAccent: 'Habilidades',
    },
};

const Skills = ({ language }) => {
    const t = skillsText[language] ?? skillsText.en;
    const { skillsInfo: skillsData } = getPortfolioData(language);

    return (
        <section id="skills" className="skills section-padding">
            <div className="container">
                <h2 className="section-title">
                    {t.title} <span className="gradient-text">{t.titleAccent}</span>
                </h2>

                <div className="skills-grid">
                    {skillsData.map((skillGroup, index) => (
                        <div key={index} className="skill-category">
                            <h3 className="category-title">{skillGroup.category}</h3>
                            <div className="skills-list">
                                {skillGroup.items.map((skill, idx) => (
                                    <div key={idx} className="skill-item">
                                        <CheckCircle size={16} className="skill-icon" />
                                        <span>{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
