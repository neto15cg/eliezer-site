import React from "react";
import { Section } from "./components/section";
import { useTranslation } from "react-i18next";

const skills = [
  { name: "Frontend", level: 95 },
  { name: "Backend", level: 85 },
  { name: "Cloud (AWS & DevOps)", level: 75 },
  { name: "Team Leadership & Mentoring", level: 85 },
  { name: "JavaScript (incluindo TS)", level: 95 },
  { name: "React (React.js + React Native + Next.js)", level: 95 },
  { name: "Node.js (Node.js + NestJS)", level: 90 },
  { name: "Golang (Gin)", level: 80 },
  { name: "Python (Django / DRF)", level: 70 },
];

export const Skills = () => {
  const { t } = useTranslation();

  return (
    <Section title={t("skillsSection")}>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 w-full">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-secondary-50 font-medium">
                {skill.name}
              </span>
              <span className="text-secondary-400">{skill.level}%</span>
            </div>
            <div className="h-2 bg-base-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-secondary-500 animate-progress-bar rounded-full"
                style={
                  { "--progress": `${skill.level}%` } as React.CSSProperties
                }
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
