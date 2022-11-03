import { atom } from "jotai";

export const themeAtom = atom<"dark" | "light">("light");
export const mailAtom = atom<boolean>(false);
