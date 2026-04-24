import bcrypt from "bcryptjs";

export const hashRound = 10;

export async function hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, hashRound)
}

export async function compareHashed(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash)
}