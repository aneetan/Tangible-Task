import { createContext } from "react";

export enum ThemeProps {
    Light = "light",
    Dark = "dark"
}

export type ThemeContextType = {
    theme: ThemeProps;
    setTheme: (theme: ThemeProps) => void;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);