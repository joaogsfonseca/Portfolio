/**
 * ProjectCard.tsx - Componente de Cartão de Projeto
 * 
 * Exibe informações de um projeto individual incluindo:
 * - Título e descrição
 * - Objetivo, problema resolvido e valor técnico
 * - Tags de tecnologias utilizadas
 * - Links para GitHub e Demo (quando disponíveis)
 */
import React from 'react';
import { Project } from '../types';
import { Database, Tag, Github, ExternalLink } from 'lucide-react';

/**
 * Props do componente ProjectCard
 * @property project - Objeto com todos os dados do projeto
 * @property labels - Labels traduzidas para objetivo, problema e valor
 * @property language - Idioma atual para texto do botão de demo
 */
interface ProjectCardProps {
  project: Project;
  labels: {
    objective: string;
    problem: string;
    value: string;
  };
  language: 'pt' | 'en';
}

/**
 * Cartão de projeto com animação 3D no hover
 * Apresenta informações detalhadas sobre cada projeto do portfólio
 */
const ProjectCard: React.FC<ProjectCardProps> = ({ project, labels, language }) => {
  return (
    <div className="card-3d bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/20 group flex flex-col">
      <div className="p-6 flex-1 flex flex-col">
        {/* Cabeçalho do Cartão - Ícone e Título */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-slate-900 rounded-lg group-hover:bg-emerald-900/30 transition-colors">
            <Database className="h-6 w-6 text-emerald-400" />
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
            {project.title}
          </h3>
        </div>

        {/* Descrição do Projeto */}
        <p className="text-slate-300 mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Detalhes do Projeto: Objetivo, Problema e Valor Técnico */}
        <div className="space-y-4 mb-6 flex-1">
          <div className="flex gap-2 items-start">
            <span className="text-emerald-400 font-semibold min-w-[80px] text-sm mt-0.5">{labels.objective}:</span>
            <span className="text-slate-400 text-sm">{project.objective}</span>
          </div>
          <div className="flex gap-2 items-start">
            <span className="text-emerald-400 font-semibold min-w-[80px] text-sm mt-0.5">{labels.problem}:</span>
            <span className="text-slate-400 text-sm">{project.problem}</span>
          </div>
          <div className="flex gap-2 items-start">
            <span className="text-emerald-400 font-semibold min-w-[80px] text-sm mt-0.5">{labels.value}:</span>
            <span className="text-slate-400 text-sm">{project.value}</span>
          </div>
        </div>

        {/* Lista de Tags/Tecnologias */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700">
          {project.tags.map((tag) => (
            <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-700 text-emerald-300">
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>

        {/* Botões de Ação - GitHub e Demo */}
        {(project.githubUrl || project.demoUrl) && (
          <div className="flex gap-3 mt-4 pt-4 border-t border-slate-700">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium rounded-lg transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium rounded-lg transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                {language === 'pt' ? 'Ver Demo' : 'View Demo'}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;