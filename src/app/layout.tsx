import "../styles/globals.scss";
import FeedbackWidget from "@/components/FeedbackWidget";
import Providers from "@/components/Providers";
import { Inter, Merriweather } from "next/font/google";
import Script from "next/script";

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
          data-domain="leitura.jnaraujo.com"
          src="https://analytics.jnaraujo.com/js/script.js"
        />
      </head>
      <body className="bg-muted font-sans antialiased dark:bg-stone-900">
        <Providers>
          {children}
          <FeedbackWidget />
        </Providers>
      </body>
    </html>
  );
}
