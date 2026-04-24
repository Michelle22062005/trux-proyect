import bcrypt from 'bcryptjs';
import { AuthService } from '../core/domain/interfaces/AuthService';

export const bcryptServices: AuthService={
    async hashPassword(password:string):Promise<string>{
        return bcrypt.hash(password, 10)
    },
    async comparePassword(password:string, hash:string):Promise<boolean>{
        return bcrypt.compare(password, hash)
    }
}