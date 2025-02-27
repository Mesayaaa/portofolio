import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Christopher Mesaya | Front-End Developer",
  description: "Professional portfolio of Christopher Mesaya, a passionate Front-End Developer specializing in creating beautiful and interactive web experiences.",
  keywords: [
    "Christopher Mesaya",
    "Front-End Developer",
    "Web Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "UI/UX",
    "Portfolio",
  ],
  authors: [{ name: "Christopher Mesaya" }],
  creator: "Christopher Mesaya",
  publisher: "Christopher Mesaya",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Christopher Mesaya | Front-End Developer",
    description: "Professional portfolio of Christopher Mesaya, a passionate Front-End Developer specializing in creating beautiful and interactive web experiences.",
    url: "https://christophermesaya.dev",
    siteName: "Christopher Mesaya Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christopher Mesaya | Front-End Developer",
    description: "Professional portfolio of Christopher Mesaya, a passionate Front-End Developer specializing in creating beautiful and interactive web experiences.",
    creator: "@christophermesaya",
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
  ],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
}; 