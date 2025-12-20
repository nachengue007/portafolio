import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import es from './locale/es.json';
import en from './locale/en.json';

i18n.use(initReactI18next).init({
  resources: {
    es: es,
    en: en,
  },
  lng: "es",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;