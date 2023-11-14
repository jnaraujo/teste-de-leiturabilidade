"use client";

import { Toaster } from "react-hot-toast";
import { TooltipProvider } from "./ui/tooltip";
import dynamic from "next/dynamic";
const ThemeProvider = dynamic(
  () => import("@/context/ThemeContext").then((mod) => mod.ThemeProvider),
  {
    ssr: false,
  },
);

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <TooltipProvider delayDuration={250}>
        {children}

        <Toaster
          toastOptions={{
            duration: 5000,
            style: {
              fontFamily: "var(--font-inter)",
            },
          }}
          position="top-center"
        />
      </TooltipProvider>
    </ThemeProvider>
  );
}
