import "../styles/globals.scss";
import FeedbackWidget from "@/components/FeedbackWidget"
import Providers from "@/components/Providers"
import { Inter, Merriweather } from "next/font/google"
import Script from "next/script";

import "react-responsive-modal/styles.css";

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
      </head>
      <body>
        <Providers>
          {children}
          <FeedbackWidget />
        </Providers>
      </body>
    </html>
  )
}
