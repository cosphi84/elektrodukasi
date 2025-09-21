import { User } from "@/generated/prisma";

export type UserSafe = Omit<User, "password">;