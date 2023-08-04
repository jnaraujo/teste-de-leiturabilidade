import type { AppProps, NextWebVitalsMetric } from "next/app";
import { GoogleAnalytics, event } from "nextjs-google-analytics";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { ModalProvider } from "../context/ModalContext";
import LinearProgress from "../components/LinearProgress";
import FeedbackWidget from "@/components/FeedbackWidget";

import "../styles/globals.scss";

import "react-responsive-modal/styles.css";
import Navbar from "@/components/Navbar";

const MyApp = ({
  Component,
  pageProps,
}: AppProps | any) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      setLoading(false);
    };
    function handleRouteChangeStart() {
      setLoading(true);
    }

    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("routeChangeStart", handleRouteChangeStart);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("routeChangeStart", handleRouteChangeStart);
    };
  }, [router.events]);

  return (
    <>
      {loading && <LinearProgress />}
      <GoogleAnalytics trackPageViews gaMeasurementId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      <ModalProvider>
        <Navbar />
        <main>
          <Component {...pageProps} />
        </main>
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
    </>
  );
};
export default MyApp;

export function reportWebVitals({ id, name, label, value } : NextWebVitalsMetric) {
  event(name, {
    category: label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
    value: Math.round(name === "CLS" ? value * 1000 : value),
    label: id,
    nonInteraction: true,
  });
}
