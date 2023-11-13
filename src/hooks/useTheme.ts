import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "../theme/ThemeContext";
import {useContext} from "react";

type UseThemeReturnResult = {
    theme: Theme
    toggleTheme: () => void
}

export function useTheme(): UseThemeReturnResult {
    const {theme, setTheme} = useContext(ThemeContext)
    const toggleTheme = () => {
        const nextTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK

        setTheme(nextTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, nextTheme)
    }

    return {
        theme,
        toggleTheme
    }
}