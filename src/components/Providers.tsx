"use client";

import { ModalProvider } from "@/context/ModalContext";
import { Toaster } from "react-hot-toast";
import { TooltipProvider } from "./ui/tooltip";
import { ThemeProvider } from "@/context/ThemeContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <TooltipProvider delayDuration={250}>
        <ModalProvider>
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
        </ModalProvider>
      </TooltipProvider>
    </ThemeProvider>
  );
}
