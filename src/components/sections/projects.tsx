import React from "react";
import { Section } from "./components/section";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <Section id="projects" title={t("projectsSection")}>
      <div className="space-y-8">
        <div className="border-l-4 border-secondary-500 pl-6 py-4 bg-gradient-to-r from-secondary-900/20 to-transparent rounded-r-lg">
          <h3 className="text-2xl font-bold text-white mb-3">
            {t("projects.onboarding.title")}
          </h3>
          <ul className="list-none space-y-2 text-gray-300">
            <li>• {t("projects.onboarding.achievements.0")}</li>
            <li>• {t("projects.onboarding.achievements.1")}</li>
          </ul>
        </div>

        <div className="border-l-4 border-secondary-500 pl-6 py-4 bg-gradient-to-r from-secondary-900/20 to-transparent rounded-r-lg">
          <h3 className="text-2xl font-bold text-white mb-3">
            {t("projects.productManagement.title")}
          </h3>
          <ul className="list-none space-y-2 text-gray-300">
            <li>• {t("projects.productManagement.achievements.0")}</li>
            <li>• {t("projects.productManagement.achievements.1")}</li>
          </ul>
        </div>

        <div className="border-l-4 border-secondary-500 pl-6 py-4 bg-gradient-to-r from-secondary-900/20 to-transparent rounded-r-lg">
          <h3 className="text-2xl font-bold text-white mb-3">
            {t("projects.cms.title")}
          </h3>
          <ul className="list-none space-y-2 text-gray-300">
            <li>• {t("projects.cms.achievements.0")}</li>
            <li>• {t("projects.cms.achievements.1")}</li>
          </ul>
        </div>

        <div className="border-l-4 border-secondary-400/60 pl-6 py-4 bg-gradient-to-r from-secondary-900/10 to-transparent rounded-r-lg">
          <h3 className="text-2xl font-bold text-white mb-3">
            {t("projects.financial.title")}
          </h3>
          <ul className="list-none space-y-2 text-gray-300">
            <li>• {t("projects.financial.achievements.0")}</li>
            <li>• {t("projects.financial.achievements.1")}</li>
          </ul>
        </div>

        <div className="border-l-4 border-secondary-400/50 pl-6 py-4 bg-gradient-to-r from-secondary-900/10 to-transparent rounded-r-lg">
          <h3 className="text-2xl font-bold text-white mb-3">
            {t("projects.hr.title")}
          </h3>
          <ul className="list-none space-y-2 text-gray-300">
            <li>• {t("projects.hr.achievements.0")}</li>
            <li>• {t("projects.hr.achievements.1")}</li>
          </ul>
        </div>

        <div className="border-l-4 border-secondary-400/50 pl-6 py-4 bg-gradient-to-r from-secondary-900/10 to-transparent rounded-r-lg">
          <h3 className="text-2xl font-bold text-white mb-3">
            {t("projects.escolado.title")}
          </h3>
          <ul className="list-none space-y-2 text-gray-300">
            <li>• {t("projects.escolado.achievements.0")}</li>
            <li>• {t("projects.escolado.achievements.1")}</li>
          </ul>
        </div>

        <div className="border-l-4 border-secondary-400/50 pl-6 py-4 bg-gradient-to-r from-secondary-900/10 to-transparent rounded-r-lg">
          <h3 className="text-2xl font-bold text-white mb-3">
            {t("projects.fertili.title")}
          </h3>
          <ul className="list-none space-y-2 text-gray-300">
            <li>• {t("projects.fertili.achievements.0")}</li>
            <li>• {t("projects.fertili.achievements.1")}</li>
          </ul>
        </div>
      </div>
    </Section>
  );
};
