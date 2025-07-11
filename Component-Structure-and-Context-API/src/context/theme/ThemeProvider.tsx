import { useEffect, useMemo, useState, type ReactNode } from "react";
import { ThemeContext, ThemeProps } from "./ThemeContext";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme]  = useState<ThemeProps>(ThemeProps.Light);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === ThemeProps.Light ? ThemeProps.Dark : ThemeProps.Light);
    };

    useEffect(() => {
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    const value = useMemo(() => (
        { theme, setTheme, toggleTheme }
    ), [theme]);

    return(
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}