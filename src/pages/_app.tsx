import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { ModalProvider } from "../context/ModalContext";
import LinearProgress from "../components/LinearProgress";
import FeedbackWidget from "@/components/FeedbackWidget";
import { Inter, Merriweather } from 'next/font/google'
import "react-responsive-modal/styles.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ['latin'], display: 'swap', weight: [
    "400", "500", "600", "700"
  ],
})

const merriweather = Merriweather({
  subsets: ['latin'], display: 'swap', weight: [
    "400"
  ],
})

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
      <style jsx global>{`
        :root {
          --font-merriweather: ${merriweather.style.fontFamily};
          --font-inter: ${inter.style.fontFamily};
        }
      `}</style>
      {loading && <LinearProgress />}
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
              fontFamily: "var(--font-inter)",
            },
          }}
          position="top-center"
        />
      </ModalProvider>
    </>
  );
};
export default MyApp;