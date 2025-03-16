"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import i18n from "./config";
import { I18nextProvider } from "react-i18next";

export default function I18nProvider({ children }: PropsWithChildren) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
