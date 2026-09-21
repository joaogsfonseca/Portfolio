/**
 * ProjectsSection.tsx - Secção de Projetos em Destaque
 * 
 * Exibe os projetos do portfólio em grid, com botão
 * para mostrar/esconder projetos adicionais.
 */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ProjectCard from './ProjectCard';

interface ProjectItem {
  title: string;
  tags: string[];
  description: string;
  objective: string;
  problem: string;
  value: string;
  githubUrl?: string;
  demoUrl?: string;
}

const ProjectsSection: React.FC = () => {
  const { t } = useTranslation();
  const projectsAnim = useScrollAnimation();
  const [showAllProjects, setShowAllProjects] = useState(false);

  const items = t('projects.items', { returnObjects: true }) as ProjectItem[];
  const labels = t('projects.labels', { returnObjects: true }) as {
    objective: string;
    problem: string;
    value: string;
  };

  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div ref={projectsAnim.ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-animate ${projectsAnim.isVisible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">{t('projects.title')}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">{t('projects.subtitle')}</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {(showAllProjects ? items : items.slice(0, 3)).map((project, index) => (
            <ProjectCard key={index} project={project} labels={labels} />
          ))}
        </div>
        {items.length > 3 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg border border-slate-700 transition-all hover:border-emerald-500/50"
            >
              {showAllProjects ? (
                <>
                  <ChevronUp className="w-5 h-5" />
                  {t('projects.showLess')}
                </>
              ) : (
                <>
                  <ChevronDown className="w-5 h-5" />
                  {t('projects.showMore', { count: items.length - 3 })}
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
