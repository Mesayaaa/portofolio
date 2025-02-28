"use client";

import { useEffect, useState, Suspense } from "react";
import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import dynamic from "next/dynamic";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ErrorBoundary from "@/components/ErrorBoundary";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLoadingState } from "@/hooks/useLoadingState";
import { navigationItems, socialLinks } from "@/constants/navigation";
import { Toaster } from "react-hot-toast";

const ParallaxBackground = dynamic(
  () => import("@/components/ParallaxBackground"),
  {
    ssr: false,
  }
);
const ScrollProgress = dynamic(() => import("@/components/ScrollProgress"), {
  ssr: false,
});

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const { isLoading, progress } = useLoadingState();
  const [mounted, setMounted] = useState(false);
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Simulate content loading
    const timer = setTimeout(() => {
      setContentReady(true);
    }, 2000); // Adjust this time based on your needs
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-16 w-3/4 mx-auto rounded" />
      </div>
    );
  }

  return (
    <ThemeProvider>
      <ErrorBoundary>
        <LazyMotion features={domAnimation}>
          {isLoading || !contentReady ? (
            <LoadingScreen
              progress={progress}
              onLoadingComplete={() => setContentReady(true)}
            />
          ) : (
            <AnimatePresence mode="wait">
              <main className="relative">
                <ParallaxBackground />
                <ScrollProgress />
                <Navbar
                  navigationItems={navigationItems}
                  socialLinks={socialLinks}
                />
                {children}
                <Footer />
                <Toaster
                  position="bottom-right"
                  toastOptions={{
                    className: "bg-toaster-bg text-toaster-color",
                  }}
                />
              </main>
            </AnimatePresence>
          )}
        </LazyMotion>
      </ErrorBoundary>
    </ThemeProvider>
  );
}
