import sportsFieldsController from "../../../../adapters/controllers/sportsfield-controller"
import sportsFieldsRepositoryInterface from "../../../../application/repositories/sportsfield-repository"
import sportsFieldsRepositoryImpl from "../../../database/postgres/repositories/sportsfield-repository"
import authTokenHandler from "../../handler/authtoken-handler"
import { getSportsFieldSchema } from "./schemas/sportsfield/get-sportsfield"
import { getSportsFieldsSchema } from "./schemas/sportsfield/get-sportsfields"

export default function sportsFieldRoute(fastify) {
    const controller = sportsFieldsController(sportsFieldsRepositoryInterface, sportsFieldsRepositoryImpl)

    fastify.get('/', { schema: getSportsFieldsSchema, onRequest: [authTokenHandler] }, async (request, reply) => {
        const result = await controller.getSportsFields({ request })
        reply.code(result.statusCode).send(result)
    })

    fastify.get('/:id', { schema: getSportsFieldSchema, onRequest: [authTokenHandler] }, async (request, reply) => {
        const result = await controller.getSportsField({ request })
        reply.code(result.statusCode).send(result)
    })
}