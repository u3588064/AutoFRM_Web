import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import all locales
import enTranslation from './locales/en';
import zhCNTranslation from './locales/zh-CN';
import zhTWTranslation from './locales/zh-TW';

const resources = {
  en: {
    translation: enTranslation
  },
  'zh-CN': {
    translation: zhCNTranslation
  },
  'zh-TW': {
    translation: zhTWTranslation
  }
};

i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18n
  .init({
    resources,
    fallbackLng: 'en',
    
    interpolation: {
      // React already protects from XSS
      escapeValue: false
    },
    
    detection: {
      // Order of language detection methods
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      // Looking for 'lng' parameter in URL query
      lookupQuerystring: 'lng',
      // Looking for 'i18nextLng' in cookies
      lookupCookie: 'i18nextLng',
      // Looking for 'i18nextLng' in localStorage
      lookupLocalStorage: 'i18nextLng',
      
      // Cache user language
      caches: ['localStorage', 'cookie'],
      
      // Cookie options
      cookieOptions: {
        path: '/',
        sameSite: 'strict',
        secure: import.meta.env.PROD // Using Vite's environment variable
      }
    }
  });

export default i18n;