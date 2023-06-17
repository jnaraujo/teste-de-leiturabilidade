export default function Footer() {
  return (
    <footer className="container mx-auto border-t border-zinc-200 py-4 text-center md:py-6">
      Feito com ❤️ por{" "}
      <a
        href="https://jnaraujo.com/"
        target="_blank"
        rel="noreferrer"
        className="text-purple-600 transition-colors duration-200 ease-in-out hover:text-purple-700"
      >
        Jônatas Araújo
      </a>{" "}
      - {new Date().getFullYear()}
    </footer>
  )
}
