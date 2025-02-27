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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <ThemeProvider>
      <ErrorBoundary>
        <LazyMotion features={domAnimation}>
          {isLoading ? (
            <LoadingScreen progress={progress} />
          ) : (
            <AnimatePresence mode="wait">
              <main className="relative">
                {isClient && <ParallaxBackground />}
                {isClient && <ScrollProgress />}
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
