"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      leftIcon,
      rightIcon,
      isLoading,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-lg transition-all focus:outline-none";

    const variants = {
      primary:
        "bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90",
      secondary:
        "bg-secondary/10 text-secondary-foreground hover:bg-secondary/20",
      outline:
        "border-2 border-primary/50 text-primary hover:bg-primary/10 dark:border-primary/30",
      ghost: "hover:bg-primary/10 text-foreground",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm rounded-lg",
      md: "px-4 py-2 text-base rounded-xl",
      lg: "px-6 py-3 text-lg rounded-2xl",
    };

    const motionProps: HTMLMotionProps<"button"> = {
      whileHover: { scale: 1.02, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" },
      whileTap: { scale: 0.98 },
      ...props,
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
        whileTap={{ scale: 0.98 }}
        {...motionProps}
        className={twMerge(
          baseStyles,
          variants[variant],
          sizes[size],
          "backdrop-blur-sm",
          isLoading && "opacity-70 cursor-not-allowed",
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
        disabled={isLoading || disabled}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading...
          </>
        ) : (
          <>
            {leftIcon && <span className="mr-2">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="ml-2">{rightIcon}</span>}
          </>
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
