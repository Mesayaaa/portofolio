"use client";

import { memo, useCallback, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { FiMenu, FiX, FiChevronRight } from "react-icons/fi";
import { IconType } from "react-icons";

interface NavbarProps {
  navigationItems: { name: string; href: string }[];
  socialLinks: { label: string; icon: IconType; href: string }[];
}

const MemoizedLink = memo(function NavLink({
  href,
  label,
  isActive,
}: {
  href: string;
  label: string;
  isActive: boolean;
}) {
  return (
    <Link
      href={href}
      className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
        ${
          isActive
            ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
            : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
        }`}
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

const MemoizedSocialLink = memo(function SocialLink({
  href,
  Icon,
  label,
}: {
  href: string;
  Icon: React.ComponentType;
  label: string;
}) {
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

function Navbar({ navigationItems, socialLinks }: NavbarProps) {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setIsVisible(prevScrollY > currentScrollY || currentScrollY < 50);
    setIsScrolled(currentScrollY > 0);
    setPrevScrollY(currentScrollY);
  }, [prevScrollY]);

  useEffect(() => {
    let rafId: number;
    const onScroll = () => {
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [handleScroll]);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          isScrolled
            ? "shadow-lg backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border-b border-gray-200/20 dark:border-gray-700/20"
            : "bg-transparent"
        }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-8">
          {navigationItems.map((item) => (
            <MemoizedLink
              key={item.href}
              href={item.href}
              label={item.name}
              isActive={pathname === item.href}
            />
          ))}
        </div>

        <div className="flex items-center space-x-4">
          {socialLinks.map((link) => (
            <MemoizedSocialLink
              key={link.href}
              href={link.href}
              Icon={link.icon}
              label={link.label}
            />
          ))}
          <motion.button
            onClick={toggleTheme}
            className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{ opacity: 0, rotate: -30 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 30 }}
                transition={{ duration: 0.2 }}
              >
                {theme === "dark" ? "🌙" : "☀️"}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>
    </motion.header>
  );
}

export default memo(Navbar);
