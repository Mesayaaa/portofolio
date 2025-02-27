"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import { useIsBrowser } from "@/hooks/useIsBrowser";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  isSystemTheme: boolean;
  useSystemTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [isSystemTheme, setIsSystemTheme] = useState(true);
  const isBrowser = useIsBrowser();

  const applyTheme = (newTheme: Theme, isSystem: boolean = false) => {
    setThemeState(newTheme);
    setIsSystemTheme(isSystem);

    if (!isBrowser) return;

    if (!isSystem) {
      localStorage.setItem("theme", newTheme);
      localStorage.setItem("useSystemTheme", "false");
    } else {
      localStorage.removeItem("theme");
      localStorage.setItem("useSystemTheme", "true");
    }

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
  };

  const handleSystemThemeChange = (e: MediaQueryListEvent | MediaQueryList) => {
    if (isSystemTheme) {
      applyTheme(e.matches ? "dark" : "light", true);
    }
  };

  useEffect(() => {
    if (!isBrowser) return;

    // Initialize theme based on stored preferences
    const storedTheme = localStorage.getItem("theme") as Theme;
    const useSystemTheme = localStorage.getItem("useSystemTheme") === "true";
    const systemDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

    if (useSystemTheme) {
      setIsSystemTheme(true);
      handleSystemThemeChange(systemDarkMode);
    } else if (storedTheme) {
      applyTheme(storedTheme, false);
    } else {
      setIsSystemTheme(true);
      handleSystemThemeChange(systemDarkMode);
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [isBrowser]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    applyTheme(newTheme, false);
  };

  const setTheme = (newTheme: Theme) => {
    applyTheme(newTheme, false);
  };

  const useSystemTheme = () => {
    const systemDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
    handleSystemThemeChange(systemDarkMode);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        setTheme,
        isSystemTheme,
        useSystemTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
