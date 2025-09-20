import bcrypt from "bcryptjs";
import { createSigner, createVerifier } from "fast-jwt";

export default function authService(jwtSecret, jwtExpDur) {
    
    const jwtSignPromise = createSigner({
        key: async () => jwtSecret,
        expiresIn: jwtExpDur,
    })
    const jwtVerifyPromise = createVerifier({
        key: async () => jwtSecret,
    })


    const encryptPassword = (password) => {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hash(password, salt);
    }

    const comparePassword = (password, hashedPassword) =>
        bcrypt.compare(password, hashedPassword);

    const verifyToken = (token) => jwtVerifyPromise(token)

    const generateToken = (payload) => jwtSignPromise(payload)

    return () => ({
        encryptPassword,
        comparePassword,
        verifyToken,
        generateToken
    });
}