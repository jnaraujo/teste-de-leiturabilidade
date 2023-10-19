import Link from "next/link";

const Footer: React.FC = () => (
  <footer className="py-4 text-center text-sm text-gray-500">
    Feito com ❤️ por{" "}
    <Link
      href="https://jnaraujo.com/"
      target="_blank"
      className="text-violet-600 underline hover:text-violet-700"
    >
      Jônatas Araújo
    </Link>{" "}
    - {new Date().getFullYear()}
  </footer>
);

export default Footer;
