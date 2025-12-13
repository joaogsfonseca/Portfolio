/**
 * ContactForm.tsx - Componente de Formulário de Contacto
 * 
 * Formulário funcional integrado com Formspree para envio de mensagens.
 * Características:
 * - Validação de campos obrigatórios
 * - Feedback visual de estado (enviando, sucesso, erro)
 * - Suporte bilingue (Português/Inglês)
 */
import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

/**
 * Props do componente
 * @property language - Idioma para as labels e mensagens
 */
interface ContactFormProps {
    language: 'pt' | 'en';
}

/**
 * Formulário de contacto com integração Formspree
 * Permite aos visitantes enviar mensagens diretamente pelo site
 */
const ContactForm: React.FC<ContactFormProps> = ({ language }) => {
    // Estado para armazenar os dados do formulário
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    // Estado para controlar o status de envio do formulário
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    // Traduções das labels e mensagens do formulário
    const labels = {
        pt: {
            name: 'Nome',
            email: 'Email',
            message: 'Mensagem',
            send: 'Enviar Mensagem',
            sending: 'A enviar...',
            success: 'Mensagem enviada com sucesso!',
            error: 'Erro ao enviar. Tente novamente.',
            namePlaceholder: 'O seu nome',
            emailPlaceholder: 'seu.email@exemplo.com',
            messagePlaceholder: 'Escreva a sua mensagem aqui...'
        },
        en: {
            name: 'Name',
            email: 'Email',
            message: 'Message',
            send: 'Send Message',
            sending: 'Sending...',
            success: 'Message sent successfully!',
            error: 'Error sending. Please try again.',
            namePlaceholder: 'Your name',
            emailPlaceholder: 'your.email@example.com',
            messagePlaceholder: 'Write your message here...'
        }
    };

    // Obter tradução atual com base no idioma selecionado
    const t = labels[language];

    /**
     * Processa o envio do formulário
     * Envia os dados para o Formspree e atualiza o estado conforme a resposta
     */
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            // Enviar dados para o endpoint do Formspree
            const response = await fetch('https://formspree.io/f/mkgdkdyy', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                // Limpar formulário após envio bem-sucedido
                setFormData({ name: '', email: '', message: '' });
                // Voltar ao estado inicial após 5 segundos
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    /**
     * Atualiza o estado do formulário quando o utilizador escreve
     */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <div className="grid gap-6">
                {/* Campos de Nome e Email lado a lado em ecrãs maiores */}
                <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2 text-left">
                            {t.name}
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder={t.namePlaceholder}
                            className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2 text-left">
                            {t.email}
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder={t.emailPlaceholder}
                            className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        />
                    </div>
                </div>

                {/* Campo de Mensagem */}
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2 text-left">
                        {t.message}
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t.messagePlaceholder}
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                    />
                </div>

                {/* Mensagem de Sucesso */}
                {status === 'success' && (
                    <div className="flex items-center gap-2 text-emerald-400 bg-emerald-900/30 p-4 rounded-lg">
                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                        <span>{t.success}</span>
                    </div>
                )}

                {/* Mensagem de Erro */}
                {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-400 bg-red-900/30 p-4 rounded-lg">
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        <span>{t.error}</span>
                    </div>
                )}

                {/* Botão de Envio */}
                <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full inline-flex items-center justify-center px-6 py-4 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-700 disabled:cursor-not-allowed text-slate-900 font-bold rounded-lg transition-all hover:shadow-lg hover:shadow-emerald-500/25"
                >
                    <Send className="w-5 h-5 mr-2" />
                    {status === 'sending' ? t.sending : t.send}
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
