/**
 * AboutSection.tsx - Secção Sobre Mim
 * 
 * Apresenta informações pessoais, percurso académico e mindset.
 * Inclui foto de perfil com efeito de gradiente no hover.
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { GraduationCap, BookOpen } from 'lucide-react';

const AboutSection: React.FC = () => {
  const { t } = useTranslation();
  const aboutAnim = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div ref={aboutAnim.ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-animate ${aboutAnim.isVisible ? 'visible' : ''}`}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-emerald-500 rounded-full"></span>
              {t('about.title')}
            </h2>
            <div className="space-y-6 text-slate-300">
              <p className="text-lg leading-relaxed">{t('about.description')}</p>
              <div className="flex items-start gap-4 p-4 bg-slate-800 rounded-lg border-l-4 border-emerald-500">
                <GraduationCap className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                <p>{t('about.academic')}</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-slate-800 rounded-lg border-l-4 border-blue-500">
                <BookOpen className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <p>{t('about.mindset')}</p>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            {/* Profile Photo */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 rounded-2xl blur opacity-40 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative aspect-[3/4] w-72 bg-slate-800 rounded-2xl overflow-hidden border border-slate-700">
                <img
                  src="/profile.jpg"
                  alt="João Fonseca"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
