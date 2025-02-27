import { motion, HTMLMotionProps } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface CardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  variant?: "default" | "hover" | "interactive";
  loading?: boolean;
  error?: boolean;
  success?: boolean;
  children: React.ReactNode;
}

export const Card = ({
  className,
  variant = "default",
  children,
  loading,
  error,
  success,
  ...props
}: CardProps) => {
  const variants = {
    default: "glass-card",
    hover: "glass-card hover-card",
    interactive: "glass-card hover-card cursor-pointer",
  };

  const statusClasses = {
    loading: "animate-pulse opacity-70",
    error: "border-destructive",
    success: "border-emerald-500",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={
        variant !== "default"
          ? {
              scale: 1.02,
              boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
            }
          : undefined
      }
      className={twMerge(
        "rounded-xl border border-border/50 p-6 relative backdrop-blur-md",
        variants[variant],
        loading && "animate-pulse",
        error && "border-destructive/50",
        success && "border-emerald-500/50",
        className
      )}
      {...props}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/50 rounded-lg backdrop-blur-sm">
          <div className="loading-spinner" />
        </div>
      )}
      {error && (
        <div className="absolute top-2 right-2">
          <span className="text-destructive">⚠️</span>
        </div>
      )}
      {success && (
        <div className="absolute top-2 right-2">
          <span className="text-emerald-500">✓</span>
        </div>
      )}
      {children}
    </motion.div>
  );
};

Card.displayName = "Card";
