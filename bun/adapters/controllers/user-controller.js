import add from "../../application/use-cases/user/add.js";
import findById from "../../application/use-cases/user/find-by-id.js";

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
                    id: userResult.id,
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