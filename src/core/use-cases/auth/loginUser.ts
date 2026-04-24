import { User,UserSchema  } from "@/src/core/domain/entities/User";
import prisma from "@/src/lib/db";
import { compareHashed } from "@/src/lib/hash";
import { generateAccessToken, generateRefreshToken } from "@/src/lib//utils/jwt";
import { UserRepository } from "@/src/services/userRepository";
import { bcryptServices } from "@/src/lib/bcrypt";

export const LoginUser = async (user: User, userRepository: UserRepository, authService: typeof bcryptServices) => {

     const validateUser = await userRepository.findByEmail(user.email);
    if (!validateUser) {
        throw new Error("User not found");
    }

    if (!validateUser) {
        throw new Error("Usuario no encontrado");
    }

    const validateHash = await compareHashed(user.password, validateUser.password);
    if (!validateHash) {
        throw new Error("Contraseña incorrecta");

    }

    const payload = {
        email: user.email
    }

    const accessToken = generateAccessToken(payload);
    const refreshToken = generateRefreshToken(payload);

    return {
        accessToken,
        refreshToken
    }
}