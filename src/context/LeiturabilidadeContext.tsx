import { useContext, createContext, useState, useEffect } from "react";

type LeiturabilidadeContextType = {
  ease: {
    index: number;
    syllables: number;
    words: number;
    sentences: number;
  };
  // eslint-disable-next-line no-unused-vars
  setEase: (value: Number | any) => void;
};

const LeiturabilidadeContext = createContext<LeiturabilidadeContextType>({
  ease: {
    index: 0,
    syllables: 0,
    words: 0,
    sentences: 0,
  },
  // eslint-disable-next-line no-unused-vars
  setEase: (value: {
    index: number;
    syllables: number;
    words: number;
    sentences: number;
  }) => {},
});

const LeiturabilidadeProvider = ({ children }) => {
  const [ease, setEase] = useState({
    index: 0,
    syllables: 0,
    words: 0,
    sentences: 0,
  });

  useEffect(() => {}, []);

  return (
    <LeiturabilidadeContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        ease,
        setEase,
      }}
    >
      {children}
    </LeiturabilidadeContext.Provider>
  );
};
export function useLeiturabilidade() {
  return useContext(LeiturabilidadeContext);
}

export default LeiturabilidadeProvider;
