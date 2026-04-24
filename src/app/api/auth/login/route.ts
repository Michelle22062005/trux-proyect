import { LoginUser } from "@/src/core/use-cases/auth/loginUser";
import { NextResponse } from "next/server";
import { bcryptServices } from "@/src/lib/bcrypt";
import { userRepository } from "@/src/services/userRepository";
import { User } from "@/src/core/domain/entities/User";

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();
        if (!email || !password) {
            return NextResponse.json({ message: "Campos requeridos" }, { status: 400 })
        }

        const userLogin = {
            email: email,
            password: password
        } as User;

        const token = await LoginUser(
            userLogin,
            userRepository,
            bcryptServices
        )
        return NextResponse.json({ token });

    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}