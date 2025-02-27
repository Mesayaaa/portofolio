"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import ClientOnly from "@/components/ClientOnly";

// Loading fallbacks
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    Loading...
  </div>
);

// Dynamic imports with loading fallbacks
const Hero = dynamic(() => import("@/components/Hero"), {
  ssr: false,
  loading: () => <LoadingFallback />,
});
const About = dynamic(() => import("@/components/About"), {
  ssr: false,
  loading: () => <LoadingFallback />,
});
const Skills = dynamic(() => import("@/components/Skills"), {
  ssr: false,
  loading: () => <LoadingFallback />,
});
const Projects = dynamic(() => import("@/components/Projects"), {
  ssr: false,
  loading: () => <LoadingFallback />,
});
const Experience = dynamic(() => import("@/components/Experience"), {
  ssr: false,
  loading: () => <LoadingFallback />,
});
const Contact = dynamic(() => import("@/components/Contact"), {
  ssr: false,
  loading: () => <LoadingFallback />,
});
const BackToTop = dynamic(() => import("@/components/BackToTop"), {
  ssr: false,
  loading: () => null,
});
const PageTransition = dynamic(() => import("@/components/PageTransition"), {
  ssr: false,
  loading: () => null,
});
const ScrollReveal = dynamic(
  () => import("@/components/ScrollWrapper").then((mod) => mod.ScrollReveal),
  { ssr: false, loading: () => null }
);

export default function Home() {
  return (
    <ClientOnly fallback={<LoadingFallback />}>
      <Suspense fallback={<LoadingFallback />}>
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
      </Suspense>
    </ClientOnly>
  );
}
