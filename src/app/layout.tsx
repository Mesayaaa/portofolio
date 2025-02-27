import { Inter } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import { ClientLayout } from "./ClientLayout";

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
      <body className="relative font-sans antialiased bg-gradient-to-br from-background to-background/95">
        <div className="fixed inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
