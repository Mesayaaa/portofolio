"use client";

import React from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold">My Portfolio</div>
          <div className="hidden md:flex space-x-4">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
            >
              About
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
            >
              Skills
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
            >
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col space-y-2 px-4 py-2 bg-white dark:bg-gray-800">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
