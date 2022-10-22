import { useMemo, useState, createContext } from "react";

export interface IConfig {
  highlight: boolean;
}

export interface IConfigContext {
  config: IConfig;
  setConfig(key: string, value: string | any): void;
}

export const ConfigContext = createContext<IConfigContext>(
  {} as IConfigContext
);

export const ConfigProvider = ({ children }: any) => {
  const [config, setConfig] = useState<IConfig>(() => {
    if (typeof localStorage !== "undefined") {
      const item = localStorage.getItem("config");

      if (item) {
        return JSON.parse(item);
      }
    }

    return {} as IConfig;
  });

  const handleSetConfig = (key: string, value: string | any) => {
    const newConfig = {
      ...config,
      [key]: value,
    };
    localStorage.setItem("config", JSON.stringify(newConfig));
    setConfig(newConfig);
  };

  const value = useMemo(
    () => ({ config, setConfig: handleSetConfig }),
    [config]
  );

  return (
    <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
  );
};
