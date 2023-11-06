"use client";

import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/libs/utils";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <div>
      <button
        aria-label="Mudar tema"
        className="relative h-10 w-10"
        onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
      >
        <Moon
          className={cn(
            "absolute text-yellow-300 hover:text-yellow-400",
            "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform", // center
            "-rotate-90 opacity-0 transition-all duration-300 ease-linear dark:rotate-0 dark:opacity-100", // animate
          )}
        />
        <Sun
          className={cn(
            "absolute text-yellow-500 hover:text-yellow-600",
            "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform", // center
            "-rotate-90 opacity-100 transition-all duration-300 ease-linear dark:rotate-90 dark:opacity-0", // animate
          )}
        />
      </button>
    </div>
  );
}
