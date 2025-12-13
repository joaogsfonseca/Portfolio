/**
 * types.ts - Definições de Tipos TypeScript
 * 
 * Contém todas as interfaces e tipos utilizados pela aplicação.
 * Centraliza definições para garantir consistência entre componentes.
 */

/**
 * Idiomas suportados pela aplicação
 * 'pt' - Português
 * 'en' - Inglês
 */
export type Language = 'pt' | 'en';

/**
 * Estrutura de dados de um projeto do portfólio
 * Contém toda a informação exibida nos cartões de projeto
 */
export interface Project {
  /** Título do projeto */
  title: string;
  /** Descrição breve do projeto */
  description: string;
  /** Lista de tecnologias/ferramentas utilizadas */
  tags: string[];
  /** Objetivo principal do projeto */
  objective: string;
  /** Problema que o projeto resolve */
  problem: string;
  /** Valor técnico ou contribuição do projeto */
  value: string;
  /** URL do repositório GitHub (opcional) */
  githubUrl?: string;
  /** URL de demonstração ao vivo (opcional) */
  demoUrl?: string;
}

/**
 * Categoria de competências técnicas
 * Agrupa skills relacionadas sob uma categoria
 */
export interface SkillCategory {
  /** Nome da categoria (ex: "Linguagens", "Bases de Dados") */
  category: string;
  /** Lista de skills nesta categoria */
  items: string[];
}

/**
 * Estrutura completa do conteúdo do portfólio
 * Define todo o texto e dados exibidos na página
 * Cada idioma tem a sua própria instância desta interface
 */
export interface Content {
  /** Secção Hero - Apresentação inicial */
  hero: {
    greeting: string;
    role: string;
    description: string;
    ctaProject: string;
    ctaContact: string;
  };
  /** Secção Sobre Mim */
  about: {
    title: string;
    description: string;
    academic: string;
    mindset: string;
  };
  /** Secção de Competências Técnicas */
  skills: {
    title: string;
    categories: SkillCategory[];
  };
  /** Secção de Projetos */
  projects: {
    title: string;
    subtitle: string;
    items: Project[];
    labels: {
      objective: string;
      problem: string;
      value: string;
    }
  };
  /** Secção de Formação Académica */
  education: {
    title: string;
    items: {
      degree: string;
      school: string;
      specialization?: string;
      period: string;
      description: string;
    }[];
  };
  /** Secção de Objetivos Profissionais */
  career: {
    title: string;
    description: string;
  };
  /** Secção de Contacto */
  contact: {
    title: string;
    text: string;
    emailLabel: string;
    cvLabel: string;
    githubLabel: string;
  };
  /** Rodapé */
  footer: {
    copyright: string;
  }
}