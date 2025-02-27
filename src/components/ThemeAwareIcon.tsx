"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

interface ThemeAwareIconProps {
  lightIcon: IconType;
  darkIcon: IconType;
  size?: number;
  className?: string;
  animate?: boolean;
}

export default function ThemeAwareIcon({
  lightIcon: LightIcon,
  darkIcon: DarkIcon,
  size = 24,
  className = "",
  animate = true,
}: ThemeAwareIconProps) {
  const { theme } = useTheme();
  const Icon = theme === "light" ? LightIcon : DarkIcon;

  if (!animate) {
    return (
      <Icon
        size={size}
        className={`transition-colors duration-300 ${className}`}
      />
    );
  }

  return (
    <motion.div
      initial={false}
      animate={{
        scale: [0.9, 1],
        opacity: [0, 1],
      }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
    >
      <Icon
        size={size}
        className={`transition-colors duration-300 ${className}`}
      />
    </motion.div>
  );
}
