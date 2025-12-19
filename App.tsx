/**
 * App.tsx - Componente Principal da Aplicação
 * 
 * Este é o componente raiz do portfólio, que contém todas as secções:
 * - Hero: Apresentação inicial
 * - Sobre: Informações pessoais e académicas
 * - Competências: Skills técnicas organizadas por categoria
 * - Projetos: Trabalhos em destaque
 * - Formação: Percurso académico e objetivos profissionais
 * - Contacto: Formulário e links úteis
 */
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';
import { content } from './data/content';
import { Language } from './types';
import { useScrollAnimation, useScrollProgress } from './hooks/useScrollAnimation';
import { useTheme } from './contexts/ThemeContext';
import { Github, FileDown, BookOpen, GraduationCap, Crosshair, Sun, Moon, ChevronDown, ChevronUp } from 'lucide-react';

/**
 * Componente principal que organiza toda a estrutura do portfólio
 */
const App: React.FC = () => {
  // Estado para controlar o idioma selecionado (Português ou Inglês)
  const [language, setLanguage] = useState<Language>('pt');
  // Estado para controlar se todos os projetos são mostrados ou apenas os primeiros 3
  const [showAllProjects, setShowAllProjects] = useState(false);
  // Obter conteúdo traduzido baseado no idioma selecionado
  const t = content[language];
  // Hook personalizado para calcular progresso de scroll da página
  const scrollProgress = useScrollProgress();
  // Hook do contexto de tema para alternar entre modo claro e escuro
  const { theme, toggleTheme } = useTheme();

  // Referências de animação de scroll para cada secção da página
  // Cada secção anima quando fica visível no viewport
  const aboutAnim = useScrollAnimation();
  const skillsAnim = useScrollAnimation();
  const projectsAnim = useScrollAnimation();
  const educationAnim = useScrollAnimation();
  const contactAnim = useScrollAnimation();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Scroll Progress Bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-6 right-6 z-50 p-3 bg-slate-800 hover:bg-slate-700 rounded-full border border-slate-700 shadow-lg transition-all hover:scale-110"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
      </button>

      <Navbar language={language} setLanguage={setLanguage} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6">
          {t.hero.greeting} <br />
          <span className="gradient-text">{t.hero.role}</span>
        </h1>
        <p className="max-w-2xl text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed">
          {t.hero.description}
        </p>
        <div className="flex gap-4 flex-col sm:flex-row w-full sm:w-auto">
          <a href="#projects" className="inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-slate-900 bg-emerald-400 hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-500/20">
            {t.hero.ctaProject}
          </a>
          <a href="#contact" className="inline-flex justify-center items-center px-8 py-3 border border-slate-700 text-base font-medium rounded-lg text-white bg-slate-800 hover:bg-slate-700 transition-all">
            {t.hero.ctaContact}
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-900/50">
        <div ref={aboutAnim.ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-animate ${aboutAnim.isVisible ? 'visible' : ''}`}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-emerald-500 rounded-full"></span>
                {t.about.title}
              </h2>
              <div className="space-y-6 text-slate-300">
                <p className="text-lg leading-relaxed">{t.about.description}</p>
                <div className="flex items-start gap-4 p-4 bg-slate-800 rounded-lg border-l-4 border-emerald-500">
                  <GraduationCap className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <p>{t.about.academic}</p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-slate-800 rounded-lg border-l-4 border-blue-500">
                  <BookOpen className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <p>{t.about.mindset}</p>
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

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div ref={skillsAnim.ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-animate ${skillsAnim.isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl font-bold text-white mb-12 text-center">{t.skills.title}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.skills.categories.map((skillGroup, idx) => (
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

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-900/50">
        <div ref={projectsAnim.ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-animate ${projectsAnim.isVisible ? 'visible' : ''}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">{t.projects.title}</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">{t.projects.subtitle}</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {(showAllProjects ? t.projects.items : t.projects.items.slice(0, 3)).map((project, index) => (
              <ProjectCard key={index} project={project} labels={t.projects.labels} language={language} />
            ))}
          </div>
          {t.projects.items.length > 3 && (
            <div className="text-center mt-10">
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg border border-slate-700 transition-all hover:border-emerald-500/50"
              >
                {showAllProjects ? (
                  <>
                    <ChevronUp className="w-5 h-5" />
                    {language === 'pt' ? 'Ver menos' : 'Show less'}
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-5 h-5" />
                    {language === 'pt' ? `Ver mais ${t.projects.items.length - 3} projetos` : `Show ${t.projects.items.length - 3} more projects`}
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Education & Career Section */}
      <section id="education" className="py-20">
        <div ref={educationAnim.ref} className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 scroll-animate ${educationAnim.isVisible ? 'visible' : ''}`}>

          {/* Education Block */}
          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <GraduationCap className="w-32 h-32 text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <GraduationCap className="text-emerald-400" /> {t.education.title}
            </h2>
            <div className="ml-4 border-l-2 border-emerald-500/30 pl-6 space-y-8">
              {t.education.items.map((edu, index) => (
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
              <Crosshair className="text-blue-400" /> {t.career.title}
            </h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              {t.career.description}
            </p>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 border-t border-slate-800">
        <div ref={contactAnim.ref} className={`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-animate ${contactAnim.isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl font-bold text-white mb-6">{t.contact.title}</h2>
          <p className="text-xl text-slate-400 mb-10">{t.contact.text}</p>

          <ContactForm language={language} />

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a href="/cv.pdf" download className="inline-flex items-center justify-center px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg border border-slate-700 transition-colors">
              <FileDown className="w-5 h-5 mr-2" />
              {t.contact.cvLabel}
            </a>
            <a href="https://github.com/joaogsfonseca" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg border border-slate-700 transition-colors">
              <Github className="w-5 h-5 mr-2" />
              {t.contact.githubLabel}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center">
        <p className="text-slate-600 text-sm">{t.footer.copyright}</p>
      </footer>
    </div>
  );
};

export default App;