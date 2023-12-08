"use client"

import { useAtom } from 'jotai'
import { ReactNode, useEffect, useMemo } from 'react'
import { themeGlobal } from './globalState'
import { retreiveFromLocalStorage, saveToLocalStorage } from './saveToStorage'

export default function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, themeSet] = useAtom(themeGlobal)

    useEffect(() => {
        if (theme === undefined) {
            const seenTheme = retreiveFromLocalStorage("theme")

            if (seenTheme !== null) {
                //set saved theme
                themeSet(seenTheme)
                return
            }

            //check preference for theme
            const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            if (darkModeMediaQuery.matches) {
                themeSet(false)
            } else {
                //default of light mode
                themeSet(true)
            }
        }
    }, [theme])

    //write theme to storage
    useEffect(() => {
        if (theme !== undefined) {
            saveToLocalStorage("theme", theme)
        }
    }, [theme])


    const themeStyles = useMemo(() => {
        type themeObj = {
            [key: string]: string
        }

        if (theme === undefined) return {}

        const newThemeObj: themeObj = {
            '--primaryColor': theme ? "98 156 252" : "98 156 252",
            '--secondaryColor': theme ? "37 45 55" : "37 45 55",
            '--tertiaryColor': theme ? "0, 0, 0" : "0, 0, 0",
            '--backgroundColor': theme ? "255, 255, 255" : "0, 0, 0",

            '--blackWhiteSwitch': theme ? "0, 0, 0" : "255, 255, 255",
            '--whiteBlackSwitch': theme ? "255, 255, 255" : "0, 0, 0",

            '--textColor': theme ? "0, 0, 0" : "255, 255, 255",

            '--highlightColor': theme ? "244 70 107" : "244 70 107",
        }

        return newThemeObj
    }, [theme])

    return (
        <div id='rootDiv' style={{ display: theme === undefined ? "none" : "", ...themeStyles }}>
            {children}
        </div>
    )
}
