import React from "react";
import { Section } from "./components/section";
import { Trans, useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();

  return (
    <Section id="about" title={t("aboutMe")}>
      <div className="space-y-8">
        <div className="space-y-6">
          <p className="text-xl leading-relaxed text-base-100">
            <Trans i18nKey="introText">
              Hi, I'm <strong className="text-secondary-400">Eliezer Marques</strong>
            </Trans>
          </p>
          <p className="text-xl leading-relaxed text-base-100">{t("focusText")}</p>
        </div>

        <div className="bg-base-800/30 backdrop-blur-sm rounded-2xl p-8 border border-base-700">
          <h3 className="text-2xl font-bold text-secondary-400 mb-6">
            {t("experienceTitle")}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-secondary-500 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <Trans i18nKey="experienceItems.frontend">
                    <strong className="text-secondary-300">Frontend Development:</strong> React, Next.js, React Native and VanillaJS.
                  </Trans>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-secondary-500 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <Trans i18nKey="experienceItems.backend">
                    <strong className="text-secondary-300">Backend Development:</strong> Node.js, NestJS, Gin (Golang) and Django (Python).
                  </Trans>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-secondary-500 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <Trans i18nKey="experienceItems.databases">
                    <strong className="text-secondary-300">Databases & Streaming:</strong> MongoDB, PostgreSQL, Apache Kafka, SQS and SNS.
                  </Trans>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-secondary-500 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <Trans i18nKey="experienceItems.cloud">
                    <strong className="text-secondary-300">Cloud Computing:</strong> AWS Kit as S3, CloudFront, RDS, ECR, SNS and SQS.
                  </Trans>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-secondary-500 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <Trans i18nKey="experienceItems.devops">
                    <strong className="text-secondary-300">DevOps Practices:</strong> CI/CD pipelines and performance optimization
                  </Trans>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-xl leading-relaxed text-base-100">{t("teamText")}</p>
          <p className="text-xl leading-relaxed text-base-100">{t("personalText")}</p>
        </div>
      </div>
    </Section>
  );
};
