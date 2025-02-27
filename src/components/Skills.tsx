"use client";

import { motion, useInView } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiNodedotjs,
  SiVuedotjs,
  SiFigma,
  SiAdobexd,
} from "react-icons/si";
import { useRef } from "react";

const skills = [
  {
    category: "Frontend Development",
    items: [
      { name: "React", icon: SiReact, level: 90 },
      { name: "Next.js", icon: SiNextdotjs, level: 85 },
      { name: "TypeScript", icon: SiTypescript, level: 85 },
      { name: "JavaScript", icon: SiJavascript, level: 90 },
      { name: "HTML5", icon: SiHtml5, level: 95 },
      { name: "CSS3", icon: SiCss3, level: 90 },
    ],
  },
  {
    category: "UI/UX & Tools",
    items: [
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 90 },
      { name: "Git", icon: SiGit, level: 85 },
      { name: "Node.js", icon: SiNodedotjs, level: 80 },
      { name: "Vue.js", icon: SiVuedotjs, level: 75 },
      { name: "Figma", icon: SiFigma, level: 85 },
      { name: "Adobe XD", icon: SiAdobexd, level: 80 },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const glowVariants = {
  initial: {
    opacity: 0.5,
    scale: 1,
  },
  animate: {
    opacity: [0.5, 0.8, 0.5],
    scale: [1, 1.05, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="relative py-20 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/30" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.15] dark:opacity-[0.2]" />

      {/* Animated background shapes */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: `radial-gradient(circle, ${
              i % 2 === 0
                ? "rgba(59, 130, 246, 0.03)"
                : "rgba(147, 51, 234, 0.03)"
            } 0%, transparent 70%)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block mb-6 relative"
          >
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-xl blur-xl"
              variants={glowVariants}
              initial="initial"
              animate="animate"
            />
            <h2 className="relative text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-text-shimmer">
              Technical Skills
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            Proficient in modern web technologies and frameworks, with a focus
            on creating responsive and performant applications.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              variants={itemVariants}
              className="group relative"
            >
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                variants={glowVariants}
                initial="initial"
                animate="animate"
              />
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {skillGroup.category}
                </h3>
                <div className="space-y-8">
                  {skillGroup.items.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group/skill relative"
                    >
                      <div className="flex items-center mb-3">
                        <motion.div
                          className="w-12 h-12 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl flex items-center justify-center"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <skill.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </motion.div>
                        <span className="ml-4 font-medium text-gray-800 dark:text-gray-200">
                          {skill.name}
                        </span>
                        <span className="ml-auto font-medium bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={
                            isInView
                              ? { width: `${skill.level}%` }
                              : { width: 0 }
                          }
                          transition={{
                            duration: 1.5,
                            delay: index * 0.1,
                            ease: "easeOut",
                          }}
                          className="h-full relative"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-50 blur"
                            animate={{
                              x: ["-100%", "100%"],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#experience"
            className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View My Experience</span>
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur opacity-50 group-hover:opacity-75 transition-opacity"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
