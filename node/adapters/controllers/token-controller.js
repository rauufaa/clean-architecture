import verifyToken from "../../application/use-cases/auth/verify-token.js"

export default function tokenController(
    authServiceInterface,
    authServiceImpl,
) {
    const authService = authServiceInterface(authServiceImpl())

    const verify = async ({ request: { headers } }) => {
        const token = headers.authorization
        try {
            const { decoded } = await verifyToken(token, authService)
            return {
                decoded
            }
        } catch (error) {
            throw error
        }
    }

    return {
        verify
    }
}