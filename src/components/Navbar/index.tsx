"use client";

import { useState } from "react";
import Link from "next/link";
import { Links } from "./Links";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="container flex items-center justify-between py-4">
      <Link href="/" passHref className="text-lg font-semibold text-zinc-700">
        Teste de Leiturabilidade
      </Link>
      <Links onClose={handleClick} isOpen={isOpen} />
      <button
        className="text-2xl text-zinc-700 focus:outline-none sm:hidden"
        type="button"
        onClick={handleClick}
        aria-label="Abrir menu"
      >
        <AiOutlineMenu />
      </button>
    </header>
  );
};
export default Navbar;
