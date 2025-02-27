"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { twMerge } from "tailwind-merge";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
  variant?: "default" | "minimal" | "rounded";
  size?: "sm" | "md" | "lg";
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
  variant = "default",
  size = "md",
}: PaginationProps) {
  const getPageNumbers = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const sizeClasses = {
    sm: "h-8 w-8 text-sm",
    md: "h-10 w-10 text-base",
    lg: "h-12 w-12 text-lg",
  };

  const variants = {
    default: "rounded-lg",
    minimal: "rounded-md",
    rounded: "rounded-full",
  };

  const baseButtonClasses = twMerge(
    "flex items-center justify-center transition-all duration-200",
    "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    sizeClasses[size],
    variants[variant]
  );

  const pageButtonClasses = twMerge(
    baseButtonClasses,
    "bg-white dark:bg-gray-800",
    "border border-gray-200 dark:border-gray-700",
    "hover:bg-gray-50 dark:hover:bg-gray-700",
    "text-gray-700 dark:text-gray-200"
  );

  const activeButtonClasses = twMerge(
    baseButtonClasses,
    "bg-primary text-white",
    "border border-primary",
    "hover:bg-primary/90"
  );

  const navigationButtonClasses = twMerge(
    baseButtonClasses,
    "bg-white dark:bg-gray-800",
    "border border-gray-200 dark:border-gray-700",
    "hover:bg-gray-50 dark:hover:bg-gray-700",
    "text-gray-500 dark:text-gray-400"
  );

  return (
    <nav
      role="navigation"
      aria-label="Pagination"
      className={twMerge("flex items-center justify-center gap-2", className)}
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={navigationButtonClasses}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        aria-label="Previous page"
      >
        <FiChevronLeft className="w-5 h-5" />
      </motion.button>

      <AnimatePresence mode="wait">
        {getPageNumbers().map((pageNumber, index) => (
          <motion.button
            key={`${pageNumber}-${index}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              typeof pageNumber === "number" && onPageChange(pageNumber)
            }
            disabled={pageNumber === "..."}
            className={
              pageNumber === currentPage
                ? activeButtonClasses
                : pageNumber === "..."
                ? twMerge(pageButtonClasses, "cursor-default")
                : pageButtonClasses
            }
            aria-current={pageNumber === currentPage ? "page" : undefined}
            aria-label={
              typeof pageNumber === "number"
                ? `Page ${pageNumber}`
                : "More pages"
            }
          >
            {pageNumber}
          </motion.button>
        ))}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={navigationButtonClasses}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        aria-label="Next page"
      >
        <FiChevronRight className="w-5 h-5" />
      </motion.button>
    </nav>
  );
}
