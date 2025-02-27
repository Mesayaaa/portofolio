"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === "pointer");
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-50 hidden mix-blend-difference lg:block"
      animate={{
        x: mousePosition.x - 6,
        y: mousePosition.y - 6,
        scale: isPointer ? 2.5 : 1,
      }}
      transition={{
        type: "tween",
        ease: "linear",
        duration: 0,
        scale: {
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.5,
        },
      }}
    >
      <div className="h-3 w-3 rounded-full bg-white opacity-75" />
    </motion.div>
  );
};

export default CustomCursor;
