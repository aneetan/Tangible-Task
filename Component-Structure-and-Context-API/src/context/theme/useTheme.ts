import { useContext } from "react"
import { ThemeContext } from "./ThemeContext";

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if(!context){
        throw new Error ("Context must be defined from ThemeProvider");
    }

    return context;
}