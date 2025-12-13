/**
 * index.tsx - Ponto de Entrada da Aplicação
 * 
 * Este ficheiro é o ponto de entrada do React.
 * Responsável por:
 * - Montar a aplicação no elemento DOM #root
 * - Envolver a aplicação com os providers necessários (ThemeProvider)
 * - Ativar React StrictMode para deteção de problemas
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './contexts/ThemeContext';

// Obter o elemento DOM onde a aplicação será montada
const rootElement = document.getElementById('root');

// Verificar se o elemento existe para evitar erros
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Criar raiz do React e renderizar a aplicação
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    {/* ThemeProvider fornece gestão de tema a toda a aplicação */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);