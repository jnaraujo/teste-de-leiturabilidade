import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface StatsStore {
  timeWritingInSecs: number;
  setTimeWritingInSecs: (secs: number) => void;
}

export const useStatsStore = create(
  persist<StatsStore>(
    (set) => ({
      timeWritingInSecs: 0,
      setTimeWritingInSecs: (secs) => {
        set({ timeWritingInSecs: secs });
      },
    }),
    {
      name: "statsStore",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
