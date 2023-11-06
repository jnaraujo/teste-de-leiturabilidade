import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <div className="container mt-4">
        <div className="mx-auto h-[1px] w-full max-w-5xl bg-zinc-300 dark:bg-zinc-600" />
        <Footer />
      </div>
    </>
  );
}
