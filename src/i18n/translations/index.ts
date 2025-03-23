import { aboutTranslations } from "./about";
import { commonTranslations } from "./common";
import { experienceTranslations } from "./experience";
import { chatTranslations } from "./chat";
import { projectsTranslations } from "./projects";

export const resources = {
  en: {
    translation: {
      ...commonTranslations.en,
      ...aboutTranslations.en,
      ...experienceTranslations.en,
      ...chatTranslations.en,
      ...projectsTranslations.en,
    },
  },
  pt: {
    translation: {
      ...commonTranslations.pt,
      ...aboutTranslations.pt,
      ...experienceTranslations.pt,
      ...chatTranslations.pt,
      ...projectsTranslations.pt,
    },
  },
};
