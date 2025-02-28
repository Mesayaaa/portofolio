"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "@/contexts/ThemeContext"; // Contoh, sesuaikan dengan konteks Anda

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
