/**
 * content.ts - Conteúdo do Portfólio
 * 
 * Ficheiro central que contém todo o texto e dados do portfólio.
 * Estruturado para suportar múltiplos idiomas (Português e Inglês).
 * 
 * Para adicionar novo conteúdo ou modificar existente, alterar os objetos
 * 'pt' (Português) e 'en' (Inglês) mantendo a mesma estrutura em ambos.
 */
import { Content } from '../types';

/**
 * Conteúdo em Português
 */
const pt: Content = {
  hero: {
    greeting: "Olá, eu sou o João Fonseca",
    role: "Engenheiro Informático a acabar o mestrado.",
    description: "Estudante de Engenharia Informática no ISEP, especializado em Engenharia de dados.",
    ctaProject: "Ver Projetos",
    ctaContact: "Contactar",
  },
  about: {
    title: "Sobre Mim",
    description: "Sou um apaixonado por tecnologia e por transformar ideias em soluções práticas. Considero-me uma pessoa proativa, organizada e com grande capacidade de aprendizagem. Gosto de trabalhar em equipa, partilhar ideias e enfrentar desafios que me obriguem a sair da zona de conforto.",
    academic: "Atualmente estou a frequentar o Mestrado em Engenharia Informática no Instituto Superior de Engenharia do Porto (ISEP), com foco em Engenharia de Dados.",
    mindset: "Acredito na aprendizagem contínua. Estou sempre à procura de novas tecnologias e soluções para resolver problemas de forma eficiente e otimizada.",
  },
  skills: {
    title: "Competências Técnicas",
    categories: [
      { category: "Linguagens", items: ["Python", "SQL", "Java", "TypeScript", "JavaScript", "C", "Dart"] },
      { category: "Engenharia de Dados", items: ["Técnicas de Mineração de Dados", "Fundamentos de Machine Learning", "Pré-processamento e limpeza de dados", "Avaliação e interpretação de modelos"] },
      { category: "Bases de Dados", items: ["PostgreSQL", "MongoDB", "Redis", "Snowflake"] },
      { category: "Ferramentas & Frameworks", items: ["Docker", "Git/GitHub Actions", "React & React Native", "Next.js", "Node.js", "Express.js", "Django", "Flutter"] }
    ]
  },
  projects: {
    title: "Projetos em Destaque",
    subtitle: "Uma seleção de trabalhos académicos e pessoais que demonstram as minhas capacidades técnicas.",
    labels: {
      objective: "Objetivo",
      problem: "Problema Resolvido",
      value: "Valor Técnico"
    },
    items: [
      {
        title: "Previsão de Preços da Eletricidade com Modelos Estatísticos, Machine Learning e Deep Learning",
        tags: ["Python", "data mining", "machine learning", "deep learning", "crisp-dm"],
        description: "Projeto de previsão de preços da eletricidade usando dados temporais, meteorológicos e modelos preditivos avançados",
        objective: "Comparar modelos estatísticos, machine learning e deep learning para prever preços horários da eletricidade.",
        problem: "Reduz a incerteza associada à volatilidade dos preços da eletricidade em mercados energéticos liberalizados.",
        value: "Integra análise de séries temporais, modelos avançados e métricas robustas numa abordagem CRISP-DM estruturada.",
        githubUrl: "https://github.com/joaogsfonseca"
      },
      {
        title: "Análise e Aplicação de Técnicas de Aprendizagem Automática em Dados Musicais",
        tags: ["Python", "Machine Learning", "Regressão", "Classificação", "Feature Selection"],
        description: "Aplicação de métodos de aprendizagem automática a dados musicais para regressão, classificação e seleção de atributos.",
        objective: "Analisar, modelar e comparar algoritmos de machine learning aplicados a popularidade e classes musicais.",
        problem: "Predição de popularidade musical e classificação de faixas usando características áudio complexas e dados desbalanceados",
        value: "Integra regressão, classificação, validação cruzada e regularização, demonstrando boas práticas em machine learning aplicado.",
        githubUrl: "https://github.com/joaogsfonseca"
      },
      {
        title: "WALIT – Gestão de Subscrições e Despesas Partilhadas",
        tags: ["Flutter", "Node.js", "PostgreSQL", "Docker", "JWT"],
        description: "Aplicação mobile para gerir subscrições e despesas partilhadas, com notificações automáticas e visão financeira centralizada.",
        objective: "Ajudar utilizadores a controlar subscrições e despesas partilhadas de forma simples, centralizada e automática.",
        problem: "Falta de controlo, visibilidade e organização de subscrições e despesas recorrentes em ambientes partilhados.",
        value: "Implementa uma arquitetura backend segura e modular, com autenticação JWT, lógica financeira centralizada e escalabilidade preparada para evolução.",
        githubUrl: "https://github.com/joaogsfonseca"
      },
      {
        title: "Polyglot Persistence – Urban Transportation System",
        tags: ["PostgreSQL", "MongoDB", "Redis", "Neo4j", "Node.js", "React.js"],
        description: "Sistema de transporte inteligente que integra PostgreSQL, MongoDB, Redis e Neo4j para gerir dados complexos e heterogéneos.",
        objective: "Criar arquitetura modular (React e Node.js) para transporte público, focada em escalabilidade, desempenho e persistência poliglota.",
        problem: "Supera limitações de sistemas relacionais tradicionais, permitindo gerir grandes volumes de dados variados com flexibilidade necessária.",
        value: "Otimiza o armazenamento usando a tecnologia ideal: PostgreSQL (críticos), MongoDB (flexíveis), Redis (cache) e Neo4j (rotas).",
        githubUrl: "https://github.com/joaogsfonseca"
      },
      {
        title: "API REST para Gestão de Inventário",
        tags: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
        description: "API RESTful completa para gestão de inventário com autenticação, documentação e testes.",
        objective: "Desenvolver uma API robusta e bem documentada seguindo boas práticas de desenvolvimento.",
        problem: "Necessidade de um backend escalável e seguro para aplicações de gestão de stock.",
        value: "Implementa padrões REST, autenticação JWT, documentação Swagger e testes automatizados.",
        githubUrl: "https://github.com/joaogsfonseca"
      },
      {
        title: "Dashboard de Análise de Vendas",
        tags: ["Python", "Dash", "Plotly", "Pandas", "SQL"],
        description: "Dashboard interativo para visualização e análise de dados de vendas em tempo real.",
        objective: "Criar visualizações interativas que permitem explorar métricas de negócio de forma intuitiva.",
        problem: "Dificuldade em extrair insights acionáveis de grandes volumes de dados de vendas.",
        value: "Combina ETL automatizado, visualizações interativas e KPIs em tempo real.",
        githubUrl: "https://github.com/joaogsfonseca"
      }
    ]
  },
  education: {
    title: "Formação Académica",
    items: [
      {
        degree: "Mestrado em Engenharia Informática",
        school: "ISEP - Instituto Superior de Engenharia do Porto",
        specialization: "Especialização em Engenharia de Dados",
        period: "2025 - Presente",
        description: "Formação avançada em sistemas distribuídos, big data e engenharia de dados, com foco em arquiteturas escaláveis e processamento de dados em larga escala."
      },
      {
        degree: "Licenciatura em Engenharia Informática",
        school: "ULP - Universidade Lusófona - Centro Universitário do Porto",
        period: "2021 - 2024",
        description: "Formação focada na análise de requisitos, desenho de arquiteturas e desenvolvimento de soluções informáticas, com forte componente prática e orientação para projetos reais."
      }
    ]
  },

  career: {
    title: "Objetivos Profissionais",
    description: "Procuro uma oportunidade de estágio ou posição júnior nas áreas de Engenharia de Dados, Backend Development ou Full Stack Development, com o objetivo de integrar uma equipa técnica experiente onde possa aplicar os meus conhecimentos, evoluir tecnicamente e aprender através da colaboração e desafios reais."
  },
  contact: {
    title: "Entre em contacto",
    text: "Estou disponível para oportunidades de estágio ou posição júnior, com foco em crescimento técnico e impacto real.",
    emailLabel: "Email",
    cvLabel: "Download CV",
    githubLabel: "GitHub"
  },
  footer: {
    copyright: "© 2025 João Fonseca."
  }
};

