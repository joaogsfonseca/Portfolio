/**
 * ThemeContext.tsx - Contexto de Tema da Aplicação
 * 
 * Fornece gestão global de tema (claro/escuro) para toda a aplicação.
 * Funcionalidades:
 * - Persistência do tema escolhido no localStorage
 * - Aplicação automática de classes CSS para o tema
 * - Hook personalizado useTheme para acesso ao tema
 */
import React, { createContext, useContext, useState, useEffect } from 'react';

// Tipos de tema disponíveis
type Theme = 'dark' | 'light';

/**
 * Estrutura do contexto de tema
 * @property theme - Tema atualmente ativo
 * @property toggleTheme - Função para alternar entre temas
 */
interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

// Criar contexto com valor inicial undefined
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Provider que envolve a aplicação e fornece o contexto de tema
 * Gere o estado do tema e persiste a preferência do utilizador
 */
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Estado do tema, inicializado como escuro por defeito
    const [theme, setTheme] = useState<Theme>('dark');

    // Carregar tema guardado do localStorage quando o componente monta
    useEffect(() => {
        const saved = localStorage.getItem('theme') as Theme;
        if (saved) setTheme(saved);
    }, []);

    // Guardar tema no localStorage e aplicar classe CSS quando o tema muda
    useEffect(() => {
        localStorage.setItem('theme', theme);
        // Adicionar/remover classe 'light-mode' no elemento raiz do documento
        document.documentElement.classList.toggle('light-mode', theme === 'light');
    }, [theme]);

    /**
     * Alterna entre tema escuro e claro
     */
    const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

/**
 * Hook personalizado para aceder ao contexto de tema
 * @throws Error se usado fora do ThemeProvider
 * @returns Objeto com tema atual e função para alternar
 */
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within ThemeProvider');
    return context;
};
