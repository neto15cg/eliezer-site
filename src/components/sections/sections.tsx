"use client";
import React, { useEffect, useState } from "react";
import { About } from "./about";
import { Experience } from "./experience";
import { Projects } from "./projects";
import { Chat } from "./chat";
import { Skills } from "./skills";

export const Sections = () => {
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const updateSection = () => {
      const hash = window.location.hash.replace("#", "") || "about";
      setActiveSection(hash);
    };

    updateSection();
    window.addEventListener("hashchange", updateSection);
    return () => window.removeEventListener("hashchange", updateSection);
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <About />;
      case "experience":
        return <Experience />;
      case "projects":
        return <Projects />;
      case "chat":
        return <Chat />;
      case "skills":
        return <Skills />;
      default:
        return <></>;
    }
  };

  return (
    <div className="pb-12">
      <div className="animate-fadeIn">{renderSection()}</div>
    </div>
  );
};
