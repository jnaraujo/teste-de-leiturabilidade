"use client";
import Pomodoro from "@/components/Pomodoro";
import Stats from "@/components/Stats";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ArrowLeft, PartyPopper } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header className="container grid grid-cols-3 items-center gap-4 py-4 sm:py-6">
        <div className="items-center">
          <Link href="/" className="group flex items-center gap-1">
            <ArrowLeft className="text-lg text-zinc-600 group-hover:text-zinc-800 sm:text-sm" />
            <span className="hidden text-sm text-zinc-500 group-hover:text-zinc-600 sm:block">
              Voltar para a página inicial
            </span>
          </Link>
        </div>
        <Pomodoro />
        <div className="hidden items-center justify-end sm:flex">
          <Stats />
        </div>

        <div className="flex items-center justify-end sm:hidden">
          <Popover>
            <PopoverTrigger>
              <PartyPopper
                size={24}
                className="text-zinc-600 group-hover:text-zinc-800"
              />
            </PopoverTrigger>
            <PopoverContent>
              <Stats />
            </PopoverContent>
          </Popover>
        </div>
      </header>
    </>
  );
}
