"use client";

import { memo } from "react";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  progress: number;
}

function LoadingScreen({ progress }: LoadingScreenProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated logo/brand */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8"
      >
        <div className="relative w-24 h-24">
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute inset-1 bg-background rounded-full flex items-center justify-center"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              CM
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Progress bar container */}
      <div className="relative w-64 h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
        />

        {/* Animated glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
          animate={{
            x: [-100, 300],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Loading text with typewriter effect */}
      <motion.div
        className="mt-6 text-lg font-medium text-foreground/80"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <span className="inline-flex items-center">
          <motion.span
            animate={{
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Welcome to my portfolio
          </motion.span>
          <motion.span
            animate={{
              opacity: [1, 0],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="ml-1"
          >
            |
          </motion.span>
        </span>
      </motion.div>

      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,rgba(var(--primary-rgb),0.05),transparent)]" />
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
            backgroundSize: ["100% 100%", "200% 200%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(var(--primary-rgb), 0.1) 0%, transparent 50%)",
          }}
        />

        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default memo(LoadingScreen);
