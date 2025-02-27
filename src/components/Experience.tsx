"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";

const experiences = [
  {
    title: "Senior Front-End Developer",
    company: "Tech Innovators",
    location: "Jakarta, Indonesia",
    period: "2022 - Present",
    description: [
      "Led the development of multiple high-impact web applications using Next.js and React",
      "Implemented modern UI/UX designs with Tailwind CSS and Framer Motion",
      "Improved application performance by 40% through code optimization",
      "Mentored junior developers and conducted code reviews",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Inc",
    location: "Tangerang, Indonesia",
    period: "2020 - 2022",
    description: [
      "Developed and maintained full-stack web applications using React and Node.js",
      "Integrated third-party APIs and implemented real-time features",
      "Reduced server response time by 50% through database optimization",
      "Collaborated with UI/UX designers to implement responsive designs",
    ],
  },
  {
    title: "Web Developer",
    company: "Creative Agency",
    location: "Bandung, Indonesia",
    period: "2018 - 2020",
    description: [
      "Built responsive websites for various clients using modern web technologies",
      "Implemented SEO best practices and improved site rankings",
      "Worked directly with clients to gather requirements and provide solutions",
      "Managed multiple projects simultaneously while meeting deadlines",
    ],
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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Experience() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-transparent bg-clip-text"
        >
          Professional Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 h-full w-px bg-gradient-to-b from-blue-600 via-purple-600 to-indigo-600 opacity-20" />

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              variants={itemVariants}
              className={`relative mb-12 ${
                index % 2 === 0 ? "md:pr-12" : "md:pl-12"
              } md:w-1/2 ${index % 2 === 0 ? "md:ml-0" : "md:ml-auto"}`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute ${
                  index % 2 === 0 ? "right-0 md:-right-3" : "right-0 md:-left-3"
                } top-0 w-6 h-6 transform translate-x-1/2 md:translate-x-0 flex items-center justify-center`}
              >
                <div className="w-6 h-6 bg-white dark:bg-gray-800 rounded-full border-2 border-blue-600 dark:border-blue-400" />
                <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full transform scale-0 animate-ping" />
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {experience.title}
                  </h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <FiCalendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{experience.period}</span>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <FiBriefcase className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {experience.company}
                  </span>
                  <div className="mx-2 w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full" />
                  <FiMapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                  <span className="text-gray-600 dark:text-gray-400 text-sm">
                    {experience.location}
                  </span>
                </div>

                <ul className="space-y-2">
                  {experience.description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start text-left"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
