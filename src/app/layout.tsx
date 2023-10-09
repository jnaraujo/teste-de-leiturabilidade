import "../styles/globals.scss";
import FeedbackWidget from "@/components/FeedbackWidget"
import Navbar from "@/components/Navbar"
import Providers from "@/components/Providers"
import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google"
import Script from "next/script";

import "react-responsive-modal/styles.css";

export const metadata: Metadata = {
  title: 'Teste de Leiturabilidade - Faça seu texto ser entendido por todos',
  description: 'Teste a leiturabilidade do seu texto e saiba se ele é de fácil de entender. O teste analisa a legibilidade do seu texto e te dá dicas de como melhorá-lo utlizando o Flesch Reading Ease.',
}

const inter = Inter({
  subsets: ['latin'], display: 'swap', weight: [
    "400", "500", "600", "700"
  ],
  variable: "--font-inter",
  preload: false
})

const merriweather = Merriweather({
  subsets: ['latin'], display: 'swap', weight: [
    "400"
  ],
  variable: "--font-merriweather",
  preload: false
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#317EFB" />
        <Script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon={`{"token": "${process.env.NEXT_PUBLIC_CLOUDFLARE_TOKEN}"}`}
          strategy="afterInteractive"
        />

        {/* <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        /> */}
      </head>
      <body>
        <Providers>
          <Navbar />
          {children}
          <FeedbackWidget />
        </Providers>
      </body>
    </html>
  )
}
