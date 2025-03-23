"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "./translations/index";

const getInitialLanguage = () => {
  try {
    if (typeof window !== "undefined") {
      return localStorage.getItem("language") || "pt";
    }
  } catch (error) {
    console.warn("Failed to access localStorage:", error);
  }
  return "pt";
};

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

if (typeof window !== "undefined") {
  i18n.on("languageChanged", (lng) => {
    try {
      localStorage.setItem("language", lng);
    } catch (error) {
      console.warn("Failed to save language to localStorage:", error);
    }
  });
}

export default i18n;
