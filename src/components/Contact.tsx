"use client";

import { motion, useAnimation, AnimatePresence } from "framer-motion";
import {
  FiMail,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiSend,
  FiCheck,
  FiAlertCircle,
  FiUser,
  FiMessageSquare,
} from "react-icons/fi";
import { useState, useEffect } from "react";
import type { FormEvent } from "react";
import React from "react";
import toast from "react-hot-toast";

const socialLinks = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com/Mesayaaa",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://www.linkedin.com/in/christopher-mesaya/",
  },
  {
    name: "Instagram",
    icon: FiInstagram,
    url: "https://instagram.com/cmesayaa",
  },
];

const contactInfo = [
  {
    icon: FiMail,
    label: "Email",
    value: "mesayachristopher2112@gmail.com",
    href: "mailto:mesayachristopher2112@gmail.com",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Kabupaten Tangerang, Indonesia",
    href: "https://maps.google.com/?q=Jakarta,Indonesia",
  },
];

const formFields = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Your name",
    icon: FiUser,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "your@email.com",
    icon: FiMail,
  },
  {
    name: "subject",
    label: "Subject",
    type: "text",
    placeholder: "What's this about?",
    icon: FiMessageSquare,
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
      duration: 0.5,
    },
  },
};

const floatingBubbleVariants = {
  initial: { y: 0, opacity: 0.5 },
  animate: {
    y: [-20, 0],
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.custom((t) => (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3"
        >
          <FiCheck className="w-6 h-6" />
          <span>Message sent successfully!</span>
        </motion.div>
      ));
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast.custom((t) => (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="bg-red-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3"
        >
          <FiAlertCircle className="w-6 h-6" />
          <span>Failed to send message. Please try again.</span>
        </motion.div>
      ));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Enhanced background decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Animated background bubbles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            variants={floatingBubbleVariants}
            initial="initial"
            animate="animate"
            className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-blue-400/5 to-purple-400/5"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(40px)",
            }}
          />
        ))}
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          variants={itemVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2
            className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-4"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            Get in Touch
          </motion.h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Have a project in mind? Let's work together to create something
            amazing!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center group"
                    whileHover={{ x: 10 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300"
                      whileHover={{ rotate: 5 }}
                    >
                      <info.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </motion.div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-900 dark:text-white">
                        {info.label}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300"
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        boxShadow: "0 10px 20px -10px rgba(0, 0, 255, 0.2)",
                      }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div variants={itemVariants}>
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 space-y-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {formFields.map((field, index) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    {field.label}
                  </label>
                  <div className="relative">
                    <field.icon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      onFocus={() => setFocusedField(field.name)}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full pl-12 pr-4 py-3 rounded-lg border bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 ${
                        focusedField === field.name
                          ? "border-blue-500 dark:border-blue-400 ring-2 ring-blue-500/20"
                          : "border-gray-300 dark:border-gray-600"
                      }`}
                      placeholder={field.placeholder}
                    />
                    <AnimatePresence>
                      {focusedField === field.name && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2"
                        >
                          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <div className="relative">
                  <FiMessageSquare className="absolute left-4 top-4 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={5}
                    className={`w-full pl-12 pr-4 py-3 rounded-lg border bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 ${
                      focusedField === "message"
                        ? "border-blue-500 dark:border-blue-400 ring-2 ring-blue-500/20"
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                    placeholder="Write your message here..."
                  />
                </div>
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:shadow-lg hover:shadow-blue-500/25"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FiSend className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
