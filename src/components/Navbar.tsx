"use client";

import { useState, useEffect, memo } from "react";
import Link from "./Link";
import Image from "./Image";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { FiMenu, FiX, FiChevronRight } from "react-icons/fi";
import { IconType } from "react-icons";
import { useIsBrowser } from "@/hooks/useIsBrowser";

interface NavbarProps {
  navigationItems: { name: string; href: string }[];
  socialLinks: { label: string; icon: IconType; href: string }[];
}

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  className?: string;
}

const MemoizedLink = memo(function NavLink({ href, label, isActive, className }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
        isActive
          ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
          : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
      } ${className || ""}`}
    >
      {label}
      {isActive && (
        <motion.div
          layoutId="activeNavItem"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  );
});

MemoizedLink.displayName = "MemoizedLink";

interface SocialLinkProps {
  href: string;
  Icon: IconType;
  label: string;
}

const MemoizedSocialLink = memo(function SocialLink({ href, Icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 text-muted-foreground transition-colors duration-200 hover:text-foreground"
      aria-label={label}
    >
      <Icon />
    </a>
  );
});

MemoizedSocialLink.displayName = "MemoizedSocialLink";

function Navbar({ navigationItems, socialLinks }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isBrowser = useIsBrowser();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-bold text-xl">Portfolio</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <MemoizedLink
                key={item.href}
                href={item.href}
                label={item.name}
                isActive={item.href === "/"}
              />
            ))}
          </div>

          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {theme === "dark" ? "🌞" : "🌙"}
          </motion.button>
        </div>
      </div>
    </nav>
  );
}

export default memo(Navbar);
