import { aboutTranslations } from "./about";
import { commonTranslations } from "./common";
import { experienceTranslations } from "./experience";
import { chatTranslations } from "./chat";

export const resources = {
  en: {
    translation: {
      ...commonTranslations.en,
      ...aboutTranslations.en,
      ...experienceTranslations.en,
      ...chatTranslations.en,
    },
  },
  pt: {
    translation: {
      ...commonTranslations.pt,
      ...aboutTranslations.pt,
      ...experienceTranslations.pt,
      ...chatTranslations.pt,
    },
  },
};
