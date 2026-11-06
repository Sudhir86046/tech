import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: "Sudhir Kumar Tiwari | Full-Stack Developer & Software Engineer",
  description: "Premium engineering portfolio of Sudhir Kumar Tiwari. Full-Stack Developer specializing in React.js, Node.js, infrastructure monitoring, and AI integrations.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased bg-[#08090B] text-[#F5F7FA]">{children}</body>
    </html>
  );
}