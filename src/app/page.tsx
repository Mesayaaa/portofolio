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
import ClientOnly from "@/components/ClientOnly";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    let mounted = true;

    const loadResources = async () => {
      try {
        const components = [Hero, About, Skills, Projects, Experience, Contact];
        const totalSteps = components.length;

        for (let i = 0; i < components.length; i++) {
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

  if (isLoading) {
    return (
      <ClientOnly>
        <LoadingScreen progress={loadingProgress} />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
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
    </ClientOnly>
  );
}
