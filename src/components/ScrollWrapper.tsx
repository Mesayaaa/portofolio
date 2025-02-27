import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ScrollWrapperProps {
  children: ReactNode;
  animation?:
    | "fade"
    | "slide"
    | "scale"
    | "flip"
    | "rotate"
    | "bounce"
    | "zoom"
    | "swing";
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
}

export default function ScrollWrapper({
  children,
  animation = "fade",
  direction = "up",
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  className = "",
  once = true,
}: ScrollWrapperProps) {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: once,
  });

  const variants = {
    fade: {
      hidden: {
        opacity: 0,
        y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
      },
      visible: { opacity: 1, y: 0 },
    },
    slide: {
      hidden: {
        opacity: 0,
        x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
        y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      },
      visible: { opacity: 1, x: 0, y: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    flip: {
      hidden: {
        opacity: 0,
        rotateX: direction === "up" || direction === "down" ? 90 : 0,
        rotateY: direction === "left" || direction === "right" ? 90 : 0,
      },
      visible: { opacity: 1, rotateX: 0, rotateY: 0 },
    },
    rotate: {
      hidden: { opacity: 0, rotate: -180 },
      visible: { opacity: 1, rotate: 0 },
    },
    bounce: {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          bounce: 0.5,
          duration: 1,
        },
      },
    },
    zoom: {
      hidden: { opacity: 0, scale: 1.5 },
      visible: { opacity: 1, scale: 1 },
    },
    swing: {
      hidden: { opacity: 0, rotate: -30, originY: 0 },
      visible: {
        opacity: 1,
        rotate: 0,
        transition: {
          type: "spring",
          damping: 10,
          stiffness: 100,
        },
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants[animation]}
      transition={{
        duration,
        delay,
        ease:
          animation === "bounce" || animation === "swing"
            ? undefined
            : "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const ScrollReveal = ({
  children,
  className = "",
  id,
}: ScrollRevealProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export function ScrollGroup({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={container}
      className={className}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={item}>{child}</motion.div>
      ))}
    </motion.div>
  );
}
