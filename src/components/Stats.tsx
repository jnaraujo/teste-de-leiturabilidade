"use client";

import { useEffect } from "react";
import { secondsToHMS } from "@/libs/formatters";
import { useStatsStore } from "@/store/statsStore";
import useStore from "@/store/useStore";
import { useAchievementsStore } from "@/store/achievementsStore";
import toast from "react-hot-toast";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PartyPopper } from "lucide-react";

const CONSTANTS = {
  "15_MINUTES": 60 * 15,
  "1_HOUR": 60 * 60,
  "1_DAY": 60 * 60 * 24,
  "2_WEEKS": 60 * 60 * 24 * 14,
  "1_MONTH": 60 * 60 * 24 * 30,
  "1_YEAR": 60 * 60 * 24 * 365,
};

export default function Stats() {
  const { achievements, addAchievement } = useAchievementsStore();
  const timeWrittingInSecs = useStore(
    useStatsStore,
    (state) => state.timeWrittingInSecs,
  );

  useEffect(() => {
    if (!timeWrittingInSecs) return;

    let hasAchieved = false;
    let text = "";

    if (
      timeWrittingInSecs >= CONSTANTS["15_MINUTES"] &&
      !achievements.includes("WROTE_FOR_MORE_THAN_15_MINUTE")
    ) {
      addAchievement("WROTE_FOR_MORE_THAN_15_MINUTE");
      hasAchieved = true;
      text = "Você escreveu por mais de 15 minutos!";
    }

    if (
      timeWrittingInSecs >= CONSTANTS["1_HOUR"] &&
      !achievements.includes("WROTE_FOR_MORE_THAN_1_HOUR")
    ) {
      addAchievement("WROTE_FOR_MORE_THAN_1_HOUR");
      hasAchieved = true;
      text = "Você escreveu por mais de 1 hora!";
    }

    if (
      timeWrittingInSecs >= CONSTANTS["1_DAY"] &&
      !achievements.includes("WROTE_FOR_MORE_THAN_1_DAY")
    ) {
      addAchievement("WROTE_FOR_MORE_THAN_1_DAY");
      hasAchieved = true;
      text = "Você escreveu por mais de 1 dia!";
    }

    if (
      timeWrittingInSecs >= CONSTANTS["2_WEEKS"] &&
      !achievements.includes("WROTE_FOR_MORE_THAN_15_DAYS")
    ) {
      addAchievement("WROTE_FOR_MORE_THAN_15_DAYS");
      hasAchieved = true;
      text = "Você escreveu por mais de 2 semanas!";
    }

    if (
      timeWrittingInSecs >= CONSTANTS["1_MONTH"] &&
      !achievements.includes("WROTE_FOR_MORE_THAN_1_MONTH")
    ) {
      addAchievement("WROTE_FOR_MORE_THAN_1_MONTH");
      hasAchieved = true;
      text = "Você escreveu por mais de 1 mês!";
    }

    if (
      timeWrittingInSecs >= CONSTANTS["1_YEAR"] &&
      !achievements.includes("WROTE_FOR_MORE_THAN_1_YEAR")
    ) {
      addAchievement("WROTE_FOR_MORE_THAN_1_YEAR");
      hasAchieved = true;
      text = "Você escreveu por mais de 1 ano!";
    }

    if (hasAchieved) {
      toast.success(`🎉 ${text}`);
    }
  }, [achievements, addAchievement, timeWrittingInSecs]);

  return (
    <>
      <div className="flex items-center justify-end">
        <Popover>
          <PopoverTrigger
            aria-label="Estatísticas do tempo de escrita"
            className="flex h-11 w-11 items-center justify-end"
          >
            <PartyPopper
              size={24}
              className="text-zinc-600 transition-colors duration-200 hover:text-zinc-800"
            />
          </PopoverTrigger>
          <PopoverContent>
            <StatsMessage timeWrittingInSecs={timeWrittingInSecs || 0} />
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}

function StatsMessage({ timeWrittingInSecs }: { timeWrittingInSecs: number }) {
  const hasWrittingTime = timeWrittingInSecs && timeWrittingInSecs > 1;

  return (
    <>
      {hasWrittingTime ? (
        <p className="text-sm text-zinc-500">
          🎉 Você já escreveu por mais de{" "}
          <strong className="font-medium text-zinc-600">
            {secondsToHMS(timeWrittingInSecs || 0)}
          </strong>
          !
        </p>
      ) : (
        <p className="text-sm text-zinc-500">
          Comece a escrever para ver as estatísticas 😁
        </p>
      )}
    </>
  );
}
