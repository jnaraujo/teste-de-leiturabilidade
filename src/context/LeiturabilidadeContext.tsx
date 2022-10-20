import { createContext, useState, useMemo, ReactNode } from "react";

export interface IEase {
  index: number;
  syllables: number;
  words: number;
  sentences: number;
}
export interface ILeiturabilidadeContext {
  ease: IEase;
  setEase(value: IEase): void;
}

interface ILeiturabilidadeProvider {
  children: ReactNode;
}

export const LeiturabilidadeContext = createContext<ILeiturabilidadeContext>(
  {} as ILeiturabilidadeContext
);

export const LeiturabilidadeProvider = ({
  children,
}: ILeiturabilidadeProvider) => {
  const [ease, setEase] = useState<IEase>({} as IEase);

  const handleSetEase = (newEase: IEase) => {
    setEase(newEase);
  };

  const value = useMemo(() => ({ ease, setEase: handleSetEase }), [ease]);

  return (
    <LeiturabilidadeContext.Provider value={value}>
      {children}
    </LeiturabilidadeContext.Provider>
  );
};
