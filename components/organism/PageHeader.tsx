"use client"

import { ContainerInner, ContainerOuter } from "@/components/molecules/Container"
import Elektrodukasi from "@/components/atom/Elektrodukasi"

const PageHeader = () => {
    return (
        <>
            <header className="pointer-events-none relative z-50 flex flex-none flex-col">
                
                    <ContainerOuter className="top-0 order-last -mb-3 pt-3">
                        <ContainerInner>
                            <Elektrodukasi />
                        </ContainerInner>
                        <ContainerInner>
                            Menu
                        </ContainerInner>
                    </ContainerOuter>
            </header>
        </>
    )
}

export default PageHeader