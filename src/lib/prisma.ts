import { PrismaClient } from "@/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set in environment variables");
}

const connectionString = `${process.env.DATABASE_URL}`
const adapter = new PrismaPg({connectionString});

export const prisma = new PrismaClient({adapter})