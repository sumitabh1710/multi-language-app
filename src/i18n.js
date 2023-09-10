import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,
    backend: {
      loadPath: "/assets/i18n/{{ns}}/{{lng}}.json",
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
      formatSeparator: ",",
    },
    ns: ["common", "home", "about"],
    react: {
      wait: true,
    },
  });

export default i18n;
