import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import enLang from './locales/en/en.json';
import esLang from './locales/es/es.json';
import glLang from './locales/gl/gl.json';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: enLang
  },
  es: {
    translation: esLang
  },
  gl: {
    translation: glLang
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    supportedLngs: ['en', 'es', 'gl'],
    resources,
    fallbackLng: 'en', //If used lng is not available
    detection: {
      order: ["navigator", "htmlTag", "path", "subdomain"],
      caches: ["localStorage", "cookie"]
    },
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;