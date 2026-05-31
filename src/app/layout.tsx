import "./globals.css";
import React from "react";
import { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "../components/ThemeProvider";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "Rohit Shetake | Full Stack Engineer",
  description: "Senior Full Stack Engineer specializing in building premium, high-performance web applications with React, TypeScript, and Node.js.",
  keywords: ["Rohit Shetake", "Full Stack Engineer", "Software Developer", "Next.js", "TypeScript", "React"],
  authors: [{ name: "Rohit Shetake" }],
  icons: {
    icon: "/assets/profile-removebg-preview.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} ${firaCode.variable} font-sans bg-background text-foreground antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="portfolio-theme"
          themes={['light', 'dark', 'gray']}
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
