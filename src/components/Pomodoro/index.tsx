"use client";

import { Play, Pause, RotateCcw } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Label } from "@/components/ui/label";
import { secondsToMS } from "@/libs/formatters";
import { cn } from "@/libs/utils";

export default function Pomodoro() {
  const [state, setState] = useState<"paused" | "running" | "idle">("idle");
  const [selectedTime, setSelectedTime] = useState(60 * 25);
  const [timeInSecs, setTimeInSecs] = useState(selectedTime);
  const intervalRef = useRef<any>();

  useEffect(() => {
    setTimeInSecs(selectedTime);
    setState("idle");
    clearInterval(intervalRef.current);
  }, [selectedTime]);

  function handleStart() {
    setState("running");

    intervalRef.current = setInterval(() => {
      setTimeInSecs((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          setState("paused");
          return 0;
        }

        return prev - 1;
      });
    }, 1000);
  }

  function handlePause() {
    setState("paused");
    clearInterval(intervalRef.current);
  }

  function handleReset() {
    setState("idle");
    setTimeInSecs(selectedTime);
    clearInterval(intervalRef.current);
  }

  const TIME_ENDED = timeInSecs === 0;

  return (
    <div className="flex items-center justify-center gap-1 rounded-xl px-4">
      <button
        aria-label="Resetar o temporizador"
        aria-disabled={state === "idle" ? true : false}
        className={cn(
          "flex h-11 w-11 items-center justify-center text-base text-zinc-600 hover:text-zinc-700 dark:text-stone-500",
          {
            "cursor-not-allowed text-zinc-400 hover:text-zinc-400 dark:text-stone-600":
              state === "idle",
          },
        )}
        disabled={state === "idle"}
        onClick={handleReset}
      >
        <RotateCcw size={18} />
      </button>

      <Popover>
        <PopoverTrigger>
          <Tooltip>
            <TooltipTrigger asChild aria-label="Temporizador">
              <span className="text-center text-2xl tabular-nums text-zinc-600 dark:text-stone-300">
                {secondsToMS(timeInSecs)}
              </span>
            </TooltipTrigger>
            <TooltipContent>Temporizador</TooltipContent>
          </Tooltip>
        </PopoverTrigger>
        <PopoverContent>
          <Label htmlFor="time">Tempo</Label>
          <Select
            onValueChange={(v) => {
              setSelectedTime(parseInt(v) * 60);
            }}
            defaultValue={String(selectedTime / 60)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecione o tempo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="15">15 minutos</SelectItem>
              <SelectItem value="25">25 minutos</SelectItem>
              <SelectItem value="30">30 minutos</SelectItem>
              <SelectItem value="45">45 minutos</SelectItem>
              <SelectItem value="60">60 minutos</SelectItem>
            </SelectContent>
          </Select>
        </PopoverContent>
      </Popover>

      <button
        aria-label={state !== "running" ? "Iniciar o temporizador" : "Pausar"}
        onClick={() => {
          state !== "running" ? handleStart() : handlePause();
        }}
        className="flex h-11 w-11 items-center justify-center disabled:cursor-not-allowed"
        disabled={TIME_ENDED}
      >
        {state !== "running" ? (
          <Play
            className={cn(
              "fill-zinc-500 text-zinc-600 hover:fill-zinc-600 hover:text-zinc-600 dark:text-stone-500",
              {
                "text-zinc-400 hover:text-zinc-400 dark:text-stone-600":
                  TIME_ENDED,
              },
            )}
            size={18}
          />
        ) : (
          <Pause
            className="fill-zinc-500 text-zinc-500 hover:fill-zinc-600 hover:text-zinc-600 dark:text-stone-500"
            size={18}
          />
        )}
      </button>
    </div>
  );
}
