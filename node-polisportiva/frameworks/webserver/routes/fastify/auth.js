import authController from "../../../../adapters/controllers/auth-controller.js"
import userRepository from "../../../../application/repositories/user-repository.js"
import authService from "../../../../application/services/auth-service.js"
import userPostgresRepository from "../../../database/postgres/repositories/user-repository.js"
import authServiceImpl from "../../../service/auth-service.js"
import { postLoginSchema } from "./schemas/auth/post-login.js"
import { postRegisterSchema } from "./schemas/auth/post-register.js"

export default function authRoute(fastify) {
    const controller = authController(userRepository, userPostgresRepository, authService, authServiceImpl(process.env.JWT_SECRET, process.env.JWT_EXP_DURATION))

    fastify.post('/login', { schema: postLoginSchema }, async (request, reply) => {
        const result = await controller.loginAuth({ request })
        reply.code(result.statusCode).send(result)
    })

    // fastify.post('/register', { schema: postRegisterSchema }, async (request, reply) => {
    //     const result = await controller.registerAuth(request)
    //     reply.code(result.statusCode).send(result)
    // })
}