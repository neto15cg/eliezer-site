import type { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import { locales, profileLinks, resumeCopy, siteUrl, type ResumeLocale } from "@/i18n/resume-copy";
import "../../app/globals.css";

const bricolage = localFont({
  src: "./fonts/bricolage-latin.woff2",
  weight: "700 800",
  display: "swap",
  variable: "--font-bricolage",
});

const dmSans = localFont({
  src: "./fonts/dm-sans-latin.woff2",
  weight: "400 700",
  display: "swap",
  variable: "--font-dm-sans",
});

export function resumeMetadata(locale: ResumeLocale): Metadata {
  const { title, description, portraitAlt } = resumeCopy[locale];
  const { path, openGraphLocale } = locales[locale];

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    icons: { icon: "/favico.svg" },
    alternates: {
      canonical: path,
      languages: {
        "pt-BR": locales["pt-BR"].path,
        en: locales.en.path,
        "x-default": locales["pt-BR"].path,
      },
    },
    openGraph: {
      type: "website",
      url: path,
      title,
      description,
      locale: openGraphLocale,
      images: [{ url: "/eliezer_m.jpeg", width: 800, height: 800, alt: portraitAlt }],
    },
  };
}

export function ResumeLayout({ locale, children }: { locale: ResumeLocale; children: ReactNode }) {
  const copy = resumeCopy[locale];
  const profile = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: new URL(locales[locale].path, siteUrl).href,
    inLanguage: locale,
    mainEntity: {
      "@type": "Person",
      "@id": `${siteUrl}/#eliezer-marques`,
      name: "Eliezer Marques",
      url: `${siteUrl}/`,
      image: `${siteUrl}/eliezer_m.jpeg`,
      jobTitle: copy.loggi.role,
      description: copy.description,
      worksFor: { "@type": "Organization", name: "Loggi" },
      alumniOf: { "@type": "CollegeOrUniversity", name: "FAINOR" },
      knowsLanguage: ["pt-BR", "en"],
      knowsAbout: ["Python", "Go", "Node.js", "Apache Kafka", "Amazon SNS", "Amazon SQS"],
      sameAs: Object.values(profileLinks),
    },
  };

  return (
    <html lang={locale} className={`${bricolage.variable} ${dmSans.variable}`}>
      <body id="top">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profile).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
