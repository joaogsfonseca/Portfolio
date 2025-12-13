/**
 * vite.config.ts - Configuração do Vite
 * 
 * Configuração do bundler Vite para o projeto React.
 * Define servidor de desenvolvimento, plugins e aliases de importação.
 */
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Configuração do servidor de desenvolvimento
  server: {
    port: 3000,      // Porta padrão
    host: '0.0.0.0', // Acessível na rede local
  },
  // Plugins do Vite
  plugins: [react()],
  // Configuração de resolução de módulos
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'), // Alias '@' para a raiz do projeto
    }
  }
});
