import "./globals.css";
import { Mulish } from "next/font/google";

const font = Mulish({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Eliezer Site",
  description: "Personal website of Eliezer Marques",
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
