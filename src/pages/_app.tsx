import { useRouter } from "next/router";

import { ThemeProvider } from "styled-components";

import { LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { LeiturabilidadeProvider } from "../context/LeiturabilidadeContext";

import { lightTheme } from "../styles/theme";
import { GlobalStyles } from "../styles/global";

// eslint-disable-next-line react/prop-types
const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteChange = (url) => {
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
      {loading ? (
        <LinearProgress
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 999,
          }}
        />
      ) : (
        ""
      )}
      <ThemeProvider theme={lightTheme}>
        <LeiturabilidadeProvider>
          <Component {...pageProps} />
        </LeiturabilidadeProvider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
