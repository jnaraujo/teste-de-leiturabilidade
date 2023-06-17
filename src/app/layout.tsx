import Navbar from "@/components/Layouts/Navbar"
import "./globals.css"
import { Inter, Merriweather } from "next/font/google"
import Footer from "@/components/Layouts/Footer"
import FeedbackWidget from "@/components/FeedbackWidget"
import Providers from "@/components/Providers"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: ["400", "700"],
})

export const metadata = {
  title: "Teste de Leiturabilidade - Faça seu texto ser entendido por todos",
  description:
    "Saiba em tempo real e de graça o quão fácil de ser lido seu texto é. Importe arquivos do Google Docs, Notion, etc e faça o teste de leiturabilidade.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={`${merriweather.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-zinc-50 text-zinc-900">
        <Providers>
          <Navbar />
          {children}
          <FeedbackWidget />
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
