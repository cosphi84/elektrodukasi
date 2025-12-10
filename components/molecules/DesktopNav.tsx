"use client"

import { ComponentPropsWithoutRef } from "react"
import NavItem from "@/components/atom/NavItem"

type DesktopNavProps = ComponentPropsWithoutRef<'nav'>

const DesktopNav = ({className, ...props} : DesktopNavProps) => {
    return (
        <nav className={className} {...props}>
            <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                <NavItem href="/about">Tentangku</NavItem>
                <NavItem href="/artikel">Artikel</NavItem>
                <NavItem href="/projects">Projects</NavItem>
            </ul>
        </nav>
    )
}

export default DesktopNav