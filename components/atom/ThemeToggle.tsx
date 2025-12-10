"use client"

import { SunIcon, MoonIcon } from "@heroicons/react/24/outline"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const ThemeToggle = () => {
    const {resolvedTheme, setTheme} = useTheme()
    const OtherTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, [])

    return(
        <button 
            type="button"
            aria-label={mounted ? `Ubah tema ke ${OtherTheme}` : 'Toggle Tema'}
            className="group rounded-full bg-white/90 px-3 py-2 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
            onClick={() => setTheme(OtherTheme)}>
                <SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden dark:fill-teal-50 dark:stroke-teal-500 dark:group-hover:fill-teal-50 dark:group-hover:stroke-teal-600" />
                <MoonIcon className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition not-dark:fill-teal-400/10 not-dark:stroke-teal-500 dark:block dark:group-hover:stroke-zinc-400" />
            </button>
    )
}

export default ThemeToggle