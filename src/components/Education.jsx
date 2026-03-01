import './Education.css';
import { GraduationCap, Award } from 'lucide-react';

const educationText = {
    en: {
        sectionTitle: 'Education &',
        sectionTitleAccent: 'Certifications',
        academicTitle: 'Academic Education',
        degreeTitle: 'Associate Degree in Programming',
        institution: 'Teclab Technical Institute',
        date: '2020 - 2023',
        degreeDescription: 'Three-year technical program with a comprehensive software engineering approach. Key subjects: Object-Oriented Programming, Web Development (HTML, CSS, JS), Relational Databases, Architecture and Networks, Systems Analysis, and Agile Methodologies.',
        certTitle: 'Certifications',
        certs: [
            { title: 'Scrum Foundation Professional Certificate (SFPC)', institution: 'CertiProf' },
            { title: 'Fundamentals of Software Project Management', institution: 'Alkemy Labs' },
            { title: 'Agile Coach & Expert Scrum Master', institution: 'LinkedIn Learning / Education IT' },
            { title: 'English Certificate C1 Advanced', institution: 'International English Test' },
            { title: 'Information Security and IP Networks', institution: 'Fundacion Telefonica / Capacitacion IT' },
            { title: 'Cloud Computing & AWS Architecture Basics', institution: 'Introduccion Cloud' },
        ],
    },
    es: {
        sectionTitle: 'Educación &',
        sectionTitleAccent: 'Certificaciones',
        academicTitle: 'Educación Académica',
        degreeTitle: 'Técnico Superior en Programación',
        institution: 'Teclab Instituto Técnico Superior',
        date: '2020 - 2023',
        degreeDescription: 'Carrera técnica de 3 años con enfoque integral en ingeniería de software. Materias cursadas: Programación Orientada a Objetos, Desarrollo Web (HTML, CSS, JS), Bases de Datos Relacionales, Arquitectura y Redes, Análisis de Sistemas y Metodologías Ágiles.',
        certTitle: 'Certificaciones',
        certs: [
            { title: 'Scrum Foundation Professional Certificate (SFPC)', institution: 'CertiProf' },
            { title: 'Fundamentos para la Gestión de Proyectos de Software', institution: 'Alkemy Labs' },
            { title: 'Agile Coach & Scrum Master Experto', institution: 'LinkedIn Learning / Educación IT' },
            { title: 'English Certificate C1 Advanced', institution: 'International English Test' },
            { title: 'Seguridad Informática y Redes IP', institution: 'Fundación Telefónica / Capacitación IT' },
            { title: 'Cloud Computing & AWS Architecture Basics', institution: 'Introducción Cloud' },
        ],
    },
};

const Education = ({ language }) => {
    const t = educationText[language] ?? educationText.en;

    return (
        <section id="education" className="education section-padding">
            <div className="container">
                <h2 className="section-title">
                    {t.sectionTitle} <span className="gradient-text">{t.sectionTitleAccent}</span>
                </h2>

                <div className="edu-cert-container">
                    <div className="edu-section">
                        <div className="section-header">
                            <GraduationCap size={28} className="header-icon" />
                            <h3>{t.academicTitle}</h3>
                        </div>

                        <div className="edu-card">
                            <h4 className="edu-title">{t.degreeTitle}</h4>
                            <p className="edu-institution">{t.institution}</p>
                            <p className="edu-date">{t.date}</p>
                            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '0.75rem', lineHeight: '1.6' }}>
                                {t.degreeDescription}
                            </p>
                        </div>
                    </div>

                    <div className="cert-section">
                        <div className="section-header">
                            <Award size={28} className="header-icon" />
                            <h3>{t.certTitle}</h3>
                        </div>

                        <div className="cert-cards">
                            {t.certs.map((cert) => (
                                <div key={cert.title} className="edu-card">
                                    <h4 className="edu-title">{cert.title}</h4>
                                    <p className="edu-institution">{cert.institution}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
