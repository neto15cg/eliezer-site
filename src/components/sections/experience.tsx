import React from "react";
import { Section } from "./components/section";
import { Trans, useTranslation } from "react-i18next";

export const Experience = () => {
  const { t } = useTranslation();

  const sectionTitle = t("experienceSection");

  return (
    <Section title={sectionTitle}>
      <>
        <h3 className="text-2xl font-bold text-secondary-500 mt-8">
          {t("experience.olist.title")}
        </h3>
        <p className="text-1xl ">
          <strong>{t("experience.olist.company")}</strong> |{" "}
          {t("experience.olist.period")} | {t("experience.olist.location")}
        </p>

        <ul className="list-disc list-inside text-lg">
          <li>
            <Trans i18nKey="experience.olist.achievements.catalog">
              <strong>Catalog Squad:</strong>
            </Trans>
          </li>
          <li>
            <Trans i18nKey="experience.olist.achievements.controlTower">
              <strong>Control Tower Squad:</strong>
            </Trans>
          </li>
          <li>
            <Trans i18nKey="experience.olist.achievements.growth">
              <strong>Growth Squad:</strong>
            </Trans>
          </li>
          <li>
            <Trans i18nKey="experience.olist.achievements.customerJourney">
              <strong>Customer Journey Squad:</strong>
            </Trans>
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-secondary-500  mt-8">
          {t("experience.agilize.title")}
        </h3>
        <p className="text-lg ">
          <strong>{t("experience.agilize.company")}</strong> |{" "}
          {t("experience.agilize.period")} | {t("experience.agilize.location")}
        </p>

        <ul className="list-disc list-inside text-lg">
          <li>{t("experience.agilize.achievements.legacySystem")}</li>
          <li>{t("experience.agilize.achievements.financialSystem")}</li>
          <li>{t("experience.agilize.achievements.hrSystem")}</li>
        </ul>
        <p className="text-lg">{t("experience.agilize.achievements.impact")}</p>

        <h3 className="text-2xl font-bold text-secondary-500  mt-8">
          {t("experience.avansys.title")}
        </h3>
        <p className="text-lg ">
          <strong>{t("experience.avansys.company")}</strong> |{" "}
          {t("experience.avansys.period")} | {t("experience.avansys.location")}
        </p>

        <ul className="list-disc list-inside text-lg">
          <li>{t("experience.avansys.achievements.legacySystem")}</li>
          <li>{t("experience.avansys.achievements.financialSystem")}</li>
          <li>{t("experience.avansys.achievements.hrSystem")}</li>
        </ul>

        <h3 className="text-2xl font-bold text-secondary-500  mt-8">
          {t("experience.falqon.title")}
        </h3>
        <p className="text-lg ">
          <strong>{t("experience.falqon.company")}</strong> |{" "}
          {t("experience.falqon.period")} | {t("experience.falqon.location")}
        </p>

        <ul className="list-disc list-inside text-lg">
          <li>{t("experience.falqon.achievements.webMobile")}</li>
          <li>{t("experience.falqon.achievements.backend")}</li>
        </ul>

        <h3 className="text-2xl font-bold text-secondary-500  mt-8">
          {t("experience.vasta.title")}
        </h3>
        <p className="text-lg ">
          <strong>{t("experience.vasta.company")}</strong> |{" "}
          {t("experience.vasta.period")} | {t("experience.vasta.location")}
        </p>
        <ul className="list-disc list-inside text-lg">
          <li>{t("experience.vasta.achievements.web")}</li>
          <li>{t("experience.vasta.achievements.backend")}</li>
        </ul>

        <h3 className="text-2xl font-bold text-secondary-500  mt-8">
          {t("experience.trainee.title")}
        </h3>
        <p className="text-lg ">
          <strong>{t("experience.trainee.company")}</strong> |{" "}
          {t("experience.trainee.period")} | {t("experience.trainee.location")}
        </p>
        <ul className="list-disc list-inside text-lg">
          <li>{t("experience.trainee.description")}</li>
        </ul>
      </>
    </Section>
  );
};
