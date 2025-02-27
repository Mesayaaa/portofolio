"use client";

import { motion } from "framer-motion";
import { FiCode, FiLayout, FiSmartphone, FiUsers } from "react-icons/fi";

const features = [
  {
    icon: FiCode,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable, and well-documented code following best practices and design patterns.",
  },
  {
    icon: FiLayout,
    title: "Modern UI/UX",
    description:
      "Creating beautiful, responsive, and user-friendly interfaces with attention to detail and accessibility.",
  },
  {
    icon: FiSmartphone,
    title: "Responsive Design",
    description:
      "Ensuring seamless experiences across all devices and screen sizes with mobile-first approach.",
  },
  {
    icon: FiUsers,
    title: "User-Centric",
    description:
      "Focusing on user needs and feedback to deliver intuitive and engaging web applications.",
  },
];

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
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white via-gray-50 to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
    >
      {/* Background Patterns */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.15]" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100/40 to-purple-100/40 dark:from-blue-500/5 dark:to-purple-500/5" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block mb-6 relative"
          >
            <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400">
              About Me
            </h2>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200" />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            I'm a passionate Front-End Developer with a keen eye for design and
            a commitment to creating exceptional web experiences. With expertise
            in modern web technologies and best practices, I transform ideas
            into reality through clean code and intuitive interfaces.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className="group relative bg-white/80 dark:bg-gray-800 rounded-2xl p-8 text-center shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 via-purple-100/50 to-indigo-100/50 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-indigo-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-sm">
                  <feature.icon className="w-8 h-8 text-blue-700 dark:text-blue-400 transform group-hover:rotate-[-6deg] transition-transform duration-300" />
                </div>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#skills"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full text-white bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-600 dark:hover:to-indigo-600 transition-all duration-300 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]"
          >
            View My Skills
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
