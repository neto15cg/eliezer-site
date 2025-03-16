import { experienceTranslations } from "./translations/experience";
import { commonTranslations } from "./translations/common";

export const resources = {
  pt: {
    translation: {
      ...commonTranslations.pt,
      experienceData: experienceTranslations.pt.experience,
    },
  },
  en: {
    translation: {
      ...commonTranslations.en,
      experienceData: experienceTranslations.en.experience,
    },
  },
};
