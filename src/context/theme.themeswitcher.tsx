
import { createContext, useCallback, useContext, useEffect, useState } from "react";

interface IThemeSwitcher {
    ThemeColor: string;
    handleTheme: () => void;
}

export const ThemeContext = createContext<IThemeSwitcher>({} as IThemeSwitcher);


export const ThemeColorProvider = ({ children }: any) => {

    const [ThemeColor, setThemeColor] = useState<("light" | "dark")>("light");

    const handleTheme = useCallback(() => {
        localStorage.setItem('color_theme', ThemeColor);
        setThemeColor(ThemeColor === "dark" ? "light" : "dark");
    }, [ThemeColor])

    useEffect(() => {
        let color_theme = localStorage.getItem('color_theme');
        setThemeColor(color_theme === "dark" ? "dark" : "light");
    }, [])


    return (
        <ThemeContext.Provider value={{ ThemeColor, handleTheme }} >
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeColor = () => {
    const context = useContext(ThemeContext)
    return context;
}