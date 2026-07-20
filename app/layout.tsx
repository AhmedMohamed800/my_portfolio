import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "lenis/dist/lenis.css";
import { LenisProvider } from "./_components/Providers/lenis-provider";
import ScrollAnimations from "./_components/Providers/ScrollAnimations";

const thmanyah = localFont({
  src: [
    { path: "../public/fonts/thmanyahsans-Light.otf", weight: "300" },
    { path: "../public/fonts/thmanyahsans-Regular.otf", weight: "400" },
    { path: "../public/fonts/thmanyahsans-Medium.otf", weight: "500" },
    { path: "../public/fonts/thmanyahsans-Bold.otf", weight: "700" },
    { path: "../public/fonts/thmanyahsans-Black.otf", weight: "900" },
  ],
  variable: "--font-thmanyah",
});

export const metadata: Metadata = {
  title: "Ahmed Mohamed | Frontend Developer",
  description:
    "Ahmed Mohamed is a Frontend Developer specializing in React, Next.js, WordPress, and TypeScript. Explore my portfolio, projects, technical skills, and web development experience.",

  keywords: [
    "Ahmed Mohamed",
    "Ahmed Mohamed Frontend Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "WordPress Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Web Developer Egypt",
    "Portfolio",
    "React",
    "Next.js",
    "WordPress",
    "TypeScript",
    "Tailwind CSS",
    "Frontend Portfolio",
  ],

  authors: [{ name: "Ahmed Mohamed" }],

  creator: "Ahmed Mohamed",

  openGraph: {
    title: "Ahmed Mohamed | Frontend Developer",
    description:
      "Frontend Developer building modern web applications with React, Next.js, WordPress, and TypeScript.",
    url: "https://ahmedmdev.vercel.app",
    siteName: "Ahmed Mohamed Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ahmed Mohamed Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ahmed Mohamed | Frontend Developer",
    description:
      "Frontend Developer building modern web applications with React, Next.js, WordPress, and TypeScript.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${thmanyah.variable} h-full `}>
      <body className="relative flex flex-col ">
        <LenisProvider>
          <ScrollAnimations>{children}</ScrollAnimations>
        </LenisProvider>
      </body>
    </html>
  );
}
