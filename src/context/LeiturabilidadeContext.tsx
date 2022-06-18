import { useContext, createContext, useState, useEffect } from "react";

type LeiturabilidadeContextType = {
  index: Number;
  setIndex: (value: Number | any) => void;
};

const LeiturabilidadeContext = createContext<LeiturabilidadeContextType>({
  index: 100,
  setIndex: (value: number) => {},
});

export default function LeiturabilidadeProvider({ children }) {
  const [index, setIndex] = useState(100);

  useEffect(() => {}, []);

  return (
    <LeiturabilidadeContext.Provider
      value={{
        index,
        setIndex,
      }}
    >
      {children}
    </LeiturabilidadeContext.Provider>
  );
}
export function useLeiturabilidade() {
  return useContext(LeiturabilidadeContext);
}
