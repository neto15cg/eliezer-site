import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import type { ReactNode } from "react";
import { siteUrl, locales, resumeCopy, type ResumeLocale } from "@/i18n/resume-copy";
import "../../app/globals.css";

const bricolage = Bricolage_Grotesque({
  axes: ["opsz"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
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
  return (
    <html lang={locale} className={`${bricolage.variable} ${dmSans.variable}`}>
      <body id="top">{children}</body>
    </html>
  );
}
