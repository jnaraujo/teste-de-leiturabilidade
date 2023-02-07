import { getLocalStorage, setLocalStorage } from "@/libs/localstorage";
import { create } from "zustand";

export interface IContentStore {
  content: string;
  setContent: (content: string) => void;
}

export const useContentStore = create<IContentStore>((set) => ({
  content: getLocalStorage("content-store").content || "",
  setContent: (content: string) => {
    set({ content });
    setLocalStorage("content-store", {
      content,
    });
  },
}));
