import Link from "next/link";

const Footer: React.FC = () => (
  <footer className="container grid grid-cols-1 gap-4 py-4 text-center text-gray-500 md:grid-cols-2 md:text-start">
    <p className="text-sm text-zinc-500 dark:text-stone-400">
      Feito com ❤️ por{" "}
      <Link
        href="https://jnaraujo.com/"
        target="_blank"
        className="text-violet-600 underline hover:text-violet-700 dark:text-violet-400"
      >
        Jônatas Araújo
      </Link>{" "}
      - {new Date().getFullYear()}
    </p>

    <div className="md:justify-self-end">
      <h5 className="text-lg font-semibold text-zinc-700">Links úteis:</h5>
      <ul className="space-y-1">
        <li>
          <a
            className="text-sm text-violet-600 underline hover:text-violet-700 dark:text-violet-400"
            href="/contador-de-palavras"
          >
            Contador de Palavras
          </a>
        </li>
        <li>
          <a
            className="text-sm text-violet-600 underline hover:text-violet-700 dark:text-violet-400"
            href="/editor"
          >
            Editor de Leiturabilidade
          </a>
        </li>
        <li>
          <a
            className="text-sm text-violet-600 underline hover:text-violet-700 dark:text-violet-400"
            href="/blog"
          >
            Blog
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
