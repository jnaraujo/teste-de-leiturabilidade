import create from "zustand";

export interface IConfig {
  highlight: boolean;
}

export interface IConfigStore {
  config: IConfig;
  setConfig(key: string, value: string | any): void;
}

const defaultConfig: IConfig = {
  highlight: true,
};

const getLocalStorage = (key: string) => {
  if (typeof window === "undefined" || !window.localStorage.getItem(key))
    return defaultConfig;

  return JSON.parse(window.localStorage.getItem(key) || "");
};
const setLocalStorage = (key: string, value: object) =>
  window.localStorage.setItem(key, JSON.stringify(value));

export const useConfigStore = create<IConfigStore>((set, get) => ({
  config: getLocalStorage("config-store") || defaultConfig,
  setConfig: (key: keyof IConfig, value: any) => {
    const config = get().config;
    config[key] = value;
    set({ config });
    setLocalStorage("config-store", config);
  },
}));
