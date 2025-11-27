"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import es from "./es.json";
import en from "./en.json";

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: "es",
      lng: "es",   
      resources: {
        es: { translation: es },
        en: { translation: en }
      },
      detection: {
        order: ["navigator", "cookie", "localStorage", "htmlTag"],
        caches: ["localStorage"]
      }
    });
}

export default i18n;
