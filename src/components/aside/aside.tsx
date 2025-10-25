/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { RiMenu3Line, RiCloseFill } from "react-icons/ri";
import { SectionLink } from "./components/section-link";
import { useTranslation } from "react-i18next";

export const Aside = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isMenuOpen]);


  const NavigationLinks = () => (
    <>
      <SectionLink href="#about" onClick={() => setIsMenuOpen(false)}>
        {t("about")}
      </SectionLink>
      <SectionLink href="#experience" onClick={() => setIsMenuOpen(false)}>
        {t("experienceSection")}
      </SectionLink>
      <SectionLink href="#projects" onClick={() => setIsMenuOpen(false)}>
        {t("projectsSection")}
      </SectionLink>
      <SectionLink href="#skills" onClick={() => setIsMenuOpen(false)}>
        {t("skillsSection")}
      </SectionLink>
      <SectionLink href="#chat" onClick={() => setIsMenuOpen(false)}>
        {t("askMe")}{" "}
        <span className="inline-block bg-secondary-700 text-xs font-semibold px-1.5 py-0.5 rounded ml-1 text-base-50">
          AI
        </span>
      </SectionLink>
    </>
  );

  return (
    <aside className="md:sticky md:top-0 md:h-screen md:w-2/5 lg:w-2/4 p-6 py-24 overflow-y-auto">
      <div className="flex flex-col h-full justify-between">
        <div>
          <header>
            <div className="flex gap-6 flex-col items-center md:flex-row lg:flex-row">
              <div className="w-44 h-44 mb-4 overflow-hidden rounded-sm relative">
                <img
                  src="/eliezer_m.jpeg"
                  alt="Eliezer Marques profile"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col justify-center w-full">
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

        <nav className="hidden md:flex space-y-2 flex-col my-10 md:my-0 lg:my-0">
          <NavigationLinks />
        </nav>

        <button
          className="md:hidden fixed top-4 right-4 z-50 bg-secondary-600 p-4 rounded-full shadow-lg cursor-pointer"
          onClick={() => setIsMenuOpen(true)}
          name="menu button"
          title="menu button"
        >
          <RiMenu3Line
            size={24}
            className="text-base-50"
            name="menu button"
            title="menu button"
          />
        </button>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-base-950/90 z-50 md:hidden">
            <div className="h-full flex flex-col items-center justify-center">
              <button
                className="absolute top-6 right-6 text-base-50 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
                name="close menu button"
                title="close menu button"
              >
                <RiCloseFill
                  size={24}
                  name="close menu icon"
                  title="close menu icon"
                />
              </button>
              <nav className="space-y-8 flex flex-col items-center">
                <NavigationLinks />
              </nav>
            </div>
          </div>
        )}

        <footer className="text-center text-base-300 mt-8">
          <div className="container mx-auto flex flex-col">
            <div className="flex space-x-6">
              <a
                href="https://github.com/neto15cg"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-base-400 transition"
                title="github"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/eliezer-marques/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-base-400 transition"
                title="linkedin"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/neto15_cg/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-base-400 transition"
                title="instagram"
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
