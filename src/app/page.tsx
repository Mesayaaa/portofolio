"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import BackToTop from "@/components/BackToTop";
import LoadingScreen from "@/components/LoadingScreen";
import PageTransition from "@/components/PageTransition";
import { ScrollReveal } from "@/components/ScrollWrapper";
import { useIsBrowser } from "@/hooks/useIsBrowser";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const isBrowser = useIsBrowser();

  useEffect(() => {
    if (!isBrowser) return;

    let mounted = true;

    const loadResources = async () => {
      try {
        // Load and initialize components in sequence
        const components = [Hero, About, Skills, Projects, Experience, Contact];
        const totalSteps = components.length;

        for (let i = 0; i < components.length; i++) {
          if (!mounted) return;

          // Simulate component initialization
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
  }, [isBrowser]);

  if (!isBrowser) {
    return null; // or a loading state
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
