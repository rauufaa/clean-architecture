import login from "../../application/use-cases/auth/login.js"

export default function authController(
    userDBRepositoryInterface,
    userDBRepositoryImpl,
    authServiceInterface,
    authServiceImpl,
) {
    const userDbRepository = userDBRepositoryInterface(userDBRepositoryImpl())
    const authService = authServiceInterface(authServiceImpl())

    const loginAuth = async ({ request: {
        body,
        params,
        query
    } }) => {
        const email = body.email
        const password = body.password

        try {
            const { token, user } = await login(email, password, userDbRepository, authService)
            return {
                statusCode: 200,
                status: "SUCCESS",
                message: "Success retrieved sports facility data",
                data: {
                    token: token,
                    user: {
                        id: user.id,
                        username: user.username,
                        email: user.email,
                        firstName: user.firstName,
                        lastName: user.lastName
                    }
                }
            }
        } catch (error) {
            throw error
        }

    }


    return {
        loginAuth,
    }
}