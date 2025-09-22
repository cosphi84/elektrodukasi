import Breadcrumbs from "@/components/sel/breadcrumb";
import { ReactNode } from "react";

export default function BlogLayout({ children }: {children: ReactNode}){
    return(
        <>
            <header className="container mx-auto border border-black dark:border-white">
                
                <h1 className="text-4xl font-bold">Elektrodukasi</h1>
                <h2>Belajar Elektronuka</h2>
                <Breadcrumbs />
            </header>
            <main className="container mx-auto border border-red-600">
                {children}
            </main>
            <footer className="container flex mx-auto my-10 justify-center text-sm text-gray-500 border border-slate-600">
                &copy; {new Date().getFullYear()} elektrodukasi.id. All rights reserved.
            </footer>
        </>
    )
}