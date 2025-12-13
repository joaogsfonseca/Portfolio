/**
 * useScrollAnimation.ts - Hooks de Animação de Scroll
 * 
 * Contém dois hooks personalizados para efeitos visuais baseados em scroll:
 * 
 * 1. useScrollAnimation - Deteta quando um elemento entra no viewport
 *    e ativa animações de entrada (fade-in, slide-up, etc.)
 * 
 * 2. useScrollProgress - Calcula a percentagem de scroll da página
 *    para a barra de progresso no topo
 */
import { useEffect, useRef, useState } from 'react';

/**
 * Hook para animar elementos quando ficam visíveis no viewport
 * Usa a Intersection Observer API para deteção eficiente
 * 
 * @returns Objeto com:
 *   - ref: Referência para anexar ao elemento a observar
 *   - isVisible: Boolean que indica se o elemento está visível
 * 
 * @example
 * const { ref, isVisible } = useScrollAnimation();
 * return <div ref={ref} className={isVisible ? 'visible' : ''}>...</div>
 */
export const useScrollAnimation = () => {
    // Referência para o elemento DOM a observar
    const ref = useRef<HTMLDivElement>(null);
    // Estado que indica se o elemento está visível
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Criar observer que deteta quando o elemento entra no viewport
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Marcar como visível e parar de observar (animação única)
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,  // Ativar quando 10% do elemento está visível
                rootMargin: '0px 0px -50px 0px'  // Margem de 50px do fundo
            }
        );

        // Começar a observar o elemento se existir
        if (ref.current) {
            observer.observe(ref.current);
        }

        // Limpar observer quando o componente desmonta
        return () => observer.disconnect();
    }, []);

    return { ref, isVisible };
};

/**
 * Hook para calcular o progresso de scroll da página
 * Retorna uma percentagem (0-100) de quanto o utilizador scrollou
 * 
 * @returns Número de 0 a 100 representando a percentagem de scroll
 * 
 * @example
 * const progress = useScrollProgress();
 * return <div style={{ width: `${progress}%` }} className="progress-bar" />
 */
export const useScrollProgress = () => {
    // Estado para armazenar a percentagem de progresso
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        /**
         * Calcula a percentagem de scroll baseada na posição atual
         */
        const handleScroll = () => {
            // Altura total disponível para scroll
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            // Posição atual do scroll
            const scrollPosition = window.scrollY;
            // Calcular percentagem
            setProgress((scrollPosition / totalHeight) * 100);
        };

        // Adicionar listener de scroll
        window.addEventListener('scroll', handleScroll);
        // Remover listener quando o componente desmonta
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return progress;
};
