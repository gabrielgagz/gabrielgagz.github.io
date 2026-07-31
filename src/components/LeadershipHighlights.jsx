import './LeadershipHighlights.css';
import { Target, Users, Zap, Briefcase, GitPullRequest, Code2 } from 'lucide-react';

const highlightData = {
    en: [
        { icon: <Briefcase size={28} />, title: '18+', subtitle: 'Years IT Experience' },
        { icon: <Users size={28} />, title: '[X]+', subtitle: 'Team Members Led' },
        { icon: <GitPullRequest size={28} />, title: 'Agile', subtitle: 'Delivery & Scrum' },
        { icon: <Target size={28} />, title: '[X]+', subtitle: 'Projects Delivered' },
        { icon: <Zap size={28} />, title: '100%', subtitle: 'Digital Transformation' },
        { icon: <Code2 size={28} />, title: 'Tech', subtitle: 'Leadership' }
    ],
    es: [
        { icon: <Briefcase size={28} />, title: '18+', subtitle: 'Años Exp. en IT' },
        { icon: <Users size={28} />, title: '[X]+', subtitle: 'Personas Lideradas' },
        { icon: <GitPullRequest size={28} />, title: 'Agile', subtitle: 'Delivery & Scrum' },
        { icon: <Target size={28} />, title: '[X]+', subtitle: 'Proyectos Entregados' },
        { icon: <Zap size={28} />, title: '100%', subtitle: 'Transformación Digital' },
        { icon: <Code2 size={28} />, title: 'Líder', subtitle: 'Técnico' }
    ]
};

const LeadershipHighlights = ({ language }) => {
    const items = highlightData[language] ?? highlightData.en;

    return (
        <section className="leadership-highlights section-padding">
            <div className="container">
                <div className="highlights-grid">
                    {items.map((item, index) => (
                        <div key={index} className="highlight-card">
                            <div className="highlight-icon">
                                {item.icon}
                            </div>
                            <div className="highlight-content">
                                <h3 className="highlight-title gradient-text">{item.title}</h3>
                                <p className="highlight-subtitle">{item.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LeadershipHighlights;
