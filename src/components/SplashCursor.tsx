"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Position {
  x: number;
  y: number;
}

export const SplashCursor = () => {
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = Boolean(
        target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a") ||
          target.closest('[role="button"]') ||
          window.getComputedStyle(target).cursor === "pointer"
      );

      setIsHovering(isClickable);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsHovering(false);
    };

    // Detect touch devices
    const isTouchDevice = () => {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0;
    };

    // Only add event listeners if not a touch device
    if (!isTouchDevice()) {
      window.addEventListener("mousemove", updateMousePosition);
      window.addEventListener("mouseover", handleMouseOver);
      window.addEventListener("mouseenter", () => setIsVisible(true));
      window.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        window.removeEventListener("mousemove", updateMousePosition);
        window.removeEventListener("mouseover", handleMouseOver);
        window.removeEventListener("mouseenter", () => setIsVisible(true));
        window.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isHovering ? 1.5 : 1,
            opacity: 1,
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
          }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            mass: 0.5,
          }}
        >
          <div className="relative h-8 w-8">
            <div className="absolute inset-0 rounded-full bg-white opacity-30" />
            <div className="absolute inset-1 rounded-full bg-white opacity-50" />
            <div className="absolute inset-2 rounded-full bg-white" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
