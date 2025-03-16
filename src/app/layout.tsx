import "./globals.css";
import { Mulish } from "next/font/google";
import { Metadata } from "next";

const font = Mulish({
  subsets: ["latin"],
  display: "swap",
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
