import { useContext } from "react";

import { LeiturabilidadeContext } from "../context/LeiturabilidadeContext";

export default function useLeiturabilidade() {
  return useContext(LeiturabilidadeContext);
}
