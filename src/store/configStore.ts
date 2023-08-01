import { getLocalStorage, setLocalStorage } from "@/libs/localstorage";
import { create } from "zustand";

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

const config = Object.assign(defaultConfig, getLocalStorage("config-store"))

export const useConfigStore = create<IConfigStore>((set, get) => ({
  config: config,
  setConfig: (key: keyof IConfig, value: any) => {
    const config = get().config;
    config[key] = value;
    set({ config });
    setLocalStorage("config-store", config);
  },
}));
