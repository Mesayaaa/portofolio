"use client";

import { useState, useEffect, memo } from "react";
import Link from "./Link";
import Image from "./Image";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { FiMenu, FiX, FiChevronRight } from "react-icons/fi";
import { IconType } from "react-icons";
import { useIsBrowser } from "@/hooks/useIsBrowser";
import { smoothScroll } from "@/utils/smoothScroll";
import { navigationItems } from "@/constants/navigation";

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

const MemoizedLink = memo(function NavLink({
  href,
  label,
  isActive,
  className,
}: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("/#")) {
      smoothScroll(e, href.replace("/", ""));
    }
  };

  return (
    <div className="relative">
      <Link
        href={href}
        onClick={handleClick}
        className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-blue-100 dark:hover:bg-blue-800 ${
          isActive
            ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600"
            : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
        } ${className || ""}`}
      >
        {label}
      </Link>
      {isActive && (
        <motion.div
          layoutId="activeNavItem"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </div>
  );
});

MemoizedLink.displayName = "MemoizedLink";

interface SocialLinkProps {
  href: string;
  Icon: IconType;
  label: string;
}

const MemoizedSocialLink = memo(function SocialLink({
  href,
  Icon,
  label,
}: SocialLinkProps) {
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

const menuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isBrowser = useIsBrowser();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">Logo</div>
        <div className="hidden md:flex space-x-4">
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-800 dark:text-gray-200 hover:text-blue-600 transition"
            >
              {item.name}
            </a>
          ))}
        </div>
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FiX className="w-6 h-6" />
          ) : (
            <FiMenu className="w-6 h-6" />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-md p-4">
          <div className="flex flex-col space-y-2 p-4">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 transition"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
