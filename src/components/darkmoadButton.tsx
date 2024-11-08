"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Check localStorage and system preference
    const storedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    setIsDarkMode(
      storedTheme === "dark" || (!storedTheme && systemPrefersDark)
    );
  }, []);

  useEffect(() => {
    // Update localStorage and apply class to document
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="relative w-[35px] h-[35px] md:w-[40px] md:h-[40px] lg:w-[47px] lg:h-[47px] rounded-full border outline-none border-white/10 bg-white/10 dark:bg-[#FF4B00] dark:text-white backdrop-blur-md p-0 transition-colors hover:bg-white/20"
      onClick={toggleDarkMode}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute inset-0 bg-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="relative z-10 flex items-center justify-center w-full h-full"
        initial={false}
        animate={{ rotate: isDarkMode ? 360 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isDarkMode ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <Sun className="h-5 w-5 text-white" />
        </motion.div>
        <motion.div
          className="absolute"
          initial={{ opacity: 0 }}
          animate={{ opacity: isDarkMode ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Moon className="h-5 w-5 text-white" />
        </motion.div>
      </motion.div>
      <span className="sr-only">Toggle dark mode</span>
    </Button>
  );
}
