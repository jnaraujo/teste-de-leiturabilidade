"use client";
import * as gtag from "@/libs/gtag";
import RootStyleRegistry from "./registry";
import StyledComponentsRegistry from "./styled";
import { UpdateThemeProvider } from "@/context/UpdateThemeContext";
import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";
import Navbar from "@/components/Navbar";
import FeedbackWidget from "@/components/FeedbackWidget";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { GlobalStyles } from "@/styles/global";

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

export default function RootLayout({ children }: { children: JSX.Element }) {
  const pathname = usePathname();

  useEffect(() => {
    gtag.pageview(pathname || "");
  }, []);

  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <title>Teste de Leiturabilidade - Faça seu texto ser entendido por todos</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#317EFB" />
        <meta name="description" content="Saiba em tempo real e de graça o quão fácil de ser lido seu texto é. Importe arquivos do Google Docs, Notion, etc e faça o teste de leiturabilidade." />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
        `}
        </Script>
      </head>
      <body>
        <GlobalStyles />
        <RootStyleRegistry>
          <UpdateThemeProvider>
            <ThemeProviderWrapper>
              <Navbar />
              <main>
                {children}
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
            </ThemeProviderWrapper>
          </UpdateThemeProvider>
        </RootStyleRegistry>
      </body>
    </html>
  );
}