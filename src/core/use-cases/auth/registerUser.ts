import { UserSchema } from "@/src/core/domain/entities/User";
import prisma from "@/src/lib/db";
import { hashPassword } from "@/src/lib/hash";
import z from "zod";


export async function registerUser(user: z.infer<typeof UserSchema>): Promise<void> {

    const validateRegister = await prisma.user.findUnique({
        where: { email: user.email }
    });
    if (validateRegister) {
        throw new Error("Error registrando usuario ya existe");
    }

    const hashed = await hashPassword(user.password);

    await prisma.user.create({
        data: {
            name: user.name,
            email: user.email,
            password: hashed
        }
    });



}