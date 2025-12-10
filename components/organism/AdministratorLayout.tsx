"use client"

import { ReactNode } from "react";
import { Footer } from "@/components/organism/Footer";
import PageHeader from "@/components/organism/PageHeader";

export function AdministratorLayout({ children } : {children: ReactNode}) {
    return (
        <>
            <div className="fixed inset-0 flex justify-center sm:px-8">
                <div className="flex w-full max-w-7xl lg:px-8">
                    <div className="w-full bg-zinc-200 ring-1 shadow-2xl shadow-gray-500 ring-teal-200 dark:bg-zinc-900 dark:ring-zinc-300/20" />
                </div>
            </div>
            <div className="relative flex w-full flex-col">
                <PageHeader />
                <main className="flex-auto">{ children }</main>
                <Footer />
            </div>
        </>
    )
}