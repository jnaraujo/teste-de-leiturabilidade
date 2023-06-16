"use client";

import "react-responsive-modal/styles.css";

import { ModalProvider } from "@/context/ModalContext";
import Navbar from "./Navbar";
import FeedbackWidget from "./FeedbackWidget";
import { Toaster } from "react-hot-toast";
import { NextWebVitalsMetric } from "next/app";

import * as gtag from "@/libs/gtag";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;

    const url = new URL(pathname, window.location.origin).href;
    gtag.pageview(url);
  }, [pathname]);

  return (
    <ModalProvider>
      <Navbar />
      {children}
      <FeedbackWidget />
      <Toaster
        toastOptions={{
          duration: 5000,
          style: {
            fontFamily: "Inter",
          },
        }}
        position="top-center"
      />
    </ModalProvider>
  );
}

export const reportWebVitals = ({
  label,
  name,
  value,
  id,
}: NextWebVitalsMetric) => {
  if (label === "web-vital") {
    gtag.event({
      action: name,
      category: "Web Vitals",
      label: id,
      value: Math.round(name === "CLS" ? value * 1000 : value),
    });
  }
};
