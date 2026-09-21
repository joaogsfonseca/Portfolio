/**
 * App.tsx - Componente Principal da Aplicação
 * 
 * Componente raiz que compõe todas as secções do portfólio.
 * Cada secção é um componente independente com tradução e animação próprias.
 */
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { useScrollProgress } from './hooks/useScrollAnimation';
import { useTheme } from './contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const App: React.FC = () => {
  const scrollProgress = useScrollProgress();
  const { theme, toggleTheme } = useTheme();

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

      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;