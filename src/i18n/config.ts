"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "./translations/index";

i18n.use(initReactI18next).init({
  resources,
  lng: "pt",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
