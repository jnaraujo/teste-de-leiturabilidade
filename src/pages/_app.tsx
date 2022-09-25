import "react-responsive-modal/styles.css";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { LeiturabilidadeProvider } from "../context/LeiturabilidadeContext";
import { GlobalStyles } from "../styles/global";
import { ModalProvider } from "../context/ModalContext";
import ThemeProviderWrapper from "../components/ThemeProviderWrapper";
import { UpdateThemeProvider } from "../context/UpdateThemeContext";

// eslint-disable-next-line react/prop-types
const MyApp = ({ Component, pageProps }: any) => {
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
      {loading && (
        <LinearProgress
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 999,
          }}
        />
      )}
      <UpdateThemeProvider>
        <ThemeProviderWrapper>
          <LeiturabilidadeProvider>
            <ModalProvider>
              <Component {...pageProps} />
              <ToastContainer
                position="top-left"
                hideProgressBar={false}
                draggable
                autoClose={1000}
                pauseOnHover={false}
                pauseOnFocusLoss={false}
              />
            </ModalProvider>
          </LeiturabilidadeProvider>
        </ThemeProviderWrapper>
      </UpdateThemeProvider>
    </>
  );
};

export default MyApp;
