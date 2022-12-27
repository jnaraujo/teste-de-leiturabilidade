import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "@/libs/createEmotionCache";
import { GlobalStyles } from "../styles/global";
import { ModalProvider } from "../context/ModalContext";
import ThemeProviderWrapper from "../components/ThemeProviderWrapper";
import { UpdateThemeProvider } from "../context/UpdateThemeContext";
import LinearProgress from "../components/LinearProgress";
import FeedbackWidget from "@/components/FeedbackWidget";

import "react-responsive-modal/styles.css";

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
      <GlobalStyles />
      {loading && <LinearProgress />}
      <UpdateThemeProvider>
        <ThemeProviderWrapper>
          <ModalProvider>
            <CacheProvider value={emotionCache}>
              <CssBaseline />
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
            </CacheProvider>
          </ModalProvider>
        </ThemeProviderWrapper>
      </UpdateThemeProvider>
    </>
  );
};

export default MyApp;
