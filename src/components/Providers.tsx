import { Toaster } from "react-hot-toast"

interface ProvidersProps {
  children: React.ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <>
      {children}
      <Toaster
        toastOptions={{
          duration: 5000,
          style: {
            fontFamily: "var(--font-sans)",
          },
        }}
        position="top-center"
      />
    </>
  )
}
