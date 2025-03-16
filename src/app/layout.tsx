import "./globals.css";
import { Fira_Sans } from "next/font/google";
import { Metadata } from "next";
import "../i18n/config";
import I18nProvider from "@/i18n/i18n-provider";
import { LanguageSwitcher } from "@/components/language-switcher";

const font = Fira_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "300",
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
      <body className="w-full bg-base-950">
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
