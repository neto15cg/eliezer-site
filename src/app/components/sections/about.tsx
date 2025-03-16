import React from "react";
import { Section } from "./components/section";

export const About = () => {
  return (
    <Section title="About me">
      <>
        <p className="text-lg">
          Hi, I'm <strong>Eliezer Marques</strong>, a senior software engineer
          from Brazil with a degree in Computer Engineering. I'm currently
          working as a senior fullstack developer at Olist. I have experience in
          frontend development using JavaScript technologies and in backend
          development with Node.js, Golang, and Python.
        </p>
        <p className="text-lg">
          I develop products with a focus on scalability and performance, while
          leading my team to follow best practices and deliver the best possible
          product to our customers.
        </p>

        <h3 className="text-2xl font-bold text-secondary-300 underline mt-8">
          My experience includes:
        </h3>
        <ul className="list-disc list-inside text-lg">
          <li>
            <strong>Frontend Development:</strong> React, Nexjs, React Native
            and VanillaJs.
          </li>
          <li>
            <strong>Backend Development:</strong> NodeJs, NestJs, Gin (Golang)
            and Django (Python).
          </li>
          <li>
            <strong>Cloud Computing:</strong> AWS Kit as S3, Cloudfront, RDS,
            ECR, SNS and SQS.
          </li>
          <li>
            <strong>DevOps Pratices:</strong> CI/CD pipelines and perfomance
            otimization
          </li>
        </ul>

        <p className="text-lg">
          I like to go beyond tech skills but also connecting with my team so
          that we have an excellent work environment and we can join forces to
          deliver the best of each one.
        </p>

        <p className="text-lg">
          If I'm not coding I like to stay with my family and friends, go
          fishing and stay next to the nature. My passion is do everything with
          excellence and always learning new things.
        </p>
      </>
    </Section>
  );
};
