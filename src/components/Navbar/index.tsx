"use client";

import { useState } from "react";
import Link from "next/link";
import { NAVBAR_LINKS } from "./constants";
import { Button } from "../ui/button";
import { cn } from "@/libs/utils";
import ThemeToggle from "../ThemeToggle";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  return (
    <header className="container flex items-center justify-between py-4">
      <Link
        href="/"
        passHref
        className="text-lg font-semibold text-zinc-700 dark:text-stone-200"
      >
        Teste de Leiturabilidade
      </Link>

      <Nav />
      <MobileNav />
    </header>
  );
};
export default Navbar;

function Nav() {
  return (
    <nav className="hidden sm:block">
      <ul className="flex items-center justify-center gap-4">
        {NAVBAR_LINKS.map(({ title, url }) => (
          <li key={title}>
            <Link
              href={url}
              className="text-zinc-700 hover:text-zinc-800 dark:text-stone-400 dark:hover:text-stone-500"
            >
              {title}
            </Link>
          </li>
        ))}
        <li>
          <Button
            asChild
            className="h-full bg-violet-600 hover:bg-violet-700 dark:text-stone-200"
          >
            <Link href="/editor">Editor Completo</Link>
          </Button>
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <>
      <nav
        className={cn(
          "hidden bg-zinc-100 p-4 dark:bg-zinc-900",
          "fixed bottom-0 left-0 right-0 top-0 z-50", // position
          {
            "flex items-center justify-center sm:hidden": isOpen,
          },
        )}
      >
        <button
          className="absolute right-2 top-2 text-2xl text-zinc-700"
          type="button"
          onClick={handleClick}
          aria-label="Abrir menu"
        >
          <X />
        </button>

        <ul className="flex flex-col items-center justify-center gap-4">
          {NAVBAR_LINKS.map(({ title, url }) => (
            <li key={title}>
              <Link
                href={url}
                className="text-zinc-700 hover:text-zinc-800 dark:text-stone-400 dark:hover:text-stone-500"
                onClick={closeMenu}
              >
                {title}
              </Link>
            </li>
          ))}
          <li>
            <Button
              asChild
              className="h-full bg-violet-600 text-zinc-50 hover:bg-violet-700"
            >
              <Link href="/editor">Editor Completo</Link>
            </Button>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
      <button
        className="text-2xl text-zinc-700 focus:outline-none sm:hidden"
        type="button"
        onClick={handleClick}
        aria-label="Abrir menu"
      >
        <Menu />
      </button>
    </>
  );
}
