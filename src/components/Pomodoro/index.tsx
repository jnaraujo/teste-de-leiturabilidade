"use client";

import clsx from "clsx";
import { Play, Pause, RotateCcw } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { secondsToHms } from "./helper";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

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

  return (
    <div className="flex items-center justify-center gap-3 rounded-xl px-4">
      <button
        className={clsx({
          "text-zinc-600 hover:text-zinc-700": state !== "idle",
          "cursor-not-allowed text-zinc-400": state === "idle",
        })}
        disabled={state === "idle"}
        onClick={handleReset}
      >
        <RotateCcw size={16} />
      </button>

      <Popover>
        <PopoverTrigger>
          <Tooltip>
            <TooltipTrigger>
              <span className="text-center text-2xl tabular-nums text-zinc-600">
                {secondsToHms(timeInSecs)}
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

      {state !== "running" ? (
        <button onClick={handleStart} disabled={timeInSecs === 0}>
          <Play
            className={clsx({
              "fill-zinc-500 text-zinc-600 hover:fill-zinc-600 hover:text-zinc-600":
                timeInSecs !== 0,
              "cursor-not-allowed fill-zinc-400 text-zinc-400 hover:fill-zinc-400 hover:text-zinc-400":
                timeInSecs === 0,
            })}
            size={16}
          />
        </button>
      ) : (
        <button onClick={handlePause}>
          <Pause
            className="fill-zinc-500 text-zinc-500 hover:fill-zinc-600 hover:text-zinc-600"
            size={16}
          />
        </button>
      )}
    </div>
  );
}
