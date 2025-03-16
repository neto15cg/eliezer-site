import { aboutTranslations } from "./about";
import { commonTranslations } from "./common";
import { experienceTranslations } from "./experience";

export const resources = {
  en: {
    translation: {
      ...commonTranslations.en,
      ...aboutTranslations.en,
      ...experienceTranslations.en,
    },
  },
  pt: {
    translation: {
      ...commonTranslations.pt,
      ...aboutTranslations.pt,
      ...experienceTranslations.pt,
    },
  },
};
