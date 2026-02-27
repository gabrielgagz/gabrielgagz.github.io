import './Education.css';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="education section-padding">
            <div className="container">
                <h2 className="section-title">
                    Educación & <span className="gradient-text">Certificaciones</span>
                </h2>

                <div className="edu-cert-container">
                    <div className="edu-section">
                        <div className="section-header">
                            <GraduationCap size={28} className="header-icon" />
                            <h3>Educación Académica</h3>
                        </div>

                        <div className="edu-card">
                            <h4 className="edu-title">Técnico Superior en Programación</h4>
                            <p className="edu-institution">Teclab Instituto Técnico Superior</p>
                            <p className="edu-date">2020 - 2023</p>
                        </div>
                    </div>

                    <div className="cert-section">
                        <div className="section-header">
                            <Award size={28} className="header-icon" />
                            <h3>Certificaciones</h3>
                        </div>

                        <div className="cert-cards">
                            <div className="edu-card">
                                <h4 className="edu-title">Fundamentos para la Gestión de Proyectos de Software</h4>
                                <p className="edu-institution">Alkemy Labs</p>
                            </div>

                            <div className="edu-card">
                                <h4 className="edu-title">Becoming an Agile Coach</h4>
                                <p className="edu-institution">LinkedIn Learning</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
