/**
 * types.ts - Definições de Tipos TypeScript
 * 
 * Contém interfaces e tipos reutilizáveis pela aplicação.
 * Tipos de tradução geridos pelo i18next (não necessitam definição manual).
 */

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