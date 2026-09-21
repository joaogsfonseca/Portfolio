/**
 * ContactSection.tsx - Secção de Contacto
 * 
 * Secção com formulário de contacto, botão de download CV e link GitHub.
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FileDown, Github } from 'lucide-react';
import ContactForm from './ContactForm';

const ContactSection: React.FC = () => {
  const { t } = useTranslation();
  const contactAnim = useScrollAnimation();

  return (
    <section id="contact" className="py-20 bg-slate-900 border-t border-slate-800">
      <div ref={contactAnim.ref} className={`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-animate ${contactAnim.isVisible ? 'visible' : ''}`}>
        <h2 className="text-3xl font-bold text-white mb-6">{t('contact.title')}</h2>
        <p className="text-xl text-slate-400 mb-10">{t('contact.text')}</p>

        <ContactForm />

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <a href={t('contact.cvUrl')} download="CV_Joao_Fonseca.pdf" className="inline-flex items-center justify-center px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg border border-slate-700 transition-colors">
            <FileDown className="w-5 h-5 mr-2" />
            {t('contact.cvLabel')}
          </a>
          <a href="https://github.com/joaogsfonseca" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg border border-slate-700 transition-colors">
            <Github className="w-5 h-5 mr-2" />
            {t('contact.githubLabel')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
