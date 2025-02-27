"use client";

import { useTheme } from "@/contexts/ThemeContext";
import Image from "next/image";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface ThemeAwareImageProps {
  lightSrc: string;
  darkSrc: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  loading?: "lazy" | "eager";
}

export default function ThemeAwareImage({
  lightSrc,
  darkSrc,
  alt,
  width,
  height,
  className = "",
  priority = false,
  quality = 75,
  loading = "lazy",
}: ThemeAwareImageProps) {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  const imageSrc = theme === "light" ? lightSrc : darkSrc;

  if (priority) {
    return (
      <div className={`relative ${className}`}>
        <Image
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
          className={`
            transition-all duration-300 
            ${isLoading ? "scale-110 blur-2xl" : "scale-100 blur-0"}
          `}
          onLoadingComplete={() => setIsLoading(false)}
          priority
          quality={quality}
        />
        {isLoading && (
          <div
            className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 
                       dark:from-gray-700 dark:to-gray-800 animate-pulse rounded-lg"
          />
        )}
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <LazyLoadImage
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        effect="blur"
        className={`
          transition-all duration-300 
          ${isLoading ? "scale-110 blur-2xl" : "scale-100 blur-0"}
        `}
        afterLoad={() => setIsLoading(false)}
        threshold={100}
        placeholderSrc={`data:image/svg+xml;base64,${btoa(
          '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><rect width="40" height="40" fill="#f0f0f0"/></svg>'
        )}`}
      />
      {isLoading && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 
                     dark:from-gray-700 dark:to-gray-800 animate-pulse rounded-lg"
        />
      )}
    </div>
  );
}
