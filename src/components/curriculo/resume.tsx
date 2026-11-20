import Image from "next/image";
import type { ReactNode } from "react";
import { locales, profileLinks, resumeCopy, type ResumeLocale } from "@/i18n/resume-copy";
import { IntegrationSignal, LanguageLink, PrintButton } from "./controls";

export function Resume({ locale }: { locale: ResumeLocale }) {
  const copy = resumeCopy[locale];

  return (
    <>
      <a className="skip-link" href="#content">{copy.skip}</a>
      <ResumeHeader locale={locale} />
      <main id="content" tabIndex={-1}>
        <section className="hero" id="about" aria-labelledby="name">
          <div className="shell hero-inner">
            <div className="hero-copy">
              <h1 id="name">Eliezer <span>Marques</span></h1>
              <p className="eyebrow hero-role">{copy.loggi.role}</p>
              <p className="print-contact"><a href={profileLinks.linkedin}>{profileLinks.linkedin}</a></p>
              <p className="hero-lead">{copy.headline}</p>
              <p className="hero-summary">{copy.summary}</p>
              <div className="actions">
                <a className="button button-primary" href={profileLinks.linkedin}>{copy.linkedin}</a>
                <a className="button button-secondary" href="#projects">{copy.viewProjects}</a>
              </div>
            </div>
            <figure className="portrait">
              <picture className="portrait-frame">
                <source
                  type="image/webp"
                  srcSet="/eliezer_m-480.webp 480w, /eliezer_m-640.webp 640w, /eliezer_m-800.webp 800w"
                  sizes="(max-width: 29.5rem) calc(100vw - 4rem), (max-width: 49rem) 26rem, (max-width: 78rem) calc(41vw - 3.6rem), 28rem"
                />
                <Image
                  src="/eliezer_m.jpeg"
                  width={800}
                  height={800}
                  alt={copy.portraitAlt}
                  loading="eager"
                  fetchPriority="high"
                  unoptimized
                />
              </picture>
              <figcaption><span>Loggi</span><span>{copy.country}</span></figcaption>
            </figure>
          </div>
        </section>

        <section className="shell metrics" aria-label={copy.metricsLabel}>
          <dl>
            {copy.metrics.map(({ label, value }) => (
              <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
            ))}
          </dl>
        </section>

        <ResumeProjects locale={locale} />
        <ResumeExperience locale={locale} />

        <section className="shell section split" id="skills" aria-labelledby="skills-title">
          <div className="section-heading">
            <h2 id="skills-title">{copy.skillsTitle}</h2>
          </div>
          <div className="profile-grid">
            {copy.skills.map(({ title, description }) => (
              <div key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="shell contact" id="contact" aria-labelledby="contact-title">
          <div className="contact-inner">
            <h2 id="contact-title">{copy.contactTitle}</h2>
            <div className="contact-actions">
              <a className="button button-primary" href={profileLinks.linkedin}>{copy.linkedin}</a>
              <div className="contact-links">
                <a className="text-link" href={profileLinks.github}>GitHub</a>
                <PrintButton label={copy.print} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="shell site-footer">
        <span>Eliezer Marques</span>
        <a href="#top">{copy.backToTop}</a>
      </footer>
    </>
  );
}

function ResumeHeader({ locale }: { locale: ResumeLocale }) {
  const copy = resumeCopy[locale];
  const english = locale === "en";
  const otherLocale = english ? "pt-BR" : "en";
  const current = locales[locale];
  const alternate = locales[otherLocale];
  const href = otherLocale === "en" && process.env.NODE_ENV === "development" ? "/en" : alternate.path;
  const currentLanguage = (
    <span lang={locale} aria-current="true" title={current.name}>{current.code}</span>
  );
  const otherLanguage = (
    <LanguageLink lang={otherLocale} code={alternate.code} name={alternate.name} href={href} />
  );

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="brand" href="#top" aria-label={copy.home}>
          <span className="monogram" aria-hidden="true">EM</span>
          <span className="brand-name" aria-hidden="true">Eliezer Marques</span>
        </a>
        <nav aria-label={copy.navigation}>
          <a href="#projects">{copy.projectsTitle}</a>
          <a href="#experience">{copy.experienceTitle}</a>
          <a href="#skills">{copy.skillsTitle}</a>
        </nav>
        <div className="header-actions">
          <div className="language-switch" role="group" aria-label={copy.language}>
            {english ? otherLanguage : currentLanguage}
            {english ? currentLanguage : otherLanguage}
          </div>
          <a className="button button-header" href="#contact">{copy.contactTitle}</a>
        </div>
      </div>
    </header>
  );
}

function ResumeProjects({ locale }: { locale: ResumeLocale }) {
  const { projectsTitle, projects } = resumeCopy[locale];

  return (
    <section className="shell section" id="projects" aria-labelledby="projects-title">
      <div className="section-heading">
        <h2 id="projects-title">{projectsTitle}</h2>
      </div>
      <div className="project-grid">
        {projects.map(({ company, title, description }, index) => (
          <article className={index === 0 ? "project project-featured" : "project"} key={title}>
            <div className="project-copy">
              <p className="eyebrow">{company}</p>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            {index === 0 ? <ProjectIllustration /> : null}
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectIllustration() {
  return (
    <IntegrationSignal>
      <div className="network-ring network-ring-outer" />
      <div className="network-ring network-ring-inner" />
      <div className="network-axis network-axis-x" />
      <div className="network-axis network-axis-y" />
      <span className="network-core" />
      <span className="network-node node-top" />
      <span className="network-node node-right" />
      <span className="network-node node-bottom" />
      <span className="network-node node-left" />
    </IntegrationSignal>
  );
}

function ResumeExperience({ locale }: { locale: ResumeLocale }) {
  const copy = resumeCopy[locale];

  return (
    <section className="section section-banded" id="experience" aria-labelledby="experience-title">
      <div className="shell split">
        <div className="section-heading">
          <h2 id="experience-title">{copy.experienceTitle}</h2>
        </div>
        <div>
          <ol className="timeline">
            <ExperienceRole company="Loggi" details={copy.loggi}>
              <p>{copy.loggi.customerExperience}</p>
            </ExperienceRole>
            <ExperienceRole company="Olist" details={copy.olist} />
            <li>
              <h3>{copy.earlierTitle}</h3>
              <p>{copy.earlierDescription}</p>
            </li>
          </ol>
          <a className="text-link" href={profileLinks.linkedin}>{copy.viewExperience}</a>
        </div>
      </div>
    </section>
  );
}

function ExperienceRole({
  company,
  details,
  children,
}: {
  company: string;
  details: { role: string; period: ReactNode; description: string };
  children?: ReactNode;
}) {
  return (
    <li>
      <div className="role-heading">
        <h3>{company}</h3>
        <p className="period">{details.period}</p>
      </div>
      <p className="role-name">{details.role}</p>
      <p>{details.description}</p>
      {children}
    </li>
  );
}
