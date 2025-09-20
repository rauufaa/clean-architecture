import { DomainError } from "../../../src/domain/error/domain-error.js"

export default async function login(email, password, userDbRepository, authService) {

    try {
        const user = await userDbRepository.findByEmail(email)
        if (!user) {
            throw new DomainError(404, "AUTH_USER_NOT_FOUND", "Not found", "User not found")
        }

        const isMatch = await authService.comparePassword(password, user.password)
        if (!isMatch) {
            throw new DomainError(400, "AUTH_PASSWORD_INVALID", "Bad request", "Password false")
        }

        const exp = Math.floor(Date.now() / 1000) + 3600
        const iat = Math.floor(Date.now() / 1000)
        const token = await authService.generateToken({
            // exp: exp,
            // nbf: exp,
            // iat: iat,
            aud: "http://localhost:3000",
            iss: "http://localhost:3000",
            sub: "http://localhost:3000",
            id: user.id,
            email: user.email,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName
        })

        if (!token) throw new DomainError(500, "AUTH_TOKEN_GENERATION_FAILED", "Internal server error", "Failed to generate token")

        return {
            token, user
        }
    } catch (error) {
        throw error
    }

}