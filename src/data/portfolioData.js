// src/data/portfolioData.js

export const portfolioDataByLanguage = {
  en: {
    experiencesInfo: [
      {
        id: 1,
        role: 'Technical Team Lead / Delivery Manager',
        company: 'OSPSA / ATSA Bahia Blanca',
        duration: '2006 - Present',
        description:
          'I lead software engineering initiatives, system architecture, and IT operations for the Healthcare Workers Union and Social Health Organization. I drove the end-to-end digital transformation of manual workflows into an integrated ecosystem of mission-critical production systems (Payroll Management, Digital Affiliate Card, Self-Service Portal, Financial Collection, and Real-Time Messaging). Responsible for technical roadmaps, agile delivery, incident prevention, and aligning tech solutions with executive stakeholders.',
        skills: ['Technical Leadership', 'Digital Transformation', 'Team Coordination', 'System Architecture', 'Delivery Management', 'Incident Management'],
      },
      {
        id: 2,
        role: 'Professional Practice Tutor | Cloud, Data & Software',
        company: 'Teclab / Social Learning',
        duration: '2023 - Present',
        description:
          'I guide students and aspiring engineers in planning and executing hands-on industry projects across Programming, Cybersecurity, Networking, Cloud Computing, and Data Science. Mentored over 400 students, facilitating agile processes, resolving technical and architectural blockers, and significantly boosting project completion rates.',
        skills: ['Technical Mentorship', 'Scrum & Agile', 'Cloud & Architecture', 'Blocker Resolution', 'Critical Thinking'],
      },
      {
        id: 3,
        role: 'Project Coordinator (Software)',
        company: 'Alkemy',
        duration: '2023',
        description:
          'Coordinated agile software engineering projects simulating production company environments. Managed sprint planning, delivery milestones, code quality standards, and team alignment to guarantee high-impact on-time releases.',
        skills: ['Project Management', 'Sprint Planning', 'Team Alignment', 'Software Lifecycle', 'Agile Practices with AI'],
      },
      {
        id: 4,
        role: 'IT Consultant / Full-Stack Developer',
        company: 'Freelance',
        duration: '2010 - Present',
        description:
          'Delivered customized web applications, automated business processes, and provided architectural guidance for corporate clients. Combined full-stack software development with operational consulting to streamline manual operations and reduce overhead.',
        skills: ['Full-Stack Engineering', 'Technical Consulting', 'Process Automation', 'System Integration'],
      },
    ],
    skillsInfo: [
      {
        category: 'Leadership & Delivery',
        items: ['Technical Leadership', 'Delivery Management', 'Agile & Scrum', 'Project Management', 'Roadmap Planning', 'Stakeholder Management', 'Continuous Improvement', 'Incident Management'],
      },
      {
        category: 'Software Architecture & Engineering',
        items: ['System Architecture', 'REST APIs & Webhooks', 'Zero-Downtime Design', 'Database Modeling', 'Full-Stack Development', 'Code Reviews & QA', 'Digital Transformation', 'Legacy Support'],
      },
      {
        category: 'Core Technologies',
        items: ['React', 'PHP 8+', 'Node.js', 'MySQL / Relational DB', 'TailwindCSS / Vite', 'WebSockets', 'Git / GitHub CI', 'Linux Server Admin'],
      }
    ],
    projectsInfo: [
      {
        id: 1,
        title: 'Hugo Management System',
        role: 'Team Leader & Lead Architect',
        description: 'Problem: Needed an automated enterprise payroll system fully compliant with the latest labor modernization regulations.\nUsers: Hundreds of employees processed monthly with digital signatures and itemized payslips.\nRole: Led the engineering team, defined core domain architecture, and built high-accuracy calculation engines.\nResult: Eliminated manual calculation errors and delivered an auditable, 100% digitalized operational workflow.',
        tech: ['React', 'PHP 8', 'MySQL', 'TailwindCSS'],
        image: 'hugo.png',
      },
      {
        id: 2,
        title: 'Digital Membership Card (Carnet Digital)',
        role: 'Technical Lead & Security Architect',
        description: 'Problem: Needed an unforgeable digital membership credential for medical healthcare coverage and union identity validation.\nUsers: Thousands of active union affiliates across medical clinics, pharmacies, and headquarters.\nRole: Architected the dynamic security token system (auto-regenerating OTP every 60s), live QR code verification, and zero-downtime APIs.\nResult: 100% availability in identity checks, instant fraud prevention, and elimination of physical card manufacturing costs.',
        tech: ['React', 'PHP Core API', 'Dynamic QR / OTP', 'TailwindCSS', 'High Availability'],
        image: 'carnet.png',
      },
      {
        id: 3,
        title: 'ChatLack Real-Time Platform',
        role: 'Product Owner & Tech Lead',
        description: 'Problem: Organizations with constrained budgets needed a lightweight real-time communication platform without costly third-party SaaS fees.\nUsers: Internal operations teams, administrative staff, and union delegates.\nRole: Guided product roadmap and implemented low-latency bidirectional messaging architecture.\nResult: Built a high-adoption internal communication hub with low memory footprint and strict corporate data privacy.',
        tech: ['React', 'WebSockets', 'Node.js', 'PHP', 'MySQL'],
        image: 'chatlack.png',
      },
      {
        id: 4,
        title: 'Omnichannel Messaging Hub (Gestor MSG)',
        role: 'Lead Integrator & Project Manager',
        description: 'Problem: Fragmented support channels needed a centralized dashboard to track and resolve incoming member tickets via Telegram and web.\nUsers: Specialized support staff handling daily affiliate inquiries.\nRole: Designed resilient webhook endpoints (with local JSON fallback during database anomalies) and ticket lifecycle management.\nResult: Drastically reduced ticket resolution times and established end-to-end traceability for every incoming issue.',
        tech: ['React', 'PHP API', 'Telegram Bot API', 'Vite', 'Resilient Webhooks'],
        image: 'gestor.png',
      },
      {
        id: 5,
        title: 'Employee & Member Self-Service Portal',
        role: 'Team Leader & Full-Stack Architect',
        description: 'Problem: High volume of in-person administrative inquiries for paystubs, formal leave requests, and personal documentation.\nUsers: All affiliated employees with 24/7 self-service access from any mobile or desktop browser.\nRole: Directed UI/UX design, authenticated API integrations, and secure document streaming.\nResult: Decentralized administrative paperwork, streamlined leave approvals, and enhanced member satisfaction.',
        tech: ['React', 'PHP REST API', 'JWT Authentication', 'TailwindCSS', 'PDF Generation'],
        image: 'portal.png',
      },
      {
        id: 6,
        title: 'Financial Collection & Check Tracking System',
        role: 'Technical Lead & System Architect',
        description: 'Problem: Complex reconciliation of corporate employer dues, incoming bank deposits, and check portfolios across legacy enterprise environments.\nUsers: Financial administration and internal accounting department.\nRole: Designed audit trails, banking deposit reconciliation algorithms, and configured strict transpilations for legacy browsers.\nResult: Real-time visibility into incoming revenue, zero check traceability loss, and robust backward compatibility.',
        tech: ['React', 'PHP Backend', 'MySQL', 'LightningCSS (Legacy Win7/8)', 'Financial Reporting'],
        image: 'recaudacion.png',
      },
    ],
  },
  es: {
    experiencesInfo: [
      {
        id: 1,
        role: 'Technical Team Lead / Delivery Manager',
        company: 'OSPSA / ATSA Filial Bahía Blanca',
        duration: '2006 - Presente',
        description:
          'Lidero las iniciativas de desarrollo de software, arquitectura de sistemas y operaciones de TI para la Obra Social y el Sindicato de Sanidad. Impulsé de punta a punta la transformación digital de procesos manuales a un ecosistema integrado de aplicaciones críticas en producción (Liquidación de Sueldos, Carnet Digital, Portal de Autogestión, Recaudación y Mensajería en Tiempo Real). Responsable de la arquitectura técnica, roadmaps de entrega ágil, prevención de incidentes y alineación estratégica con directivos y stakeholders.',
        skills: ['Liderazgo Técnico', 'Transformación Digital', 'Coordinación de Equipos', 'Arquitectura de Sistemas', 'Delivery Management', 'Gestión de Incidentes'],
      },
      {
        id: 2,
        role: 'Tutor de Práctica Profesionalizante | Cloud, Datos y Software',
        company: 'Teclab / Social Learning',
        duration: '2023 - Presente',
        description:
          'Acompaño y guío a estudiantes en la planificación y ejecución de proyectos prácticos en Programación, Ciberseguridad, Redes, Cloud Computing y Data Science. He acompañado a más de 400 estudiantes, facilitando metodologías ágiles, resolución de bloqueos técnicos y de diseño, logrando un aumento sustancial en la tasa de finalización de proyectos.',
        skills: ['Mentoría Técnica', 'Scrum y Agile', 'Arquitectura y Cloud', 'Resolución de Bloqueos', 'Pensamiento Crítico'],
      },
      {
        id: 3,
        role: 'Project Coordinator (Software)',
        company: 'Alkemy',
        duration: '2023',
        description:
          'Coordiné proyectos de desarrollo de software ágil bajo dinámicas de simulación laboral real. Gestioné la planificación de sprints, el seguimiento de entregas y la alineación técnica del equipo para asegurar el cumplimiento estricto de plazos y estándares de calidad.',
        skills: ['Gestión de Proyectos', 'Sprint Planning', 'Alineación de Equipos', 'Ciclo de Vida de Software', 'Prácticas Ágiles con IA'],
      },
      {
        id: 4,
        role: 'Consultor IT / Full-Stack Developer',
        company: 'Freelance',
        duration: '2010 - Presente',
        description:
          'Desarrollo soluciones web personalizadas, automatizo procesos operativos y brindo asesoramiento en arquitectura para clientes B2B. Combino ingeniería full-stack con consultoría técnica para optimizar flujos de trabajo y eliminar la sobrecarga manual.',
        skills: ['Ingeniería Full-Stack', 'Consultoría Técnica', 'Automatización de Procesos', 'Integración de Sistemas'],
      },
    ],
    skillsInfo: [
      {
        category: 'Liderazgo y Gestión',
        items: ['Liderazgo Técnico', 'Delivery Management', 'Scrum y Agile', 'Gestión de Proyectos', 'Planificación de Roadmaps', 'Alineación de Stakeholders', 'Mejora Continua', 'Gestión de Incidentes'],
      },
      {
        category: 'Ingeniería y Arquitectura de Software',
        items: ['Arquitectura de Sistemas', 'Diseño de APIs REST y Webhooks', 'Diseño Zero-Downtime', 'Modelado de Bases de Datos', 'Desarrollo Full-Stack', 'Code Review y QA', 'Transformación Digital', 'Soporte Legacy'],
      },
      {
        category: 'Tecnologías Principales',
        items: ['React', 'PHP 8+', 'Node.js', 'MySQL / BD Relacional', 'TailwindCSS / Vite', 'WebSockets', 'Git / GitHub CI', 'Administración Linux Server'],
      }
    ],
    projectsInfo: [
      {
        id: 1,
        title: 'Sistema Hugo (Sueldos y Liquidaciones)',
        role: 'Team Leader & Lead Architect',
        description: 'Problema: Automatización integral de liquidación de sueldos adaptada a la Ley de Modernización Laboral.\nUsuarios: Cientos de legajos procesados mensualmente con certificación y recibos de sueldo digitales con firma.\nRol: Lideré el equipo de ingeniería, definí la arquitectura modular y el motor de cálculo de alta precisión.\nResultado: Se eliminó el error humano de cálculo manual y se entregó un flujo 100% digitalizado y conforme a normativa.',
        tech: ['React', 'PHP 8', 'MySQL', 'TailwindCSS'],
        image: 'hugo.png',
      },
      {
        id: 2,
        title: 'Carnet Digital de Afiliados (OSPSA/ATSA)',
        role: 'Technical Lead & Security Architect',
        description: 'Problema: Validación de identidad sindical y cobertura médica infalsificable y en tiempo real.\nUsuarios: Miles de afiliados activos validando su acreditación en clínicas, farmacias y sedes gremiales.\nRol: Diseñé la arquitectura de tokens dinámicos (OTP autoregenerable cada 60s), QR dinámico y APIs con disponibilidad absoluta.\nResultado: Cero downtime en validación de identidad, prevención inmediata de fraudes y ahorro del 100% en credenciales plásticas físicas.',
        tech: ['React', 'PHP Core API', 'QR Dinámico / OTP', 'TailwindCSS', 'Alta Disponibilidad'],
        image: 'carnet.png',
      },
      {
        id: 3,
        title: 'ChatLack (Mensajería en Tiempo Real)',
        role: 'Product Owner & Tech Lead',
        description: 'Problema: Necesidad de una plataforma ágil de comunicación interna en tiempo real sin los elevados costos de herramientas como Slack.\nUsers: Equipos operativos, personal administrativo y delegados sindicales.\nRol: Conduje la visión del producto y la arquitectura de mensajería bidireccional de baja latencia con WebSockets.\nResultado: Plataforma de alta adopción interna, bajísimo consumo de recursos y total soberanía y privacidad de los datos.',
        tech: ['React', 'WebSockets', 'Node.js', 'PHP', 'MySQL'],
        image: 'chatlack.png',
      },
      {
        id: 4,
        title: 'Gestor MSG y Soporte Omnicanal',
        role: 'Lead Integrator & Project Manager',
        description: 'Problema: Centralización y gestión unificada de tickets de soporte y consultas entrantes vía Telegram y web.\nUsuarios: Equipo de operadores de atención y asistencia a afiliados.\nRol: Diseñé la capa de integración de webhooks resilientes (con respaldo local JSON ante fallas de DB) y el ciclo de vida de tickets.\nResultado: Reducción drástica en tiempos de respuesta y trazabilidad completa de cada consulta o incidente reportado.',
        tech: ['React', 'PHP API', 'Telegram Bot API', 'Vite', 'Webhooks Resilientes'],
        image: 'gestor.png',
      },
      {
        id: 5,
        title: 'Portal de Autogestión y Empleados (Portal ATSA)',
        role: 'Team Leader & Full-Stack Architect',
        description: 'Problema: Descentralizar la atención de trámites presenciales, solicitud de licencias y consulta de documentación laboral.\nUsuarios: Empleados y afiliados con acceso de autogestión 24/7 desde cualquier dispositivo.\nRol: Lideré el diseño de interfaz (UI/UX), la seguridad de sesiones y los endpoints de emisión de recibos digitales.\nResultado: Flujo de autogestión 100% digital que descongestionó la atención presencial y aceleró los tiempos de aprobación.',
        tech: ['React', 'PHP REST API', 'Autenticación JWT', 'TailwindCSS', 'Generación PDF'],
        image: 'portal.png',
      },
      {
        id: 6,
        title: 'Sistema de Recaudación y Control de Cheques',
        role: 'Technical Lead & System Architect',
        description: 'Problema: Conciliación de aportes sindicales de empresas, control de depósitos bancarios y seguimiento de cartera de cheques en entornos legacy.\nUsuarios: Administración financiera y departamento contable institucional.\nRol: Diseñé la lógica contable, trazabilidad de cheques y la transpilación estricta para navegadores legacy (Windows 7/8).\nResultado: Conciliación automatizada de aportes, cero extravío de documentos financieros y auditoría transparente.',
        tech: ['React', 'PHP Backend', 'MySQL', 'LightningCSS (Legacy Win7/8)', 'Reportes Financieros'],
        image: 'recaudacion.png',
      },
    ],
  },
};

export const getPortfolioData = (language = 'en') => portfolioDataByLanguage[language] ?? portfolioDataByLanguage.en;
