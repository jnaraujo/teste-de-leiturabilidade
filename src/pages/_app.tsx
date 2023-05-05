import type { AppProps, NextWebVitalsMetric } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "@/libs/createEmotionCache";
import { ModalProvider } from "../context/ModalContext";
import LinearProgress from "../components/LinearProgress";
import FeedbackWidget from "@/components/FeedbackWidget";

import "../styles/globals.scss";

import * as gtag from "@/libs/gtag";

import "react-responsive-modal/styles.css";
import Navbar from "@/components/Navbar";

const clientSideEmotionCache = createEmotionCache();

const MyApp = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppProps | any) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
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
      <ModalProvider>
        <CacheProvider value={emotionCache}>
          <CssBaseline />
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
        </CacheProvider>
      </ModalProvider>
    </>
  );
};
export default MyApp;

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
