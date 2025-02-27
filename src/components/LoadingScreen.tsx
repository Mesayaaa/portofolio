"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  progress?: number;
  onLoadingComplete?: () => void;
}

export default function LoadingScreen({
  progress = 0,
  onLoadingComplete,
}: LoadingScreenProps) {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate minimum loading time
    const timer = setTimeout(() => {
      setLoadingProgress(Math.min(progress + Math.random() * 20, 100));
    }, 500);

    return () => clearTimeout(timer);
  }, [progress]);

  useEffect(() => {
    if (loadingProgress >= 100) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onLoadingComplete?.();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [loadingProgress, onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Logo or Brand */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="w-24 h-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-spin-slow blur-md" />
          <div className="absolute inset-1 bg-white dark:bg-gray-900 rounded-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CM
            </span>
          </div>
        </div>
      </motion.div>

      {/* Progress Bar */}
      <div className="w-64 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          initial={{ width: "0%" }}
          animate={{ width: `${loadingProgress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Loading Text */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-sm text-gray-600 dark:text-gray-400"
      >
        {loadingProgress < 100 ? (
          <span>Loading... {Math.round(loadingProgress)}%</span>
        ) : (
          <span>Welcome!</span>
        )}
      </motion.div>

      {/* Loading Messages */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center text-gray-500 dark:text-gray-400"
      >
        <LoadingMessage progress={loadingProgress} />
      </motion.div>
    </motion.div>
  );
}

function LoadingMessage({ progress }: { progress: number }) {
  const messages = [
    "Preparing your experience...",
    "Loading assets...",
    "Setting up the environment...",
    "Almost there...",
    "Final touches...",
  ];

  const index = Math.min(Math.floor(progress / 20), messages.length - 1);

  return (
    <motion.p
      key={messages[index]}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
    >
      {messages[index]}
    </motion.p>
  );
}
