/**
 * EducationSection.tsx - Secção de Formação e Carreira
 * 
 * Timeline de formação académica e bloco de objetivos profissionais.
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { GraduationCap, Crosshair } from 'lucide-react';

interface EducationItem {
  degree: string;
  school: string;
  specialization?: string;
  period: string;
  description: string;
}

const EducationSection: React.FC = () => {
  const { t } = useTranslation();
  const educationAnim = useScrollAnimation();
  const items = t('education.items', { returnObjects: true }) as EducationItem[];

  return (
    <section id="education" className="py-20">
      <div ref={educationAnim.ref} className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 scroll-animate ${educationAnim.isVisible ? 'visible' : ''}`}>

        {/* Education Block */}
        <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <GraduationCap className="w-32 h-32 text-emerald-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <GraduationCap className="text-emerald-400" /> {t('education.title')}
          </h2>
          <div className="ml-4 border-l-2 border-emerald-500/30 pl-6 space-y-8">
            {items.map((edu, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 bg-emerald-500 rounded-full border-4 border-slate-900"></div>
                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                <p className="text-emerald-400 font-medium mb-1">{edu.school}</p>
                <p className="text-slate-500 text-sm mb-2">{edu.period}</p>
                {edu.specialization && <p className="text-slate-400 font-medium mb-2">{edu.specialization}</p>}
                <p className="text-slate-400 text-sm leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Career Goals Block */}
        <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 relative overflow-hidden">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Crosshair className="text-blue-400" /> {t('career.title')}
          </h2>
          <p className="text-slate-300 leading-relaxed text-lg">
            {t('career.description')}
          </p>
        </div>

      </div>
    </section>
  );
};

export default EducationSection;
