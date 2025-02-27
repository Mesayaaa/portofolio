"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Import components
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const About = dynamic(() => import("@/components/About"), { ssr: false });
const Skills = dynamic(() => import("@/components/Skills"), { ssr: false });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), {
  ssr: false,
});
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });
const BackToTop = dynamic(() => import("@/components/BackToTop"), {
  ssr: false,
});
const LoadingScreen = dynamic(() => import("@/components/LoadingScreen"), {
  ssr: false,
});
const PageTransition = dynamic(() => import("@/components/PageTransition"), {
  ssr: false,
});
const ScrollReveal = dynamic(
  () => import("@/components/ScrollWrapper").then((mod) => mod.ScrollReveal),
  { ssr: false }
);

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    setMounted(true);
    let mounted = true;

    const loadResources = async () => {
      try {
        const totalSteps = 6; // Number of components to load
        for (let i = 0; i < totalSteps; i++) {
          if (!mounted) return;
          await new Promise((resolve) => setTimeout(resolve, 300));
          setLoadingProgress(((i + 1) / totalSteps) * 100);
        }

        if (mounted) {
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error loading resources:", error);
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    loadResources();

    return () => {
      mounted = false;
    };
  }, []);

  if (!mounted) {
    return null;
  }

  if (isLoading) {
    return <LoadingScreen progress={loadingProgress} />;
  }

  return (
    <PageTransition>
      <ScrollReveal>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <BackToTop />
      </ScrollReveal>
    </PageTransition>
  );
}
