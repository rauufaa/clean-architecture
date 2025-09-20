import userRepositoryInterface from "../../../../application/repositories/user-repository"
import userRepositoryImpl from "../../../database/postgres/repositories/user-repository"
import addressRepositoryInterface from "../../../../application/repositories/address-repository"
import addressRepositoryImpl from "../../../database/postgres/repositories/address-repository"
import authServiceInterface from "../../../../application/services/auth-service"
import authServiceImpl from "../../../../frameworks/service/auth-service"
import userController from "../../../../adapters/controllers/user-controller"
import { postUserSchema } from "./schemas/user/post-user"
import { getUserSchema } from "./schemas/user/get-user"

export default function userRoute(fastify) {
    const controller = userController(userRepositoryInterface, userRepositoryImpl, addressRepositoryInterface, addressRepositoryImpl, authServiceInterface, authServiceImpl(process.env.JWT_SECRET))

    fastify.get('/:id', { schema: getUserSchema }, async (request, reply) => {
        const result = await controller.getUser({request})
        reply.code(result.statusCode).send(result)

    })

    fastify.post('/', { schema: postUserSchema }, async (request, reply) => {
        const result = await controller.postNewUser({request})
        reply.code(result.statusCode).send(result)
    })
}