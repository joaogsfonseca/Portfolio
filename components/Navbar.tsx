/**
 * Navbar.tsx - Componente de Navegação
 * 
 * Barra de navegação fixa no topo que permite:
 * - Navegação suave entre secções da página
 * - Alternância de idioma (Português/Inglês)
 * - Menu responsivo para dispositivos móveis
 */
import React, { useState } from 'react';
import { Menu, X, Languages, Code2 } from 'lucide-react';
import { Language } from '../types';

/**
 * Props do componente Navbar
 * @property language - Idioma atualmente selecionado ('pt' ou 'en')
 * @property setLanguage - Função para alterar o idioma
 */
interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

/**
 * Componente de navegação principal
 * Inclui logo, links de navegação e seletor de idioma
 */
const Navbar: React.FC<NavbarProps> = ({ language, setLanguage }) => {
  // Estado para controlar se o menu móvel está aberto ou fechado
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Alterna entre os idiomas Português e Inglês
   */
  const toggleLang = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  // Definição dos links de navegação com tradução dinâmica
  const links = [
    { href: "#about", label: language === 'pt' ? "Sobre" : "About" },
    { href: "#skills", label: language === 'pt' ? "Skills" : "Skills" },
    { href: "#projects", label: language === 'pt' ? "Projetos" : "Projects" },
    { href: "#education", label: language === 'pt' ? "Formação" : "Education" },
    { href: "#contact", label: language === 'pt' ? "Contacto" : "Contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo e Nome - Clicável para voltar ao topo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <Code2 className="h-8 w-8 text-emerald-400" />
            <span className="font-bold text-xl tracking-tight text-white">João Fonseca</span>
          </button>

          {/* Menu Desktop - Visível apenas em ecrãs médios e grandes */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-300 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              {/* Botão de alternar idioma */}
              <button
                onClick={toggleLang}
                className="flex items-center gap-1 bg-slate-800 hover:bg-slate-700 text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors border border-slate-700"
              >
                <Languages className="h-4 w-4" />
                {language.toUpperCase()}
              </button>
            </div>
          </div>

          {/* Botão de Menu Móvel - Visível apenas em ecrãs pequenos */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Móvel Expandido */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  const element = document.querySelector(link.href);
                  element?.scrollIntoView({ behavior: 'smooth' });
                  setIsOpen(false); // Fechar menu após navegação
                }}
                className="text-gray-300 hover:text-white hover:bg-slate-800 block px-3 py-2 rounded-md text-base font-medium w-full text-left cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            {/* Botão de alternar idioma no menu móvel */}
            <button
              onClick={() => {
                toggleLang();
                setIsOpen(false);
              }}
              className="w-full text-left flex items-center gap-2 text-emerald-400 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-md text-base font-medium"
            >
              <Languages className="h-5 w-5" />
              {language === 'pt' ? 'Mudar para Inglês' : 'Switch to Portuguese'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;