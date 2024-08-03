import "../styles/globals.scss";
import FeedbackWidget from "@/components/FeedbackWidget";
import Providers from "@/components/Providers";
import { Inter, Merriweather } from "next/font/google";
import Script from "next/script";

import "react-responsive-modal/styles.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  preload: false,
});

const merriweather = Merriweather({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-merriweather",
  preload: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={`${inter.variable} ${merriweather.variable}`}>
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#317EFB" />
        <Script
          defer
          data-domain="leiturabilidade.site"
          src="https://analytics.jnaraujo.com/js/script.js"
        />
        {process.env.NEXT_PUBLIC_ADSENSE && (
          <meta
            name="google-adsense-account"
            content={process.env.NEXT_PUBLIC_ADSENSE}
          />
        )}
      </head>
      <body className="bg-zinc-100 font-sans antialiased dark:bg-stone-900">
        <Providers>
          {children}
          <FeedbackWidget />
        </Providers>
      </body>
    </html>
  );
}
