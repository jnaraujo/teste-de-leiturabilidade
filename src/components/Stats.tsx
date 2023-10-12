"use client";

import { secondsToHMS } from "@/libs/formatters";
import { useStatsStore } from "@/store/statsStore";
import useStore from "@/store/useStore";
export default function Stats() {
  const timeWrittingInSecs = useStore(
    useStatsStore,
    (state) => state.timeWrittingInSecs,
  );

  return (
    <div className="text-sm text-zinc-500">
      🎉 Você passou{" "}
      <span className="font-medium text-zinc-600">
        {secondsToHMS(timeWrittingInSecs || 0)}
      </span>{" "}
      escrevendo.
    </div>
  );
}
