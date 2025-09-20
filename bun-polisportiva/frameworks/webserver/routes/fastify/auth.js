import authController from "../../../../adapters/controllers/auth-controller"
import userRepository from "../../../../application/repositories/user-repository"
import authService from "../../../../application/services/auth-service"
import userPostgresRepository from "../../../../frameworks/database/postgres/repositories/user-repository"
import authServiceImpl from "../../../../frameworks/service/auth-service"
import { postLoginSchema } from "./schemas/auth/post-login"
import { postRegisterSchema } from "./schemas/auth/post-register"

export default function authRoute(fastify) {
    const controller = authController(userRepository, userPostgresRepository, authService, authServiceImpl(process.env.JWT_SECRET, process.env.JWT_EXP_DURATION))

    fastify.post('/login', { schema: postLoginSchema }, async (request, reply) => {
        const result = await controller.loginAuth({request})
        reply.code(result.statusCode).send(result)
    })

    // fastify.post('/register', { schema: postRegisterSchema }, async (request, reply) => {
    //     const result = await controller.registerAuth(request)
    //     reply.code(result.statusCode).send(result)
    // })
}