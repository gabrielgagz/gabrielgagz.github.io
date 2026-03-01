// src/data/portfolioData.js

export const portfolioDataByLanguage = {
  en: {
    experiencesInfo: [
      {
        id: 1,
        role: 'Team Leader / Software Developer / IT Support',
        company: 'ATSA Bahia Blanca',
        duration: '2007 - Present',
        description:
          'I lead software and IT operations initiatives with both technical and management accountability: planning, prioritization, and coordination across technical, operational, and leadership areas. I facilitate agile workflows to improve predictability, delivery consistency, and team throughput. I also drove digitalization processes that reduced manual errors and improved operational continuity.',
        skills: ['Technical Leadership', 'Project Coordination', 'Stakeholder Management', 'Scrum/Kanban', 'Delivery Tracking', 'Risk & Issue Management'],
      },
      {
        id: 2,
        role: 'Scrum Facilitator / Professional Practice Tutor',
        company: 'Teclab / Social Learning',
        duration: '2023 - Present',
        description:
          'I facilitate agile ceremonies (daily, planning, review, and retrospective), organize sprint work, and support multidisciplinary teams in EdTech environments. I coordinate goals with academic and technical stakeholders, manage blockers, risks, and priorities, and reinforce Scrum adoption with a value-delivery and continuous-improvement mindset.',
        skills: ['Scrum Mastery', 'Agile Facilitation', 'Kanban', 'Backlog Prioritization', 'Mentoring', 'Continuous Improvement', 'Risk Management'],
      },
      {
        id: 3,
        role: 'Project Coordinator (Software)',
        company: 'Alkemy',
        duration: '2023',
        description:
          'I participated in collaborative projects with real-world dynamics, applying agile planning, delivery tracking, and team coordination practices for software products.',
        skills: ['Project Management', 'Sprint Planning', 'Team Collaboration', 'Software Lifecycle'],
      },
      {
        id: 4,
        role: 'IT Consultant / Full-Stack Developer',
        company: 'Freelance',
        duration: '2010 - Present',
        description:
          'I build custom web solutions and implement process improvements for different clients, combining full-stack development with technical support and functional analysis.',
        skills: ['React', 'Node.js', 'PHP', 'MySQL', 'MongoDB', 'Technical Consulting'],
      },
    ],
    skillsInfo: [
      {
        category: 'Methodologies & Leadership',
        items: ['Scrum Master', 'Kanban', 'Agile Leadership', 'Technical Team Leadership', 'Project Management', 'Sprint Planning', 'Retrospectives', 'Coaching & Mentoring'],
      },
      {
        category: 'Delivery Management',
        items: ['Stakeholder Management', 'Roadmap & Prioritization', 'Risk Management', 'KPI Tracking', 'Blocker Resolution', 'Technical/Business Communication', 'Dependency Management', 'Continuous Improvement'],
      },
      {
        category: 'Technical Skills',
        items: ['React', 'Node.js', 'Express', 'PHP', 'MySQL / MongoDB', 'Linux', 'Troubleshooting', 'Cloud Fundamentals (AWS)'],
      },
      {
        category: 'Tools',
        items: ['Jira', 'Trello', 'Git / GitHub', 'GitLab / Bitbucket', 'Confluence', 'Linux / Windows Server'],
      },
    ],
  },
  es: {
    experiencesInfo: [
      {
        id: 1,
        role: 'Team Leader / Software Developer / IT Support',
        company: 'ATSA Bahía Blanca',
        duration: '2007 - Presente',
        description:
          'Lidero iniciativas de software y operaciones IT con responsabilidad técnica y de gestión: planificación, priorización y coordinación entre áreas técnicas, operativas y directivas. Facilito dinámicas ágiles para mejorar previsibilidad, cumplimiento y capacidad de entrega. Impulsé procesos de digitalización que redujeron errores manuales y mejoraron la continuidad operativa.',
        skills: ['Liderazgo Técnico', 'Coordinación de Proyectos', 'Gestión de Stakeholders', 'Scrum/Kanban', 'Seguimiento de Delivery', 'Gestión de Riesgos e Incidencias'],
      },
      {
        id: 2,
        role: 'Scrum Facilitator / Tutor de Práctica Profesionalizante',
        company: 'Teclab / Social Learning',
        duration: '2023 - Presente',
        description:
          'Facilito ceremonias ágiles (daily, planning, review y retrospective), organizo sprints y acompaño equipos multidisciplinarios en entornos EdTech. Coordino objetivos con actores académicos y técnicos, gestiono bloqueos, riesgos y prioridades, y refuerzo la adopción de Scrum con foco en entrega de valor y mejora continua.',
        skills: ['Scrum Mastery', 'Facilitación Ágil', 'Kanban', 'Priorización de Backlog', 'Mentoría', 'Mejora Continua', 'Gestión de Riesgos'],
      },
      {
        id: 3,
        role: 'Project Coordinator (Software)',
        company: 'Alkemy',
        duration: '2023',
        description:
          'Participé en proyectos colaborativos con dinámicas de entorno real, aplicando prácticas ágiles de planificación, seguimiento y coordinación de entregables para productos de software.',
        skills: ['Gestión de Proyectos', 'Sprint Planning', 'Colaboración en Equipo', 'Ciclo de Vida de Software'],
      },
      {
        id: 4,
        role: 'Consultor IT / Full-Stack Developer',
        company: 'Freelance',
        duration: '2010 - Presente',
        description:
          'Desarrollo soluciones web a medida e implemento mejoras en procesos internos para distintos clientes, integrando desarrollo full-stack con soporte técnico y análisis funcional.',
        skills: ['React', 'Node.js', 'PHP', 'MySQL', 'MongoDB', 'Consultoría Técnica'],
      },
    ],
    skillsInfo: [
      {
        category: 'Metodologías y Liderazgo',
        items: ['Scrum Master', 'Kanban', 'Agile Leadership', 'Liderazgo Técnico de Equipos', 'Project Management', 'Sprint Planning', 'Retrospectives', 'Coaching y Mentoring'],
      },
      {
        category: 'Gestión de Delivery',
        items: ['Stakeholder Management', 'Roadmap y Priorización', 'Gestión de Riesgos', 'Seguimiento de KPIs', 'Resolución de Bloqueos', 'Comunicación Técnica/Negocio', 'Gestión de Dependencias', 'Mejora Continua'],
      },
      {
        category: 'Hard Skills (Soporte Técnico)',
        items: ['React', 'Node.js', 'Express', 'PHP', 'MySQL / MongoDB', 'Linux', 'Troubleshooting', 'Cloud Fundamentals (AWS)'],
      },
      {
        category: 'Herramientas IT',
        items: ['Jira', 'Trello', 'Git / GitHub', 'GitLab / Bitbucket', 'Confluence', 'Linux / Windows Server'],
      },
    ],
  },
};

export const getPortfolioData = (language = 'en') => portfolioDataByLanguage[language] ?? portfolioDataByLanguage.en;
