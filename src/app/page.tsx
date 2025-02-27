"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import ClientOnly from "@/components/ClientOnly";
import LoadingFallback from "@/components/LoadingFallback";
import ErrorBoundary from "@/components/ErrorBoundary";

// Loading fallbacks
const LoadingFallbackComponent = () => (
  <div className="min-h-screen flex items-center justify-center">
    Loading...
  </div>
);

// Dynamic imports with loading fallbacks
const Hero = dynamic(() => import("@/components/Hero"), {
  ssr: false,
  loading: () => <LoadingFallbackComponent />,
});
const About = dynamic(() => import("@/components/About"), {
  ssr: false,
  loading: () => <LoadingFallbackComponent />,
});
const Skills = dynamic(() => import("@/components/Skills"), {
  ssr: false,
  loading: () => <LoadingFallbackComponent />,
});
const Projects = dynamic(() => import("@/components/Projects"), {
  ssr: false,
  loading: () => <LoadingFallbackComponent />,
});
const Experience = dynamic(() => import("@/components/Experience"), {
  ssr: false,
  loading: () => <LoadingFallbackComponent />,
});
const Contact = dynamic(() => import("@/components/Contact"), {
  ssr: false,
  loading: () => <LoadingFallbackComponent />,
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
    <ErrorBoundary>
      <ClientOnly fallback={<LoadingFallbackComponent />}>
        <Suspense fallback={<LoadingFallbackComponent />}>
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
    </ErrorBoundary>
  );
}
