import { aboutTranslations } from "./about";
import { commonTranslations } from "./common";
import { experienceTranslations } from "./experience";
import { chatTranslations } from "./chat";
import { projectsTranslations } from "./projects";
import { skillsTranslations } from "./skills";

export const resources = {
  en: {
    translation: {
      ...commonTranslations.en,
      ...aboutTranslations.en,
      ...experienceTranslations.en,
      ...chatTranslations.en,
      ...projectsTranslations.en,
      ...skillsTranslations.en,
    },
  },
  pt: {
    translation: {
      ...commonTranslations.pt,
      ...aboutTranslations.pt,
      ...experienceTranslations.pt,
      ...chatTranslations.pt,
      ...projectsTranslations.pt,
      ...skillsTranslations.pt,
    },
  },
};
