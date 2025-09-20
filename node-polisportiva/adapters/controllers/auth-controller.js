import login from "../../application/use-cases/auth/login.js"
// import verifyToken from "../../application/use-cases/auth/verify-token"
import add from "../../application/use-cases/user/add.js"
// import { ResponseError } from "../../src/exceptions/response-error"

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
        console.log("fasfadf")

        try {
            const { token, user } = await login(email, password, userDbRepository, authService)
            console.log(token, user)
            return {
                statusCode: 200,
                status: "SUCCESS",
                message: "Success retrieved sports facility data",
                data: {
                    token: token,
                    user: {
                        username: user.username,
                        email: user.email,
                        firstName: user.firstName,
                        lastName: user.lastName
                    }
                }
            }
        } catch (error) {
            throw error;
        }

    }

    const registerAuth = async ({ request: {
        body,
        params,
        query
    } }) => {
        const username = request.body.username;
        const password = request.body.password;
        const address = {
            state: request.body.address.state,
            city: request.body.address.city,
            streetName: request.body.address.streetName,
            streetNumber: request.body.address.streetNumber,
            postcode: request.body.address.postcode,

        };
        const email = request.body.email;
        const firstName = request.body.firstName;
        const lastName = request.body.lastName;
        const fiscalCode = request.body.fiscalCode;

        try {
            const { userResult, addressResult } = await add(
                {
                    username,
                    password,
                    address,
                    email,
                    firstName,
                    lastName,
                    fiscalCode
                }, userDbRepository, addressDbRepository
            )

            return {
                statusCode: 200,
                status: "SUCCESS",
                message: "Success retrieved user data",
                data: {
                    username: userResult.username,
                    address: {
                        state: addressResult.state,
                        city: addressResult.city,
                        streetName: addressResult.streetName,
                        streetNumber: addressResult.streetNumber,
                        postcode: addressResult.postcode
                    },
                    email: userResult.email,
                    firstName: userResult.firstName,
                    lastName: userResult.lastName,
                    fiscalCode: userResult.fiscalCode
                },
            }
        } catch (error) {
            throw error
        }
    }


    return {
        loginAuth,
        registerAuth,
    }
}