/**
 * Conteúdo em Inglês
 */
const en: Content = {
  hero: {
    greeting: "Hello, I'm João Fonseca",
    role: "Computer Engineer finishing my Master's degree.",
    description: "Computer Engineering student at ISEP, specializing in Data Engineering.",
    ctaProject: "View Projects",
    ctaContact: "Contact Me",
  },
  about: {
    title: "About Me",
    description: "I'm passionate about technology and transforming ideas into practical solutions. I consider myself a proactive, organized person with a great capacity for learning. I enjoy working in teams, sharing ideas, and facing challenges that push me out of my comfort zone.",
    academic: "Currently attending the Master's in Computer Engineering at the School of Engineering, Polytechnic of Porto (ISEP), focusing on Data Engineering.",
    mindset: "I believe in continuous learning. I'm always looking for new technologies and solutions to solve problems efficiently and optimally.",
  },
  skills: {
    title: "Technical Skills",
    categories: [
      { category: "Languages", items: ["Python", "SQL", "Java", "TypeScript", "JavaScript", "C", "Dart"] },
      { category: "Data Engineering", items: ["Data Mining Techniques", "Machine Learning Fundamentals", "Data Preprocessing and Cleaning", "Model Evaluation and Interpretation"] },
      { category: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "Snowflake"] },
      { category: "Tools & Frameworks", items: ["Docker", "Git/GitHub Actions", "React & React Native", "Next.js", "Node.js", "Express.js", "Django", "Flutter"] }
    ]
  },
  projects: {
    title: "Featured Projects",
    subtitle: "A selection of academic and personal work demonstrating my technical capabilities.",
    labels: {
      objective: "Objective",
      problem: "Problem Solved",
      value: "Technical Value"
    },
    items: [
      {
        title: "Electricity Price Forecasting with Statistical, Machine Learning, and Deep Learning Models",
        tags: ["Python", "data mining", "machine learning", "deep learning", "crisp-dm"],
        description: "Electricity price forecasting project using temporal, meteorological data and advanced predictive models.",
        objective: "Compare statistical, machine learning, and deep learning models to predict hourly electricity prices.",
        problem: "Reduces uncertainty associated with electricity price volatility in liberalized energy markets.",
        value: "Integrates time series analysis, advanced models, and robust metrics in a structured CRISP-DM approach.",
        githubUrl: "https://github.com/joaogsfonseca"
      },
      {
        title: "Analysis and Application of Machine Learning Techniques to Music Data",
        tags: ["Python", "Machine Learning", "Regression", "Classification", "Feature Selection"],
        description: "Application of machine learning methods to music data for regression, classification, and feature selection.",
        objective: "Analyze, model, and compare machine learning algorithms applied to music popularity and classes.",
        problem: "Music popularity prediction and track classification using complex audio features and imbalanced data.",
        value: "Integrates regression, classification, cross-validation, and regularization, demonstrating best practices in applied machine learning.",
        githubUrl: "https://github.com/joaogsfonseca"
      },
      {
        title: "WALIT – Subscription and Shared Expense Management",
        tags: ["Flutter", "Node.js", "PostgreSQL", "Docker", "JWT"],
        description: "Mobile application for managing subscriptions and shared expenses, with automatic notifications and centralized financial overview.",
        objective: "Help users control subscriptions and shared expenses in a simple, centralized, and automatic way.",
        problem: "Lack of control, visibility, and organization of subscriptions and recurring expenses in shared environments.",
        value: "Implements a secure and modular backend architecture with JWT authentication, centralized financial logic, and scalability ready for evolution.",
        githubUrl: "https://github.com/joaogsfonseca"
      },
      {
        title: "Polyglot Persistence – Urban Transportation System",
        tags: ["PostgreSQL", "MongoDB", "Redis", "Neo4j", "Node.js", "React.js"],
        description: "Intelligent transport system integrating PostgreSQL, MongoDB, Redis, and Neo4j to manage complex and heterogeneous data.",
        objective: "Create a modular architecture (React and Node.js) for public transport, focused on scalability, performance, and polyglot persistence.",
        problem: "Overcomes limitations of traditional relational systems, enabling management of large volumes of varied data with necessary flexibility.",
        value: "Optimizes storage using ideal technology: PostgreSQL (critical), MongoDB (flexible), Redis (cache), and Neo4j (routes).",
        githubUrl: "https://github.com/joaogsfonseca"
      },
      {
        title: "REST API for Inventory Management",
        tags: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
        description: "Complete RESTful API for inventory management with authentication, documentation, and testing.",
        objective: "Develop a robust and well-documented API following development best practices.",
        problem: "Need for a scalable and secure backend for stock management applications.",
        value: "Implements REST standards, JWT authentication, Swagger documentation, and automated testing.",
        githubUrl: "https://github.com/joaogsfonseca"
      },
      {
        title: "Sales Analytics Dashboard",
        tags: ["Python", "Dash", "Plotly", "Pandas", "SQL"],
        description: "Interactive dashboard for real-time sales data visualization and analysis.",
        objective: "Create interactive visualizations that allow intuitive exploration of business metrics.",
        problem: "Difficulty extracting actionable insights from large volumes of sales data.",
        value: "Combines automated ETL, interactive visualizations, and real-time KPIs.",
        githubUrl: "https://github.com/joaogsfonseca"
      }
    ]
  },
  education: {
    title: "Education",
    items: [
      {
        degree: "MSc in Computer Engineering",
        school: "ISEP - School of Engineering, Polytechnic of Porto",
        specialization: "Specialization in Data Engineering",
        period: "2025 - Present",
        description: "Advanced training in distributed systems, big data, and data engineering, focusing on scalable architectures and large-scale data processing."
      },
      {
        degree: "BSc in Computer Engineering",
        school: "ULP - Lusófona University - Porto University Center",
        period: "2021 - 2024",
        description: "Training focused on requirements analysis, architecture design, and development of IT solutions, with a strong practical component and orientation towards real projects."
      }
    ]
  },
  career: {
    title: "Professional Goals",
    description: "I am seeking an internship or Junior position in Data Engineering, Backend Development, or Full Stack Development, with the goal of joining an experienced technical team where I can apply my knowledge, evolve technically, and learn through collaboration and real challenges."
  },
  contact: {
    title: "Get in Touch",
    text: "I'm available for internship or junior position opportunities, focused on technical growth and real impact.",
    emailLabel: "Email",
    cvLabel: "Download CV",
    githubLabel: "GitHub"
  },
  footer: {
    copyright: "© 2025 João Fonseca."
  }
};

/**
 * Exportar conteúdo organizado por idioma
 * Uso: content['pt'] ou content['en']
 */
export const content = { pt, en };