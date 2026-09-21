/**
 * Footer.tsx - Rodapé do Portfólio
 * 
 * Rodapé simples com copyright.
 */
import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center">
      <p className="text-slate-600 text-sm">{t('footer.copyright')}</p>
    </footer>
  );
};

export default Footer;
