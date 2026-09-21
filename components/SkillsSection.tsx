/**
 * SkillsSection.tsx - Secção de Competências Técnicas
 * 
 * Grid de competências técnicas organizadas por categoria.
 * Lê as categorias diretamente do ficheiro de tradução.
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface SkillCategory {
  category: string;
  items: string[];
}

const SkillsSection: React.FC = () => {
  const { t } = useTranslation();
  const skillsAnim = useScrollAnimation();
  const categories = t('skills.categories', { returnObjects: true }) as SkillCategory[];

  return (
    <section id="skills" className="py-20">
      <div ref={skillsAnim.ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-animate ${skillsAnim.isVisible ? 'visible' : ''}`}>
        <h2 className="text-3xl font-bold text-white mb-12 text-center">{t('skills.title')}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((skillGroup, idx) => (
            <div key={idx} className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-emerald-500/30 transition-colors">
              <h3 className="text-emerald-400 font-semibold mb-4 text-lg">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((item, i) => (
                  <li key={i} className="flex items-center text-slate-300">
                    <div className="w-1.5 h-1.5 bg-slate-500 rounded-full mr-2"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
