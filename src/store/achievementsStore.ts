import { create } from "zustand";
import { persist } from "zustand/middleware";

type Achievement =
  | "WROTE_FOR_MORE_THAN_15_MINUTE"
  | "WROTE_FOR_MORE_THAN_1_HOUR"
  | "WROTE_FOR_MORE_THAN_1_DAY"
  | "WROTE_FOR_MORE_THAN_15_DAYS"
  | "WROTE_FOR_MORE_THAN_1_MONTH"
  | "WROTE_FOR_MORE_THAN_1_YEAR";

interface AchievementsStore {
  achievements: Achievement[];
  addAchievement: (achievement: Achievement) => void;
}

export const useAchievementsStore = create(
  persist<AchievementsStore>(
    (set) => ({
      achievements: [],
      addAchievement: (achievement) =>
        set((state) => ({
          achievements: [...state.achievements, achievement],
        })),
    }),
    {
      name: "achievements",
    },
  ),
);
