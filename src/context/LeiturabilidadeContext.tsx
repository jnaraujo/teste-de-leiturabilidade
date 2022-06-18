import { useContext, createContext, useState, useEffect } from "react";

type LeiturabilidadeContextType = {
  ease: {
    index: number;
    syllables: number;
    words: number;
    sentences: number;
  };
  setEase: (value: Number | any) => void;
};

const LeiturabilidadeContext = createContext<LeiturabilidadeContextType>({
  ease: {
    index: 0,
    syllables: 0,
    words: 0,
    sentences: 0,
  },
  setEase: (value: {
    index: number;
    syllables: number;
    words: number;
    sentences: number;
  }) => {},
});

export default function LeiturabilidadeProvider({ children }) {
  const [ease, setEase] = useState({
    index: 0,
    syllables: 0,
    words: 0,
    sentences: 0,
  });

  useEffect(() => {}, []);

  return (
    <LeiturabilidadeContext.Provider
      value={{
        ease,
        setEase,
      }}
    >
      {children}
    </LeiturabilidadeContext.Provider>
  );
}
export function useLeiturabilidade() {
  return useContext(LeiturabilidadeContext);
}
