import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "M. Haikal Akbar - Web & Mobile Developer",
  description: "Portofolio profesional M. Haikal Akbar, mahasiswa Teknik Informatika di Politeknik Negeri Banjarmasin & Full-stack Web & Mobile Developer.",
  keywords: "M. Haikal Akbar, Haikal Akbar, Web Developer, Mobile Developer, Flutter, Next.js, Banjarmasin",
  authors: [{ name: "M. Haikal Akbar" }],
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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
