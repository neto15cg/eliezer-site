import { Roboto_Condensed } from "next/font/google";
import { Metadata } from "next";
import I18nProvider from "@/i18n/i18n-provider";
import { LanguageSwitcher } from "@/components/language-switcher";
import "./globals.css";
import "../i18n/config";

const font = Roboto_Condensed({
  subsets: ["latin"],
  display: "swap",
  // weight: "300",
});

export const metadata: Metadata = {
  title: "Eliezer Marques",
  description: "Personal website of Eliezer Marques",
  icons: {
    icon: "/favico.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.className}>
      <body className="w-full bg-base-300">
        <I18nProvider>
          <div className="mx-auto w-full h-full max-w-7xl">
            <LanguageSwitcher />
            {children}
          </div>
        </I18nProvider>
      </body>
    </html>
  );
}
