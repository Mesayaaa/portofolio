import { Inter } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import { ClientLayout } from "./ClientLayout";
import { SplashCursor } from "@/components/SplashCursor";
import Providers from "@/components/Providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Modern Interactive App",
  description: "A high-performance modern interactive application",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </head>
      <body className="relative font-sans antialiased bg-gradient-to-br from-background to-background/95 cursor-none">
        <div className="fixed inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
        <Providers>
          <SplashCursor />
          <ClientLayout>{children}</ClientLayout>
        </Providers>
      </body>
    </html>
  );
}
