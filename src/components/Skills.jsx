import './Skills.css';
import { Code2, Database, Layout, Server, Settings, CheckCircle } from 'lucide-react';

import { skillsInfo as skillsData } from '../data/portfolioData';

const Skills = () => {
    return (
        <section id="skills" className="skills section-padding">
            <div className="container">
                <h2 className="section-title">
                    Mis <span className="gradient-text">Habilidades</span>
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
