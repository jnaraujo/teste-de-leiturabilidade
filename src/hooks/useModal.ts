import { useContext } from "react";

import { ModalContext } from "../context/ModalContext";

export default function useModal() {
  return useContext(ModalContext);
}
