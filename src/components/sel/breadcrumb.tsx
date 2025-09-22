"use client";

import { usePathname } from "next/navigation";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../ui/breadcrumb";
import Link from "next/link";

const Breadcrumbs = () => {
    const path = usePathname();
    const segments = path.split("/").filter((seg) => seg !== "");
  return (
    <Breadcrumb>
        <BreadcrumbList>
            <BreadcrumbItem>
                <BreadcrumbLink asChild>
                    <Link href="/">Home</Link>
                </BreadcrumbLink>
            </BreadcrumbItem>
            
        </BreadcrumbList>
    </Breadcrumb>
  )
}

export default Breadcrumbs;