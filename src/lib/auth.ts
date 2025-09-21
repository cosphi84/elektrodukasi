import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { prisma } from "@/lib/prisma";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";

export const {handlers, auth, signIn, signOut} = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        Google({
            allowDangerousEmailAccountLinking: true
        }),
        GitHub({
            allowDangerousEmailAccountLinking: true
        })
    ],
    callbacks: {
        async signIn({ user }) {
            if(!user.email) return false

            const theUser = await prisma.user.findUnique({
                where: { email: user.email}
            })

            if(!theUser){
                return false
            }

            return true
        }
    }
})