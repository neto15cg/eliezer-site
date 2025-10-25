import React from "react";
import { Section } from "./components/section";
import { useTranslation } from "react-i18next";

const skillGroups = [
  {
    title: "Frontend Development",
    skills: [
      { name: "Frontend", level: 95 },
      { name: "JavaScript (incluindo TS)", level: 95 },
      { name: "React (React.js + React Native + Next.js)", level: 95 },
      { name: "Microfrontend", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Webpack", level: 80 },
      { name: "Styled Components", level: 85 },
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Backend", level: 90 },
      { name: "Node.js (Node.js + NestJS)", level: 90 },
      { name: "NestJS", level: 90 },
      { name: "Golang (Gin)", level: 80 },
      { name: "Python (Django / DRF)", level: 70 },
      { name: "Kotlin", level: 75 },
      { name: "Micronaut", level: 70 },
      { name: "Laravel", level: 75 },
    ]
  },
  {
    title: "Databases & Streaming",
    skills: [
      { name: "MongoDB", level: 90 },
      { name: "PostgreSQL", level: 90 },
      { name: "Apache Kafka", level: 80 },
      { name: "Apache Camel", level: 70 },
      { name: "SQS", level: 85 },
      { name: "SNS", level: 85 },
    ]
  },
  {
    title: "AWS Kit",
    skills: [
      { name: "AWS Kit (S3, CloudFront, Route53, EC2, RDS)", level: 75 },
    ]
  },
  {
    title: "Leadership & Soft Skills",
    skills: [
      { name: "Team Leadership & Mentoring", level: 85 },
    ]
  },
];

export const Skills = () => {
  const { t } = useTranslation();

  return (
    <Section id="skills" title={t("skillsSection")}>
      <div className="space-y-8">
        {skillGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="space-y-4">
            <h3 className="text-xl font-semibold text-secondary-400 border-b border-base-700 pb-2">
              {group.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              {group.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-2">
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
          </div>
        ))}
      </div>
    </Section>
  );
};
