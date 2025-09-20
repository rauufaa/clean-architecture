import authController from "../../../../adapters/controllers/auth-controller.js"
import userRepository from "../../../../application/repositories/user-repository.js"
import authService from "../../../../application/services/auth-service.js"
import userPostgresRepository from "../../../database/postgres/repositories/user-repository.js"
import authServiceImpl from "../../../service/auth-service.js"
import { postLoginSchema } from "./schemas/auth/post-login.js"

export default async function authRoute(fastify, opts) {
    const {config} = opts
    const controller = authController(userRepository, userPostgresRepository, authService, authServiceImpl(config.jwt.secret, config.jwt.exp))

    fastify.post('/login', { schema: postLoginSchema }, async (request, reply) => {
        const result = await controller.loginAuth({ request })
        reply.code(result.statusCode).send(result)
    })
}