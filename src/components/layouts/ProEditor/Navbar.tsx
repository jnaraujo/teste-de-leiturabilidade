import Pomodoro from "@/components/Pomodoro";
import Stats from "@/components/Stats";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header className="container grid grid-cols-3 items-center gap-4 py-4 sm:py-6">
        <nav className="items-center">
          <Link href="/" className="group flex items-center gap-1">
            <ArrowLeft className="text-lg text-zinc-600 group-hover:text-zinc-800 sm:text-sm" />
            <span className="hidden text-sm text-zinc-500 group-hover:text-zinc-600 sm:block">
              Voltar para a página inicial
            </span>
          </Link>
        </nav>
        <Pomodoro />

        <div className="flex items-center justify-end ">
          <Stats />
        </div>
      </header>
    </>
  );
}
