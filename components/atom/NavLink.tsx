import Link from "next/link";
import { ReactNode } from "react";

type FooterProps = {
    href: string;
    children: ReactNode;
}

const NavLink = ({href, children}: FooterProps) => {
    return (
        <Link href={href} className="transition hover:text-teal-500 dark:hover:text-teal-400">
            {children}
        </Link>
    )
}

export default NavLink