import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
    return(
        <div className="flex flex-col items-center min-h-screen text-center gap-y-5 mt-5 w-11/12 m-auto">
            <h1 className="text-lg font-bold hover:text-primary cursor-pointer">Ups, halaman tidak ditemukan.</h1>
            <Image src="/assets/not-found.gif" alt="Not Found" width={500} height={500} className="rounded-md" unoptimized />
            <Link href="/" className="cursisor-pointer">
                <Button className="bg-primary text-white hover:bg-primary/80 shadow-lg shadow-primary/50">
                <HomeIcon size={6} />
                Depan
                </Button>
               
            </Link>
        </div>
    )
}

export default NotFound;