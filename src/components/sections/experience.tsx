import React from "react";
import { Section } from "./components/section";
import { Trans, useTranslation } from "react-i18next";

export const Experience = () => {
  const { t } = useTranslation();

  const sectionTitle = t("experienceSection");

  return (
    <Section id="experience" title={sectionTitle}>
      <>
        <p className="text-lg mb-12 leading-relaxed text-gray-300">
          {t("experience.introduction")}
        </p>

        <div className="space-y-8">
          <div className="border-l-4 border-secondary-500 pl-6 py-4 bg-gradient-to-r from-secondary-900/20 to-transparent rounded-r-lg">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-2xl font-bold text-white">
                {t("experience.integrations.title")}
              </h3>
              <span className="text-sm text-secondary-400 ml-4 whitespace-nowrap">
                {t("experience.integrations.period")}
              </span>
            </div>
            <p className="text-xl text-secondary-400 font-semibold mb-1">
              {t("experience.integrations.company")}
            </p>
            <p className="text-sm text-gray-400 mb-4">
              {t("experience.integrations.location")}
            </p>
            <ul className="list-none space-y-2 text-gray-300">
              <li>
                <Trans i18nKey="experience.integrations.achievements.integrations">
                  <strong className="text-secondary-400">Integrations Squad:</strong>
                </Trans>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-secondary-500 pl-6 py-4 bg-gradient-to-r from-secondary-900/20 to-transparent rounded-r-lg">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-2xl font-bold text-white">
                {t("experience.olist.title")}
              </h3>
              <span className="text-sm text-secondary-400 ml-4 whitespace-nowrap">
                {t("experience.olist.period")}
              </span>
            </div>
            <p className="text-xl text-secondary-400 font-semibold mb-1">
              {t("experience.olist.company")}
            </p>
            <p className="text-sm text-gray-400 mb-4">
              {t("experience.olist.location")}
            </p>
            <ul className="list-none space-y-2 text-gray-300">
              <li>
                <Trans i18nKey="experience.olist.achievements.catalog">
                  <strong className="text-secondary-400">Catalog Squad:</strong>
                </Trans>
              </li>
              <li>
                <Trans i18nKey="experience.olist.achievements.controlTower">
                  <strong className="text-secondary-400">Control Tower Squad:</strong>
                </Trans>
              </li>
              <li>
                <Trans i18nKey="experience.olist.achievements.growth">
                  <strong className="text-secondary-400">Growth Squad:</strong>
                </Trans>
              </li>
              <li>
                <Trans i18nKey="experience.olist.achievements.customerJourney">
                  <strong className="text-secondary-400">Customer Journey Squad:</strong>
                </Trans>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-secondary-400/60 pl-6 py-4 bg-gradient-to-r from-secondary-900/10 to-transparent rounded-r-lg">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-2xl font-bold text-white">
                {t("experience.agilize.title")}
              </h3>
              <span className="text-sm text-secondary-400 ml-4 whitespace-nowrap">
                {t("experience.agilize.period")}
              </span>
            </div>
            <p className="text-xl text-secondary-400 font-semibold mb-1">
              {t("experience.agilize.company")}
            </p>
            <p className="text-sm text-gray-400 mb-4">
              {t("experience.agilize.location")}
            </p>
            <ul className="list-none space-y-2 text-gray-300">
              <li>{t("experience.agilize.achievements.legacySystem")}</li>
              <li>{t("experience.agilize.achievements.financialSystem")}</li>
              <li>{t("experience.agilize.achievements.hrSystem")}</li>
            </ul>
            <p className="text-gray-300 mt-4 italic">
              {t("experience.agilize.achievements.impact")}
            </p>
          </div>

          <div className="border-l-4 border-secondary-400/50 pl-6 py-4 bg-gradient-to-r from-secondary-900/10 to-transparent rounded-r-lg">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-2xl font-bold text-white">
                {t("experience.avansys.title")}
              </h3>
              <span className="text-sm text-secondary-400 ml-4 whitespace-nowrap">
                {t("experience.avansys.period")}
              </span>
            </div>
            <p className="text-xl text-secondary-400 font-semibold mb-1">
              {t("experience.avansys.company")}
            </p>
            <p className="text-sm text-gray-400 mb-4">
              {t("experience.avansys.location")}
            </p>
            <ul className="list-none space-y-2 text-gray-300">
              <li>{t("experience.avansys.achievements.legacySystem")}</li>
              <li>{t("experience.avansys.achievements.financialSystem")}</li>
              <li>{t("experience.avansys.achievements.hrSystem")}</li>
            </ul>
          </div>

          <div className="border-l-4 border-secondary-400/50 pl-6 py-4 bg-gradient-to-r from-secondary-900/10 to-transparent rounded-r-lg">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-2xl font-bold text-white">
                {t("experience.falqon.title")}
              </h3>
              <span className="text-sm text-secondary-400 ml-4 whitespace-nowrap">
                {t("experience.falqon.period")}
              </span>
            </div>
            <p className="text-xl text-secondary-400 font-semibold mb-1">
              {t("experience.falqon.company")}
            </p>
            <p className="text-sm text-gray-400 mb-4">
              {t("experience.falqon.location")}
            </p>
            <ul className="list-none space-y-2 text-gray-300">
              <li>{t("experience.falqon.achievements.webMobile")}</li>
              <li>{t("experience.falqon.achievements.backend")}</li>
            </ul>
          </div>

          <div className="border-l-4 border-secondary-400/50 pl-6 py-4 bg-gradient-to-r from-secondary-900/10 to-transparent rounded-r-lg">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-2xl font-bold text-white">
                {t("experience.vasta.title")}
              </h3>
              <span className="text-sm text-secondary-400 ml-4 whitespace-nowrap">
                {t("experience.vasta.period")}
              </span>
            </div>
            <p className="text-xl text-secondary-400 font-semibold mb-1">
              {t("experience.vasta.company")}
            </p>
            <p className="text-sm text-gray-400 mb-4">
              {t("experience.vasta.location")}
            </p>
            <ul className="list-none space-y-2 text-gray-300">
              <li>{t("experience.vasta.achievements.web")}</li>
              <li>{t("experience.vasta.achievements.backend")}</li>
            </ul>
          </div>

          <div className="border-l-4 border-secondary-400/50 pl-6 py-4 bg-gradient-to-r from-secondary-900/10 to-transparent rounded-r-lg">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-2xl font-bold text-white">
                {t("experience.trainee.title")}
              </h3>
              <span className="text-sm text-secondary-400 ml-4 whitespace-nowrap">
                {t("experience.trainee.period")}
              </span>
            </div>
            <p className="text-xl text-secondary-400 font-semibold mb-1">
              {t("experience.trainee.company")}
            </p>
            <p className="text-sm text-gray-400 mb-4">
              {t("experience.trainee.location")}
            </p>
            <ul className="list-none space-y-2 text-gray-300">
              <li>{t("experience.trainee.description")}</li>
            </ul>
          </div>
        </div>
      </>
    </Section>
  );
};
