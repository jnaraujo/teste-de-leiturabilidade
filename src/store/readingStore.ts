import { create } from "zustand";

export interface IEase {
  index: number;
  syllables: number;
  words: number;
  sentences: number;
}

export interface IReadingStore {
  ease: IEase;
  setEase: (ease: IEase) => void;
}

export const useReadingStore = create<IReadingStore>((set) => ({
  ease: {
    index: 0,
    syllables: 0,
    words: 0,
    sentences: 0,
  },
  setEase: (ease) => set({ ease }),
}));
