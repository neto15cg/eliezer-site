import React from "react";
import { Section } from "./components/section";
import { Trans, useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();

  return (
    <Section title={t("aboutMe")}>
      <>
        <p className="text-lg">
          <Trans i18nKey="introText">
            Hi, I'm <strong>Eliezer Marques</strong>
          </Trans>
        </p>
        <p className="text-lg">{t("focusText")}</p>

        <h3 className="text-2xl font-bold text-secondary-500  mt-8">
          {t("experienceTitle")}
        </h3>
        <ul className="list-disc list-inside text-lg">
          <li>
            <Trans i18nKey="experienceItems.frontend">
              <strong>Frontend Development:</strong> React, Nexjs, React Native
              and VanillaJs.
            </Trans>
          </li>
          <li>
            <Trans i18nKey="experienceItems.backend">
              <strong>Backend Development:</strong> NodeJs, NestJs, Gin (Golang)
              and Django (Python).
            </Trans>
          </li>
          <li>
            <Trans i18nKey="experienceItems.cloud">
              <strong>Cloud Computing:</strong> AWS Kit as S3, Cloudfront, RDS,
              ECR, SNS and SQS.
            </Trans>
          </li>
          <li>
            <Trans i18nKey="experienceItems.devops">
              <strong>s</strong> CI/CD pipelines and perfomance otimization
            </Trans>
          </li>
        </ul>

        <p className="text-lg">{t("teamText")}</p>
        <p className="text-lg">{t("personalText")}</p>
      </>
    </Section>
  );
};
