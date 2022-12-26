import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { GlobalStyles } from "../styles/global";
import { ModalProvider } from "../context/ModalContext";
import ThemeProviderWrapper from "../components/ThemeProviderWrapper";
import { UpdateThemeProvider } from "../context/UpdateThemeContext";
import LinearProgress from "../components/LinearProgress";
import FeedbackWidget from "@/components/FeedbackWidget";

import "react-responsive-modal/styles.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      setLoading(false);

      (window as any).gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
      });
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
      <GlobalStyles />
      {loading && <LinearProgress />}
      <UpdateThemeProvider>
        <ThemeProviderWrapper>
          <ModalProvider>
            <Component {...pageProps} />
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
        </ThemeProviderWrapper>
      </UpdateThemeProvider>
    </>
  );
};

export default MyApp;
