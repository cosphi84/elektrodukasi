import { ContainerInner, ContainerOuter } from "@/components/molecules/Container";

export function Footer(){
    return(
        <footer className="mt-32 flex-none">
            <ContainerOuter>
                <div className="border-t border-zinc-300 pt-6 pb-5 md:pt-10 md:pb-16 dark:border-zinc-700/40">
                    <ContainerInner>
                        <div className="flex flex-col items-center justify-center gap-6">
                            
                            <p className="text-sm text-zinc-400 dark:text-zinc-500">
                                &copy; {new Date().getFullYear()} elektrodukasi.id.
                            </p>
                        </div>
                    </ContainerInner>
                </div>
            </ContainerOuter>
        </footer>
    )
}