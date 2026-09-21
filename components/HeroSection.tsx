/**
 * HeroSection.tsx - Secção de Apresentação Inicial
 * 
 * Apresentação do portfólio com nome, função, descrição,
 * blobs animados de fundo e botões de ação (CTA).
 */
import React from 'react';
import { useTranslation } from 'react-i18next';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6">
        {t('hero.greeting')} <br />
        <span className="gradient-text">{t('hero.role')}</span>
      </h1>
      <p className="max-w-2xl text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed">
        {t('hero.description')}
      </p>
      <div className="flex gap-4 flex-col sm:flex-row w-full sm:w-auto">
        <a href="#projects" className="inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-slate-900 bg-emerald-400 hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-500/20">
          {t('hero.ctaProject')}
        </a>
        <a href="#contact" className="inline-flex justify-center items-center px-8 py-3 border border-slate-700 text-base font-medium rounded-lg text-white bg-slate-800 hover:bg-slate-700 transition-all">
          {t('hero.ctaContact')}
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
