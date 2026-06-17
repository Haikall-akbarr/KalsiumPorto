import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Haekal Akbar - Web & App Developer",
  description: "Hi, I'm Haekal Akbar and I am a creative web & app developer who dreams of making the world a better place by creating captivating products.",
  keywords: "Haekal Akbar, Web Developer, App Developer, Portfolio, React, Next.js, Frontend Developer",
  authors: [{ name: "Haekal Akbar" }],
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
