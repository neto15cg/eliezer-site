import React from "react";
import { Section } from "./components/section";

export const Experience = () => {
  return (
    <Section title="Experience">
      <>
        <h3 className="text-2xl font-bold text-secondary-300 underline mt-8">
          Senior Fullstack Developer
        </h3>
        <p className="text-1xl underline">
          <strong>Olist</strong> | May 2021 - Present | Remote
        </p>

        <ul className="list-disc list-inside text-lg">
          <li>
            <strong>Catalog Squad:</strong> Decoupled a monitoring system into a
            microservices architecture using Django, DRF, NestJS (BFF), and a
            React SPA, improving performance, scalability, resilience, and team
            autonomy.
          </li>
          <li>
            <strong>Control Tower Squad:</strong> Developed an administrative
            dashboard with React, NestJS, and DRF, enabling operational teams to
            automate routine tasks, bulk price updates, and stockout management.
          </li>

          <li>
            <strong>Growth Squad:</strong> Led the migration of institutional
            websites and 500+ landing pages from WordPress to a headless CMS
            (Strapi + Next.js), improving load speed by 70% and reducing page
            development time from weeks to days.
          </li>
          <li>
            <strong>Customer Journey Squad:</strong> Developed an agnostic
            onboarding platform using a distributed architecture (React, DRF,
            SNS, SQS), significantly improving customer activation. Currently
            leading an AI integration initiative to optimize product migration
            into the company's ERP.
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-secondary-300 underline mt-8">
          Frontend Developer
        </h3>
        <p className="text-lg underline">
          <strong>Agilize Contabilidade</strong> | Mar 2020 - Present | Remote
        </p>

        <ul className="list-disc list-inside text-lg">
          <li>
            Legacy System Maintenance & New System Development: Maintained
            Angular-based legacy systems and built new HR and financial systems
            using React.js, TypeScript, Module Federation, and Laravel. Ensured
            quality with Jest, React Testing Library, and Cypress, and used
            Styled Components with a custom component library (React & Svelte).
          </li>
          <li>
            Financial System: Developed a financial management system enabling
            users to efficiently oversee their company's financial situation.
          </li>

          <li>
            HR System: Built an HR system to help companies effectively manage
            their employees, contributing to improved customer retention and
            acquisition through seamless integration with the accounting
            platform.
          </li>
        </ul>
        <p className="text-lg">
          These initiatives led to significant improvements in customer
          retention and acquisition, as the systems seamlessly integrated with
          our accounting platform.
        </p>

        <h3 className="text-2xl font-bold text-secondary-300 underline mt-8">
          Fullstack Developer
        </h3>
        <p className="text-lg underline">
          <strong>Avansys Tecnologia</strong> | Ago 2019 - Mar 2020 | Salvador,
          Ba, Brazil
        </p>

        <ul className="list-disc list-inside text-lg">
          <li>
            Legacy System Maintenance & New System Development: Maintained
            Angular-based legacy systems and built new HR and financial systems
            using React.js, TypeScript, Module Federation, and Laravel. Ensured
            quality with Jest, React Testing Library, and Cypress, and used
            Styled Components with a custom component library (React & Svelte).
          </li>
          <li>
            Financial System: Developed a financial management system enabling
            users to efficiently oversee their company's financial situation.
          </li>

          <li>
            HR System: Built an HR system to help companies effectively manage
            their employees, contributing to improved customer retention and
            acquisition through seamless integration with the accounting
            platform.
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-secondary-300 underline mt-8">
          Fullstack Developer
        </h3>
        <p className="text-lg underline">
          <strong>Falqon</strong> | Jan 2019 - Ago 2019 | Salvador, BA, Brazil
        </p>

        <ul className="list-disc list-inside text-lg">
          <li>
            <strong> Web and Mobile Development:</strong> Expertise in
            developing and maintaining web applications using React and mobile
            applications using React Native. Proficient in utilizing tools like
            Redux, Hooks, and Context API for state management, along with
            TypeScript for type-safe coding.
          </li>
          <li>
            <strong>Backend Development and Deployment:</strong> Skilled in
            building and maintaining APIs using Golang, with experience in
            deploying applications. Worked on diverse projects as a consultant,
            including medical apps, lawyer websites, crawlers, and other
            applications, leveraging Golang, React, and React Native.
          </li>
        </ul>
        <h3 className="text-2xl font-bold text-secondary-300 underline mt-8">
          Fullstack Developer
        </h3>
        <p className="text-lg underline">
          <strong>Vasta</strong> | Jan 2018 - Jan 2019 | Vitória da Conquista,
          BA, Brazil
        </p>
        <ul className="list-disc list-inside text-lg">
          <li>
            <strong>Web Application Development:</strong> Experienced in
            developing APIs using Laravel and Node.js, along with building
            hybrid mobile applications using the Ionic Framework. Worked on
            projects such as farm management and delivery apps.
          </li>
          <li>
            <strong>Backend Development and Deployment:</strong> Proficient in
            developing web applications using Vue.js, contributing to the
            creation of user-friendly and efficient web interfaces for various
            projects.
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-secondary-300 underline mt-8">
          Trainee
        </h3>
        <p className="text-lg underline">
          <strong>Universidade do Sodoeste da Bahia</strong> | Fev 2016 - Aug
          2017 | Vitória da Conquista, BA, Brazil
        </p>
        <ul className="list-disc list-inside text-lg">
          <li>
            Developed a native Android application to assist waste collectors in
            optimizing their daily collection routes by calculating the most
            efficient path using Firebase and Google Maps APIs, which also
            served as the foundation for my undergraduate thesis.
          </li>
        </ul>
      </>
    </Section>
  );
};
