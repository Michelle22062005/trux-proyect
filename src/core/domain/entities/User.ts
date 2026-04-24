import { z } from "zod";

export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
}
export const UserSchema = z.object({
    name: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
    email: z.string().email("El email debe ser válido"),
    password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});