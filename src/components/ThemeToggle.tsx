"use client";

import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/libs/utils";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <button
        aria-label="Mudar tema"
        className="relative h-10 w-10"
        onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
      >
        <Moon
          className={cn(
            "absolute text-yellow-300",
            "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform", // center
            "transition-all duration-300 ease-linear", // animate
            {
              "opacity-0": theme === "light",
              "opacity-100": theme === "dark",

              "-rotate-90": theme === "light",
              "rotate-0": theme === "dark",
            },
          )}
        />
        <Sun
          className={cn(
            "absolute text-yellow-500 transition-opacity duration-100 ease-linear",
            "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform", // center
            "transition-all duration-300 ease-linear", // animate
            {
              "opacity-0": theme === "dark",
              "opacity-100": theme === "light",

              // rotate
              "rotate-90": theme === "dark",
              "-rotate-90": theme === "light",
            },
          )}
        />
      </button>
    </div>
  );
}
