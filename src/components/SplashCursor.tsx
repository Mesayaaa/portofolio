import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Position {
  x: number;
  y: number;
}

export const SplashCursor = () => {
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseenter", () => setIsVisible(true));
    window.addEventListener("mouseleave", () => setIsVisible(false));

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseenter", () => setIsVisible(true));
      window.removeEventListener("mouseleave", () => setIsVisible(false));
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="pointer-events-none fixed left-0 top-0 z-50"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: 1,
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
            <div className="absolute inset-0 rounded-full bg-primary opacity-30" />
            <div className="absolute inset-1 rounded-full bg-primary opacity-50" />
            <div className="absolute inset-2 rounded-full bg-primary" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
