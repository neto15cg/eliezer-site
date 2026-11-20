"use client";

import { useEffect, useRef, type ReactNode } from "react";

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

export function IntegrationSignal({ children }: { children: ReactNode }) {
  const diagram = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = diagram.current;
    if (!element || !window.IntersectionObserver || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const threshold = 0.45;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.intersectionRatio < threshold) return;

      element.dataset.signal = "";
      observer.disconnect();
    }, { threshold });
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return <div ref={diagram} className="project-art network" aria-hidden="true">{children}</div>;
}
