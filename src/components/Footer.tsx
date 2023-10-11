import Link from "next/link";

const Footer: React.FC = () => (
  <footer className="text-center text-gray-500 text-sm py-4">
    Feito com ❤️ por{" "}
    <Link href="https://jnaraujo.com/" target="_blank" className="text-violet-600 hover:text-violet-700">
      Jônatas Araújo
    </Link>{" "}
    - {new Date().getFullYear()}
  </footer>
);

export default Footer;
