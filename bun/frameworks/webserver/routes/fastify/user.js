import userRepositoryInterface from "../../../../application/repositories/user-repository.js"
import userRepositoryImpl from "../../../database/postgres/repositories/user-repository.js"
import addressRepositoryInterface from "../../../../application/repositories/address-repository.js"
import addressRepositoryImpl from "../../../database/postgres/repositories/address-repository.js"
import authServiceInterface from "../../../../application/services/auth-service.js"
import authServiceImpl from "../../../service/auth-service.js"
import userController from "../../../../adapters/controllers/user-controller.js"
import { postUserSchema } from "./schemas/user/post-user.js"
import { getUserSchema } from "./schemas/user/get-user.js"

export default async function userRoute(fastify, opts) {
    const {authHandler} = opts
    const controller = userController(userRepositoryInterface, userRepositoryImpl, addressRepositoryInterface, addressRepositoryImpl, authServiceInterface, authServiceImpl(process.env.JWT_SECRET))

    fastify.get('/:id', { schema: getUserSchema }, async (request, reply) => {
        const result = await controller.getUser({ request })
        reply.code(result.statusCode).send(result)

    })

    fastify.post('/', { schema: postUserSchema }, async (request, reply) => {
        const result = await controller.postNewUser({ request })
        reply.code(result.statusCode).send(result)
    })
}