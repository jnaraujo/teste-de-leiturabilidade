import { createContext, useState, useMemo } from "react";

interface IEase {
  index: number;
  syllables: number;
  words: number;
  sentences: number;
}
interface ILeiturabilidadeContext {
  ease: IEase;
  setEase: (value: IEase) => void;
}

export const LeiturabilidadeContext = createContext<ILeiturabilidadeContext>(
  {} as ILeiturabilidadeContext
);

export const LeiturabilidadeProvider = ({ children }) => {
  const [ease, setEase] = useState<IEase>({
    index: 0,
    syllables: 0,
    words: 0,
    sentences: 0,
  });

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
