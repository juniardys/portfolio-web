import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juniardy Setiowidayoga | Fullstack & Web3 Engineer",
  description: "Fullstack Engineer with 9+ years of experience. Architecting scalable backends and crafting intuitive frontends for AI, Blockchain, and high-impact MVPs.",
  icons: {
    icon: {
      url: "/my-photo.jpg",
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased bg-[#08090A] text-slate-400 selection:bg-indigo-500/30 selection:text-indigo-200`}
      >
        {children}
      </body>
    </html>
  );
}
