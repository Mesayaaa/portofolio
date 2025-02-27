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

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
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
  }, []);

  if (isLoading) {
    return <LoadingScreen progress={loadingProgress} />;
  }

  return (
    <PageTransition>
      <div className="min-h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ScrollReveal id="home">
            <section id="home">
              <Hero />
            </section>
          </ScrollReveal>

          <ScrollReveal
            id="about"
            className="bg-gradient-to-b from-white via-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-gray-800"
          >
            <section id="about">
              <About />
            </section>
          </ScrollReveal>

          <ScrollReveal
            id="skills"
            className="bg-gradient-to-b from-gray-50 via-white to-blue-50/30 dark:from-gray-800 dark:to-gray-900"
          >
            <section id="skills">
              <Skills />
            </section>
          </ScrollReveal>

          <ScrollReveal
            id="projects"
            className="bg-gradient-to-b from-white via-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-gray-800"
          >
            <section id="projects">
              <Projects />
            </section>
          </ScrollReveal>

          <ScrollReveal
            id="experience"
            className="bg-gradient-to-b from-gray-50 via-white to-blue-50/30 dark:from-gray-800 dark:to-gray-900"
          >
            <section id="experience">
              <Experience />
            </section>
          </ScrollReveal>

          <ScrollReveal
            id="contact"
            className="bg-gradient-to-b from-white via-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-gray-800"
          >
            <section id="contact">
              <Contact />
            </section>
          </ScrollReveal>

          <BackToTop />
        </motion.div>
      </div>
    </PageTransition>
  );
}
