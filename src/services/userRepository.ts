import { User } from "@/src/core/domain/entities/User";
import  prisma  from "@/src/lib/db";

export interface UserRepository {
  findAll(): Promise<User[]>;
  findByEmail(email: string): Promise<User>;
  create(user: User): Promise<User>;
}
export const userRepository: UserRepository = {
    async findAll(): Promise<User[]> {
        return await prisma.user.findMany() as User[];
    },
    async findByEmail(email: string): Promise<User> {
        const user = await prisma.user.findUnique({
            where: { email }
        });
        if (!user) {
            throw new Error("Usuario no encontrado")
        }
        return user as User;
    },
    async create(user: User): Promise<User> {
        const exists = await prisma.user.findUnique({
            where: { email: user.email }
        });

        if (exists) {
            throw new Error("Usuario ya existe")
        }

        const newUser = await prisma.user.create({
            data: {
                id: user.id || undefined,
                name: user.name,
                email: user.email,
                password: user.password,
            }
        });

        return newUser as User;
    }

}