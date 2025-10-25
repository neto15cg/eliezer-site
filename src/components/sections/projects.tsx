import React from "react";
import { Section } from "./components/section";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <Section id="projects" title={t("projectsSection")}>
      <h3 className="text-2xl font-bold text-secondary-500 mt-8">
        {t("projects.onboarding.title")}
      </h3>
      <ul className="list-disc list-inside text-lg">
        <li>{t("projects.onboarding.achievements.0")}</li>
        <li>{t("projects.onboarding.achievements.1")}</li>
      </ul>

      <h3 className="text-2xl font-bold text-secondary-500 mt-8">
        {t("projects.productManagement.title")}
      </h3>
      <ul className="list-disc list-inside text-lg">
        <li>{t("projects.productManagement.achievements.0")}</li>
        <li>{t("projects.productManagement.achievements.1")}</li>
      </ul>

      <h3 className="text-2xl font-bold text-secondary-500 mt-8">
        {t("projects.cms.title")}
      </h3>
      <ul className="list-disc list-inside text-lg">
        <li>{t("projects.cms.achievements.0")}</li>
        <li>{t("projects.cms.achievements.1")}</li>
      </ul>

      <h3 className="text-2xl font-bold text-secondary-500 mt-8">
        {t("projects.financial.title")}
      </h3>
      <ul className="list-disc list-inside text-lg">
        <li>{t("projects.financial.achievements.0")}</li>
        <li>{t("projects.financial.achievements.1")}</li>
      </ul>

      <h3 className="text-2xl font-bold text-secondary-500 mt-8">
        {t("projects.hr.title")}
      </h3>
      <ul className="list-disc list-inside text-lg">
        <li>{t("projects.hr.achievements.0")}</li>
        <li>{t("projects.hr.achievements.1")}</li>
      </ul>

      <h3 className="text-2xl font-bold text-secondary-500 mt-8">
        {t("projects.escolado.title")}
      </h3>
      <ul className="list-disc list-inside text-lg">
        <li>{t("projects.escolado.achievements.0")}</li>
        <li>{t("projects.escolado.achievements.1")}</li>
      </ul>

      <h3 className="text-2xl font-bold text-secondary-500 mt-8">
        {t("projects.fertili.title")}
      </h3>
      <ul className="list-disc list-inside text-lg">
        <li>{t("projects.fertili.achievements.0")}</li>
        <li>{t("projects.fertili.achievements.1")}</li>
      </ul>
    </Section>
  );
};
