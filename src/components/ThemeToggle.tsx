"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`
        relative p-2 rounded-lg
        bg-secondary hover:bg-secondary/80
        dark:bg-secondary/20 dark:hover:bg-secondary/30
        transition-colors duration-200
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <div className="relative w-5 h-5">
        <motion.div
          initial={false}
          animate={{
            scale: theme === "light" ? 1 : 0,
            opacity: theme === "light" ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 text-yellow-500"
        >
          <FiSun className="w-full h-full" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            scale: theme === "dark" ? 1 : 0,
            opacity: theme === "dark" ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 text-blue-400"
        >
          <FiMoon className="w-full h-full" />
        </motion.div>
      </div>
    </motion.button>
  );
}
