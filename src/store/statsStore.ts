import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface StatsStore {
  timeWrittingInSecs: number;
  setTimeWritingInSecs: (secs: number) => void;
}

export const useStatsStore = create(
  persist<StatsStore>(
    (set) => ({
      timeWrittingInSecs: 0,
      setTimeWritingInSecs: (secs) => {
        set({ timeWrittingInSecs: secs });
      },
    }),
    {
      name: "statsStore",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
