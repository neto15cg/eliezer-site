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
    const card = element?.closest<HTMLElement>(".project-featured");
    if (!element || !card || !window.IntersectionObserver) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const threshold = 0.55;
    let playedInView = false;

    const playSignal = () => {
      if (reducedMotion.matches || element.hasAttribute("data-signal")) return;
      element.dataset.signal = "";
    };

    const replayOnHover = (event: PointerEvent) => {
      if (event.pointerType === "mouse") playSignal();
    };

    const resetSignal = (event: AnimationEvent) => {
      if (event.animationName === "integration-signal") {
        element.removeAttribute("data-signal");
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) {
        playedInView = false;
      } else if (!playedInView && entry.intersectionRatio >= threshold) {
        playedInView = true;
        playSignal();
      }
    }, { threshold: [0, threshold] });
    observer.observe(element);
    card.addEventListener("pointerenter", replayOnHover);
    element.addEventListener("animationend", resetSignal);
    element.addEventListener("animationcancel", resetSignal);

    return () => {
      observer.disconnect();
      card.removeEventListener("pointerenter", replayOnHover);
      element.removeEventListener("animationend", resetSignal);
      element.removeEventListener("animationcancel", resetSignal);
      element.removeAttribute("data-signal");
    };
  }, []);

  return <div ref={diagram} className="project-art network" aria-hidden="true">{children}</div>;
}
