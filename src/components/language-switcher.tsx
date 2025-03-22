"use client";

import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="absolute top-4 left-4 z-50 mr-6 px-2 bg-base-800 border border-secondary-600 rounded-md py-1">
      <select
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        value={i18n.language}
        className="bg-base-800 text-base-50 px-2s py-0 text-sm"
      >
        <option value="pt">Português</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};
