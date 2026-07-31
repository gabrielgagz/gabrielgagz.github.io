// src/data/portfolioData.js

export const portfolioDataByLanguage = {
  en: {
    experiencesInfo: [
      {
        id: 1,
        role: 'Technical Team Lead / Delivery Manager',
        company: 'ATSA Bahia Blanca',
        duration: '2007 - Present',
        description:
          'I lead a technical team of [X] professionals, driving the digital transformation of internal operations. I replaced legacy manual processes with custom software solutions, reducing operational errors by [X]%. I hold direct responsibility for technical architecture, project roadmaps, and managing IT infrastructure supporting [X] active users.',
        skills: ['Technical Leadership', 'Digital Transformation', 'Team Coordination', 'System Architecture', 'Delivery Management'],
      },
      {
        id: 2,
        role: 'Scrum Facilitator / Professional Practice Tutor',
        company: 'Teclab / Social Learning',
        duration: '2023 - Present',
        description:
          'I facilitate agile ceremonies and coordinate sprint execution for multidisciplinary teams in an EdTech environment. I align technical delivery with academic goals, actively removing blockers and mitigating risks for [X] simultaneous projects.',
        skills: ['Scrum Mastery', 'Agile Facilitation', 'Risk Management', 'Blocker Resolution', 'Mentoring'],
      },
      {
        id: 3,
        role: 'Project Coordinator (Software)',
        company: 'Alkemy',
        duration: '2023',
        description:
          'Coordinated agile software development projects with real-world dynamics. Managed sprint planning, delivery tracking, and team alignment to ensure software products met strict deadlines and quality standards.',
        skills: ['Project Management', 'Sprint Planning', 'Team Alignment', 'Software Lifecycle'],
      },
      {
        id: 4,
        role: 'IT Consultant / Full-Stack Developer',
        company: 'Freelance',
        duration: '2010 - Present',
        description:
          'Developed custom web solutions and automated internal processes for [X] B2B clients. Combined full-stack engineering with technical consulting to optimize client workflows and reduce manual overhead.',
        skills: ['Full-Stack Engineering', 'Technical Consulting', 'Process Automation', 'System Integration'],
      },
    ],
    skillsInfo: [
      {
        category: 'Leadership & Management',
        items: ['Technical Team Leadership', 'Delivery Management', 'Scrum & Agile', 'Project Management', 'Roadmap Planning', 'Stakeholder Alignment', 'Blocker Resolution'],
      },
      {
        category: 'Software Engineering',
        items: ['System Architecture', 'API Design', 'Relational Databases', 'Full-Stack Development', 'Code Review', 'Digital Transformation'],
      },
      {
        category: 'Core Technologies',
        items: ['React', 'PHP 8+', 'Node.js', 'MySQL / SQL', 'TailwindCSS', 'WebSockets', 'Git / GitHub', 'Linux Server Admin'],
      }
    ],
    projectsInfo: [
      {
        id: 1,
        title: 'Hugo Management System',
        role: 'Team Leader & Lead Architect',
        description: 'Problem: Needed a payroll system compliant with the latest labor modernization laws.\nUsers: [X] employees processed monthly.\nRole: Led the engineering team and defined the core architecture.\nResult: Delivered a fully compliant, digitized operational workflow that eliminated manual calculation errors.',
        tech: ['React', 'PHP 8', 'MySQL', 'TailwindCSS'],
        image: 'hugo.png',
      },
      {
        id: 2,
        title: 'ChatLack',
        role: 'Product Owner & Tech Lead',
        description: 'Problem: Organizations with constrained budgets needed a real-time communication alternative to expensive tools like Slack.\nUsers: [X] active daily users.\nRole: Guided product vision and provided technical leadership.\nResult: Built a highly-adopted, low-resource chat platform using WebSockets for real-time delivery.',
        tech: ['Node.js', 'WebSockets', 'React', 'MySQL / Relational DB'],
        image: 'chatlack.png',
      },
      {
        id: 3,
        title: 'Messaging Dashboard',
        role: 'Lead Integrator & Project Manager',
        description: 'Problem: Needed a centralized dashboard to handle incoming support tickets via Telegram.\nUsers: Support team of [X] agents.\nRole: Managed project execution and designed the API integration layer.\nResult: Reduced ticket response times by [X]% by bridging the backend, frontend UI, and external Telegram API.',
        tech: ['React', 'Telegram API', 'PHP', 'Vite'],
        image: 'gestor.png',
      },
    ],
  },
  es: {
    experiencesInfo: [
      {
        id: 1,
        role: 'Technical Team Lead / Delivery Manager',
        company: 'ATSA Bahía Blanca',
        duration: '2007 - Presente',
        description:
          'Lidero un equipo técnico de [X] profesionales, impulsando la transformación digital de las operaciones internas. Reemplacé procesos manuales con software a medida, reduciendo errores operativos en un [X]%. Soy responsable directo de la arquitectura técnica, el roadmap de proyectos y la infraestructura IT para [X] usuarios activos.',
        skills: ['Liderazgo Técnico', 'Transformación Digital', 'Coordinación de Equipos', 'Arquitectura de Sistemas', 'Delivery Management'],
      },
      {
        id: 2,
        role: 'Scrum Facilitator / Tutor de Práctica Profesionalizante',
        company: 'Teclab / Social Learning',
        duration: '2023 - Presente',
        description:
          'Facilito ceremonias ágiles y coordino la ejecución de sprints para equipos multidisciplinarios en el sector EdTech. Alineo las entregas técnicas con los objetivos académicos, removiendo bloqueos y mitigando riesgos para [X] proyectos simultáneos.',
        skills: ['Scrum Mastery', 'Facilitación Ágil', 'Gestión de Riesgos', 'Resolución de Bloqueos', 'Mentoría'],
      },
      {
        id: 3,
        role: 'Project Coordinator (Software)',
        company: 'Alkemy',
        duration: '2023',
        description:
          'Coordiné proyectos de desarrollo de software con dinámicas del mundo real. Gestioné la planificación de sprints, el seguimiento de entregas y la alineación del equipo para asegurar que los productos cumplieran con plazos y estándares de calidad estrictos.',
        skills: ['Gestión de Proyectos', 'Sprint Planning', 'Alineación de Equipos', 'Ciclo de Vida de Software'],
      },
      {
        id: 4,
        role: 'Consultor IT / Full-Stack Developer',
        company: 'Freelance',
        duration: '2010 - Presente',
        description:
          'Desarrollé soluciones web personalizadas y automaticé procesos internos para [X] clientes B2B. Combiné ingeniería full-stack con consultoría técnica para optimizar flujos de trabajo y reducir la carga operativa manual.',
        skills: ['Ingeniería Full-Stack', 'Consultoría Técnica', 'Automatización de Procesos', 'Integración de Sistemas'],
      },
    ],
    skillsInfo: [
      {
        category: 'Liderazgo y Gestión',
        items: ['Liderazgo Técnico', 'Delivery Management', 'Scrum y Agile', 'Gestión de Proyectos', 'Planificación de Roadmaps', 'Alineación de Stakeholders', 'Resolución de Bloqueos'],
      },
      {
        category: 'Ingeniería de Software',
        items: ['Arquitectura de Sistemas', 'Diseño de APIs', 'Bases de Datos Relacionales', 'Desarrollo Full-Stack', 'Code Review', 'Transformación Digital'],
      },
      {
        category: 'Tecnologías Principales',
        items: ['React', 'PHP 8+', 'Node.js', 'MySQL / SQL', 'TailwindCSS', 'WebSockets', 'Git / GitHub', 'Administración Linux Server'],
      }
    ],
    projectsInfo: [
      {
        id: 1,
        title: 'Sistema Hugo',
        role: 'Team Leader & Lead Architect',
        description: 'Problema: Se requería un sistema de sueldos adaptado a la Ley de Modernización Laboral.\nUsuarios: [X] empleados liquidados mensualmente.\nRol: Lideré el equipo de ingeniería y definí la arquitectura core.\nResultado: Se entregó un flujo operativo 100% digitalizado y en regla que eliminó los errores de cálculo manual.',
        tech: ['React', 'PHP 8', 'MySQL', 'TailwindCSS'],
        image: 'hugo.png',
      },
      {
        id: 2,
        title: 'ChatLack',
        role: 'Product Owner & Tech Lead',
        description: 'Problema: Organizaciones con bajo presupuesto necesitaban una alternativa de chat en tiempo real frente a herramientas costosas como Slack.\nUsuarios: [X] usuarios activos diarios.\nRol: Guié la visión del producto y el liderazgo técnico.\nResultado: Plataforma de alta adopción y bajos recursos utilizando WebSockets para mensajería en tiempo real.',
        tech: ['Node.js', 'WebSockets', 'React', 'MySQL / BD Relacional'],
        image: 'chatlack.png',
      },
      {
        id: 3,
        title: 'Gestor de Mensajería',
        role: 'Lead Integrator & Project Manager',
        description: 'Problema: Necesidad de un dashboard centralizado para gestionar tickets de soporte entrantes vía Telegram.\nUsuarios: Equipo de soporte de [X] agentes.\nRol: Gestioné la ejecución del proyecto y diseñé la capa de integración de APIs.\nResultado: Reducción del [X]% en tiempos de respuesta uniendo backend, frontend UI y la API de Telegram.',
        tech: ['React', 'Telegram API', 'PHP', 'Vite'],
        image: 'gestor.png',
      },
    ],
  },
};

export const getPortfolioData = (language = 'en') => portfolioDataByLanguage[language] ?? portfolioDataByLanguage.en;
