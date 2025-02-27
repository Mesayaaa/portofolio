"use client";

import { motion } from "framer-motion";
import { FiHeart } from "react-icons/fi";
import { useEffect, useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export default function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or a loading state
  }

  return (
    <footer className="relative mt-25" role="contentinfo" aria-label="Footer">
      {/* Subtle separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-8"
      >
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          {/* Love message */}
          <motion.div
            className="flex items-center justify-center space-x-2 text-sm sm:text-base text-gray-600 dark:text-gray-400"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <span>Made with</span>
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block text-red-500 dark:text-red-400"
            >
              <FiHeart className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
            </motion.span>
            <span>by Christopher Mesaya</span>
          </motion.div>

          {/* Copyright */}
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} All rights reserved
          </p>

          {/* Decorative gradient line */}
          <div className="w-12 h-1 mt-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-80" />
        </div>
      </motion.div>
    </footer>
  );
}
