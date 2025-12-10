"use client"

import { MainLayout } from "@/components/organism/MainLayout";
import { ReactNode } from "react"

type BlogLayoutProps = {
    children : ReactNode;
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
    return <MainLayout>{children}</MainLayout>
}

export default BlogLayout