import jwt from 'jsonwebtoken'

const ACCESS_SECRET = process.env.JWT_ACCESS_SECRET as string;
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET as string;

// const SECRET = process.env.JWT_SECRET || "secret";
// //payload tipado
interface Payload {
    id: string;
    email: string
}

export function generateAccessToken(payload: Payload) {
    return jwt.sign(payload, ACCESS_SECRET, {
        expiresIn: "15m"
    })
}
//refresh
export function generateRefreshToken(payload: object) {
    return jwt.sign(payload, REFRESH_SECRET, {
        expiresIn: "7d"
    })
}

//validar accesstoken
export function validateAccessToken(token: string) {
    return jwt.sign(token, ACCESS_SECRET)
}
//validar refreshtoken
export function validateRefreshToken(token: string) {
    return jwt.sign(token, REFRESH_SECRET)
}