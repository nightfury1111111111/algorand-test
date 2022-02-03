import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      Search: "Search projects…",
      "Welcome back": "Welcome back",
    },
  },
  fr: {
    translation: {
      Search: "Rechercher…",
      "Welcome back": "Bon retour",
    },
  },
  de: {
    translation: {
      Search: "Suchen…",
      "Welcome back": "Willkommen zurück",
    },
  },
  nl: {
    translation: {
      Search: "Zoeken…",
      "Welcome back": "Welkom terug",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
