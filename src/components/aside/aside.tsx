"use client";

import Image from "next/image";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SectionLink } from "./components/section-link";
import { useTranslation } from "react-i18next";

export const Aside = () => {
  const { t } = useTranslation();

  return (
    <aside className="md:sticky md:top-0 md:h-screen md:w-2/5 lg:w-2/4 p-6 py-12 bg-base-950 overflow-y-auto">
      <div className="flex flex-col h-full justify-between">
        <div>
          <header>
            <div className="flex gap-6 flex-col items-center md:flex-row lg:flex-row">
              <div className="w-44 h-44 mb-4 overflow-hidden rounded-sm relative">
                <Image
                  src="/eliezer_m.jpeg"
                  alt="Eliezer Marques profile"
                  fill
                  className="object-cover"
                  priority
                  quality={100}
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-4xl font-bold mb-2 text-base-50">
                  Eliezer Marques
                </h2>
                <h3 className="text-2xl text-base-400 font-medium">
                  {t("seniorDev")}
                </h3>
              </div>
            </div>
            <p className="text-base-300 mt-6 text-[1.2rem]">{t("intro")}</p>
          </header>
        </div>
        <nav className="space-y-2 flex flex-col my-10 md:my-0 lg:my-0">
          <SectionLink href="#about">{t("about")}</SectionLink>
          <SectionLink href="#experience">{t("experienceSection")}</SectionLink>
          <SectionLink href="#projects">{t("projects")}</SectionLink>
          <SectionLink href="#chat">
            {t("askMe")}{" "}
            <span className="inline-block bg-secondary-600 text-xs font-semibold px-1.5 py-0.5 rounded ml-1 text-base-50">
              AI
            </span>
          </SectionLink>
        </nav>

        <footer className="text-center text-base-300 xs:mt-8">
          <div className="container mx-auto flex flex-col">
            <div className="flex space-x-6">
              <a
                href="https://github.com/neto15cg"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-base-400 transition"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/eliezer-marques/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-base-400 transition"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/neto15_cg/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-base-400 transition"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </aside>
  );
};
