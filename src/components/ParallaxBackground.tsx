"use client";

import { memo, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

function ParallaxBackground() {
  const ref = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = {
    mass: 1,
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  };

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "50%"]),
    springConfig
  );

  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "30%"]),
    springConfig
  );

  const y3 = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "20%"]),
    springConfig
  );

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.4, 0.2]);

  useEffect(() => {
    const ctx = ref.current?.getContext("2d");
    if (!ctx) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === ref.current) {
          const { width, height } = entry.contentRect;
          ctx.canvas.width = width;
          ctx.canvas.height = height;
        }
      }
    });

    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <canvas ref={ref} className="absolute inset-0" />

      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-background/5 to-background/20"
        style={{ opacity }}
      />

      <motion.div className="absolute inset-0" style={{ y: y1 }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_50%,rgba(var(--primary-rgb),0.1),transparent)]" />
      </motion.div>

      <motion.div className="absolute inset-0" style={{ y: y2 }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_700px_at_80%_40%,rgba(var(--primary-rgb),0.15),transparent)]" />
      </motion.div>

      <motion.div className="absolute inset-0" style={{ y: y3 }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_20%_60%,rgba(var(--primary-rgb),0.1),transparent)]" />
      </motion.div>
    </div>
  );
}

export default memo(ParallaxBackground);
