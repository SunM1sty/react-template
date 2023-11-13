import React, {createContext} from "react";

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

export type ThemeContextType = {
    theme: Theme
    setTheme: React.Dispatch<React.SetStateAction<Theme>>
}

export const LOCAL_STORAGE_THEME_KEY = 'theme'
export const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

export const ThemeContext = createContext<ThemeContextType>({
    theme: defaultTheme,
    setTheme: (theme) => {throw Error(`Theme's setter wasn't implemented for ${theme}`)}
})

