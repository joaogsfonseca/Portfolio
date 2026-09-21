import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import pt from './locales/pt.json';
import en from './locales/en.json';

// Limpar cache antigo com código regional (ex: pt-PT)
const stored = localStorage.getItem('i18nextLng');
if (stored && stored.includes('-')) {
  localStorage.setItem('i18nextLng', stored.split('-')[0]);
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: pt },
      en: { translation: en },
    },
    fallbackLng: 'pt',
    supportedLngs: ['pt', 'en'],
    load: 'languageOnly',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      convertDetectedLanguage: (lng: string) => lng.split('-')[0],
    },
  });

export default i18n;
