import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LenguageDetector from "i18next-browser-languagedetector";


import es from "../locals/es.json";
import en from "../locals/en.json";


const resources = {
    es: {
        translation: es,
    },
    en: {
        translation: en,
    },
};

i18next
    .use(LenguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "es",
        to: {
            escapeValue: false
        }
    });

export default i18next;

