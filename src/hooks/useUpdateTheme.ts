import { useContext } from "react";

import { UpdateThemeContext } from "../context/UpdateThemeContext";

export default function useUpdateTheme() {
  return useContext(UpdateThemeContext);
}
