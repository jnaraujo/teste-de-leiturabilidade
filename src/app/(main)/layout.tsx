import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <div className="container">
        <div className="h-[1px] w-full bg-gray-300" />
        <Footer />
      </div>
    </>
  )
}
