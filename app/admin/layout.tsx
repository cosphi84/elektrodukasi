"use client"
import { AdministratorLayout } from "@/components/organism/AdministratorLayout";
import { ReactNode } from "react";

const AdminLayout = ({ children }: { children:ReactNode}) => {
    return <AdministratorLayout>{children}</AdministratorLayout>
}

export default AdminLayout