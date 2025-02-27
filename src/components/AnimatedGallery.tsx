"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { FC, MouseEvent } from "react";

interface GalleryItem {
  color: string;
  title: string;
}

const images: GalleryItem[] = [
  {
    color: "from-purple-500 to-pink-500",
    title: "Design Innovation",
  },
  {
    color: "from-blue-500 to-purple-500",
    title: "Creative Process",
  },
  {
    color: "from-pink-500 to-red-500",
    title: "Modern Solutions",
  },
  {
    color: "from-indigo-500 to-blue-500",
    title: "Future Tech",
  },
];

const AnimatedGallery: FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 dark:opacity-10" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-transparent bg-clip-text"
      >
        Our Gallery
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {images.map((image, index) => (
          <motion.div
            key={index}
            layoutId={`card-${index}`}
            onClick={() => setSelectedId(index)}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.03 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              duration: 0.2,
            }}
            className="relative aspect-square cursor-pointer overflow-hidden rounded-lg will-change-transform"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${image.color} opacity-90 dark:opacity-80`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent dark:from-black/80 z-10" />
            <motion.h3
              className="absolute bottom-4 left-4 text-xl font-semibold text-white z-20"
              layout
            >
              {image.title}
            </motion.h3>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/90 dark:bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl aspect-video bg-white dark:bg-gray-800 rounded-lg"
              onClick={(e: MouseEvent) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
                duration: 0.2,
              }}
            >
              <div
                className={`w-full h-full bg-gradient-to-br ${images[selectedId].color} rounded-lg opacity-90 dark:opacity-80`}
              />
              <motion.button
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 text-white bg-black/50 dark:bg-white/10 hover:bg-black/70 dark:hover:bg-white/20 
                          rounded-full p-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.1 }}
              >
                ✕
              </motion.button>
              <motion.div
                className="absolute bottom-4 left-4"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-2xl font-semibold text-white">
                  {images[selectedId].title}
                </h3>
                <p className="text-gray-200 dark:text-gray-300 mt-2">
                  Click anywhere outside to close
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AnimatedGallery;
