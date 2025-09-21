import { Category, User } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";

const now = new Date();

const risam:User = {
    id : crypto.randomUUID(),
    name: "Risam Al-Banjumasy",
    password: null,
    image: null,
    email: "risam1984@gmail.com",
    emailVerified: true,
    role: "ADMIN",
    phone: "0811262772",
    bio: null,
    createdAt: now,
    updatedAt: now
}

const kategori:Category[] = [
    {id: 1, name: "Teknik Analog", createdAt: now},
    {id: 2, name: "Teknik Digital", createdAt: now},
    {id: 3, name: "Teknik Radio", createdAt: now},
    {id: 4, name: "Komponen", createdAt: now},
    {id: 5, name: "Microcontroller", createdAt: now},
    {id: 6, name: "Web Programming", createdAt: now},
    {id: 7, name: "UnCategorized", createdAt: now}
]

export async function main(){

    await prisma.user.upsert({
        where: {email: risam.email},
        update: risam,
        create: risam
    });

    kategori.map(async (item)=>{
        await prisma.category.upsert({
            where: {id: item.id},
            update: item,
            create: item,
        })
    })
    
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (err) => {
        console.log(err);
        await prisma.$disconnect();
        process.exit(1);
    })