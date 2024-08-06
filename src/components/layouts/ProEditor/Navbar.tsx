import Pomodoro from "@/components/Pomodoro";
import Stats from "@/components/Stats";
import ThemeToggle from "@/components/ThemeToggle";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header className="container grid grid-cols-[50px_1fr_50px] items-center gap-4 py-4 sm:grid-cols-3">
        <nav className="items-center">
          <Link
            href="/"
            className="group flex h-11 w-11 items-center justify-start gap-1 sm:w-fit"
            aria-label="Voltar para a página inicial"
          >
            <ArrowLeft className="text-lg text-zinc-600 group-hover:text-zinc-800 dark:text-stone-400 dark:group-hover:text-zinc-500 sm:text-sm" />
            <span className="hidden text-sm text-zinc-500 group-hover:text-zinc-500 dark:text-stone-300 dark:group-hover:text-zinc-500 sm:block">
              Voltar para a página inicial
            </span>
          </Link>
        </nav>

        <Pomodoro />

        <div className="flex w-fit items-center justify-between gap-1 justify-self-end">
          <Stats />
          <ThemeToggle />
        </div>
      </header>
    </>
  );
}
