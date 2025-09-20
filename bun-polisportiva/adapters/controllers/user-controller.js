import add from "../../application/use-cases/user/add";
import findById from "../../application/use-cases/user/find-by-id";
import { ResponseError } from "../../src/exceptions/response-error";

export default function userController(
    userDBRepositoryInterface,
    userDBRepositoryImpl,
    addressDBRepositoryInterface,
    addressDBRepositoryImpl,
    authServiceInterface,
    authServiceImpl,
) {
    const userDbRepository = userDBRepositoryInterface(userDBRepositoryImpl())
    const addressDbRepository = addressDBRepositoryInterface(addressDBRepositoryImpl())
    const authService = authServiceInterface(authServiceImpl())

    const getUser = async ({ request: {
        body,
        params,
        query
    } }) => {
        const id  = params.id

        try {
            const { user, address } = await findById(id, userDbRepository, addressDbRepository)
            return {
                statusCode: 200,
                status: "SUCCESS",
                message: "Success retrieved user data",
                data: {
                    id: user.id,
                    username: user.username,
                    address: {
                        state: address.state,
                        city: address.city,
                        streetName: address.streetName,
                        streetNumber: address.streetNumber,
                        postcode: address.postcode
                    },
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    fiscalCode: user.fiscalCode
                },
            }
        } catch (error) {
            throw error
        }
    }

    const postNewUser = async ({ request: {
        body,
        params,
        query
    } }) => {
        const username = body.username;
        const password = body.password;
        const address = {
            state: body.address.state,
            city: body.address.city,
            streetName: body.address.streetName,
            streetNumber: body.address.streetNumber,
            postcode: body.address.postcode,

        };

        const email = body.email;
        const firstName = body.firstName;
        const lastName = body.lastName;
        const fiscalCode = body.fiscalCode;

        
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
                }, userDbRepository, addressDbRepository, authService
            )

            return {
                statusCode: 200,
                status: "SUCCESS",
                message: "Success create new user",
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

    const postNewUser2 = async ({
        username,
        password,
        address: {
            state,
            city,
            streetName,
            streetNumber,
            postcode,
        },
        email,
        firstName,
        lastName,
        fiscalCode,
    }) => {
        // const username = request.body.username;
        // const password = request.body.password;
        // const address = {
        //     state: request.body.address.state,
        //     city: request.body.address.city,
        //     streetName: request.body.address.streetName,
        //     streetNumber: request.body.address.streetNumber,
        //     postcode: request.body.address.postcode,

        // };

        // const email = request.body.email;
        // const firstName = request.body.firstName;
        // const lastName = request.body.lastName;
        // const fiscalCode = request.body.fiscalCode;

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
                }, userDbRepository, addressDbRepository, authService
            )

            return {
                statusCode: 200,
                status: "SUCCESS",
                message: "Success create new user",
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
        postNewUser,
        getUser
    }
}