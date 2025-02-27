import React from "react";
import { motion } from "framer-motion";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: string;
  className?: string;
}

export default function LoadingSpinner({
  size = "md",
  color = "text-purple-600 dark:text-purple-400",
  className = "",
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-5 h-5",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  const spinTransition = {
    repeat: Infinity,
    ease: "linear",
    duration: 1,
  };

  return (
    <div className="w-full h-[200px] animate-pulse bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center">
      <motion.div
        className={`${sizeClasses[size]} ${color}`}
        animate={{ rotate: 360 }}
        transition={spinTransition}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="stroke-current"
          />
          <motion.path
            d="M12 2C6.47715 2 2 6.47715 2 12"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="stroke-current opacity-50"
          />
        </svg>
      </motion.div>
    </div>
  );
}

export function LoadingOverlay() {
  return (
    <div className="fixed inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="text-center"
      >
        <LoadingSpinner size="lg" />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-600 dark:text-gray-300 font-medium"
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  );
}
