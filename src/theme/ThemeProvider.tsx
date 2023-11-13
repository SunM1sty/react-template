import React, {PropsWithChildren, useMemo, useState} from "react";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, defaultTheme} from "./ThemeContext";

export const ThemeProvider: React.FC<PropsWithChildren<{}>> = ({children}) => {
    const [currentTheme, setCurrentTheme] = useState<Theme>(defaultTheme)

    const defaultThemeProviderValue = useMemo(() => ({
        theme: currentTheme,
        setTheme: setCurrentTheme
    }), [currentTheme])

    return(
        <ThemeContext.Provider value={defaultThemeProviderValue}>
            {children}
        </ThemeContext.Provider>
    )
}