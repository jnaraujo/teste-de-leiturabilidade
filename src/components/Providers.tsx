"use client";

import { ModalProvider } from "@/context/ModalContext";
import { Toaster } from "react-hot-toast";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
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
  );
}
