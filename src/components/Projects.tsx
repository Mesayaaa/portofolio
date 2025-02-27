"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";
import dynamic from "next/dynamic";
import Image from "./Image";
import { projects } from "@/constants/projects";
import { useRef, useEffect } from "react";

const ThemeAwareImage = dynamic(() => import("./ThemeAwareImage"), {
  loading: () => (
    <div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-64 rounded-lg" />
  ),
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    y: -8,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900/80" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-20" />

      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="relative container mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-6"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Explore my latest work and creative solutions
          </motion.p>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover="hover"
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Project image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Project content */}
              <div className="p-6 space-y-6">
                {/* Project header */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies?.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center gap-1.5 px-2.5 py-1 text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-md"
                      >
                        <tech.icon className="w-4 h-4" />
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                    Key Features:
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0" />
                      <span>
                        Responsive design with modern UI/UX principles
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0" />
                      <span>Performance optimized with best practices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0" />
                      <span>Clean and maintainable code architecture</span>
                    </li>
                  </ul>
                </div>

                {/* Action buttons */}
                <div className="flex gap-4 pt-2">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 flex-1 rounded-xl bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600/50 transition-colors duration-300"
                  >
                    <FiGithub className="w-5 h-5" />
                    <span>Source Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 flex-1 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300"
                  >
                    <FiExternalLink className="w-5 h-5" />
                    <span>Live Preview</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
