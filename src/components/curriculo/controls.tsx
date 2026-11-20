"use client";

import { useEffect, useRef } from "react";

type AlternateLanguage = {
  lang: string;
  code: string;
  name: string;
  href: string;
};

export function LanguageLink({ lang, code, name, href }: AlternateLanguage) {
  const link = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const element = link.current;
    if (!element) return;

    const syncHash = () => {
      element.hash = window.location.hash;
    };

    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [href]);

  return (
    <a ref={link} href={href} lang={lang} hrefLang={lang} rel="alternate" aria-label={name} title={name}>
      {code}
    </a>
  );
}

export function PrintButton({ label }: { label: string }) {
  return (
    <button className="text-link print-button" type="button" onClick={() => window.print()}>
      {label}
    </button>
  );
}
