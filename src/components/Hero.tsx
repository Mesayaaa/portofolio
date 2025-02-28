"use client";

import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import type { FC, MouseEvent } from "react";
import { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { CheckCircle, Star, Clock, Calendar } from "lucide-react";
import ScrollWrapper, { ScrollGroup } from "./ScrollWrapper";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiArrowRight,
  FiArrowDown,
  FiDownload,
} from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import { TypeAnimation } from "react-type-animation";
import { useIsBrowser } from "@/hooks/useIsBrowser";
import { smoothScroll } from "@/utils/smoothScroll";

// Lazy load heavy components
const Canvas = dynamic(
  () => import("@react-three/fiber").then((mod) => mod.Canvas),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full bg-gray-100 dark:bg-gray-800 animate-pulse" />
    ),
  }
);

const OrbitControls = dynamic(
  () => import("@react-three/drei").then((mod) => mod.OrbitControls),
  { ssr: false }
);
const Float = dynamic(
  () => import("@react-three/drei").then((mod) => mod.Float),
  { ssr: false }
);
const Sphere = dynamic(
  () => import("@react-three/drei").then((mod) => mod.Sphere),
  { ssr: false }
);

const ThemeAwareImage = dynamic(() => import("./ThemeAwareImage"), {
  loading: () => (
    <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-full aspect-square" />
  ),
});

type DirectionType = "up" | "down" | "left" | "right";

const Hero: FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const isBrowser = useIsBrowser();

  useEffect(() => {
    if (!isBrowser) return;
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.1;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.1;

      setMousePosition({ x, y });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove as any);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove as any);
      }
      setMounted(false);
    };
  }, [isBrowser]);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  if (!mounted || !isBrowser) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <div className="animate-pulse bg-gray-200 dark:bg-gray-700 w-40 h-40 mx-auto rounded-full mb-12" />
          <div className="space-y-6">
            <div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-16 w-3/4 mx-auto rounded" />
            <div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-8 w-1/2 mx-auto rounded" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section
        id="home"
        ref={ref}
        className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
      >
        {/* Enhanced animated background gradient */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 animate-gradient-xy" />
          <div className="absolute inset-0 bg-[url('/portofolio/grid.svg')] bg-center opacity-[0.1] dark:opacity-[0.15]" />
        </motion.div>

        {/* Animated shapes background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[500px] h-[500px] rounded-full"
              style={{
                background: `radial-gradient(circle, ${
                  i % 2 === 0
                    ? "rgba(59, 130, 246, 0.1)"
                    : "rgba(147, 51, 234, 0.1)"
                } 0%, transparent 70%)`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, 30, 0],
                y: [0, 30, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative inline-block mb-12"
          >
            <div className="relative w-40 h-40 mx-auto">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full opacity-75 blur-lg"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.img
                src="/portofolio/images/mesaya11.jpg"
                alt="Christopher Mesaya"
                className="relative w-full h-full object-cover rounded-full shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-bold"
              style={{ display: "inline-block", paddingBottom: "1rem" }}
              animate={{ scale: [1, 1.01, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <span className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-text-shimmer">
                Hi, I'm Christopher Mesaya
              </span>
            </motion.h1>

            <motion.div
              className="text-2xl sm:text-3xl md:text-4xl text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <TypeAnimation
                sequence={[
                  "Front-End Developer",
                  2000,
                  "UI/UX Enthusiast",
                  2000,
                  "React Specialist",
                  2000,
                ]}
                wrapper="h2"
                speed={50}
                repeat={Infinity}
                className="font-medium"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <motion.a
                href="/#about"
                onClick={(e) => smoothScroll(e, "#about")}
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(147, 51, 234, 0.25)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
                <FiArrowDown className="animate-bounce" />
              </motion.a>
              <motion.div className="flex gap-4">
                {[
                  { icon: FiGithub, href: "#", label: "GitHub" },
                  { icon: FiLinkedin, href: "#", label: "LinkedIn" },
                  { icon: FiTwitter, href: "#", label: "Twitter" },
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Mouse parallax effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          transition={{ type: "spring", stiffness: 75, damping: 15 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 mix-blend-overlay" />
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
