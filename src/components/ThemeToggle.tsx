"use client";

import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/libs/utils";
import { Moon, Sun } from "lucide-react";
import Tooltip from "./Tooltip";

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Tooltip
      text={
        theme === "light" ? "Mudar para tema escuro" : "Mudar para tema claro"
      }
      placement="bottom"
      offset={0}
    >
      <button
        aria-label="Mudar tema"
        className="relative h-10 w-10"
        onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
      >
        <Moon
          className={cn(
            "absolute fill-yellow-400 text-yellow-400 hover:fill-yellow-500 hover:text-yellow-500",
            "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform", // center
            "transition-all duration-300 ease-linear", // animate
            {
              "-rotate-90 opacity-0": theme === "dark",
              "rotate-0 opacity-100": theme === "light",
            },
          )}
        />
        <Sun
          className={cn(
            "absolute fill-yellow-500 text-yellow-500 hover:fill-yellow-600 hover:text-yellow-600",
            "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform", // center
            "transition-all duration-300 ease-linear", // animate
            {
              "-rotate-90 opacity-100": theme === "dark",
              "rotate-90 opacity-0": theme === "light",
            },
          )}
        />
      </button>
    </Tooltip>
  );
}
