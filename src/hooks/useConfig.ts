import { useContext } from "react";

import { ConfigContext } from "../context/ConfigContext";

export default function useConfig() {
  return useContext(ConfigContext);
}
