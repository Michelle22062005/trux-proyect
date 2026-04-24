import { registerUser } from "@/src/core/use-cases/auth/registerUser";
import { NextResponse } from "next/server";
import { User } from "@/src/core/domain/entities/User";


export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();
        if (!email || !password) {
            return NextResponse.json(
                { message: "Email y password requeridos" },
                { status: 400 }
            );
        }
        const userLogin = {
            email: email,
            password: password
        } as User;
        const user = {
            name: "",
            email: email,
            password: password
        } as User;
        await registerUser(user);
        return NextResponse.json(
            { message: "Registrado" },
            { status: 201 }
        );

    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "Error inesperado";

        const statusCode = message.includes("existente") ? 409 : 500;

        return NextResponse.json(
            { message },
            { status: statusCode }
        );
    }
}