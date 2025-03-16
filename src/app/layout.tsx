import "./globals.css";
import { Fira_Sans } from "next/font/google";
import { Metadata } from "next";

const font = Fira_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "300",
});

export const metadata: Metadata = {
  title: "Eliezer Marques",
  description: "Personal website of Eliezer Marques",
  icons: {
    icon: "/favico.svg", // Caminho relativo ao arquivo do favicon
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
        <div className="mx-auto w-full h-full max-w-7xl">{children}</div>
      </body>
    </html>
  );
}
