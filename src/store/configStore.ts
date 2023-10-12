import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface IConfig {
  highlight: boolean;
  tips: boolean;
}

export interface IConfigStore {
  config: IConfig;
  setConfig(key: string, value: string | any): void;
}

const defaultConfig: IConfig = {
  highlight: false,
  tips: true,
};

export const useConfigStore = create(
  persist<IConfigStore>(
    (set, get) => ({
      config: defaultConfig,
      setConfig: (key: keyof IConfig, value: any) => {
        const config = get().config;
        config[key] = value;
        set({ config });
      },
    }),
    {
      name: "configStore",
    },
  ),
);
