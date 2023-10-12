"use client";
import Pomodoro from "@/components/Pomodoro";
import Stats from "@/components/Stats";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useStatsStore } from "@/store/statsStore";
import useStore from "@/store/useStore";
import { ArrowLeft, PartyPopper } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const timeWrittingInSecs = useStore(
    useStatsStore,
    (state) => state.timeWrittingInSecs,
  );
  const hasWrittingTime = timeWrittingInSecs && timeWrittingInSecs > 1;
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
          {hasWrittingTime ? <Stats /> : null}
        </div>

        <div className="flex items-center justify-end sm:hidden">
          {hasWrittingTime ? (
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
          ) : null}
        </div>
      </header>
    </>
  );
}
